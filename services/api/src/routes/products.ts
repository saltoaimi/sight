import type { FastifyPluginAsync } from "fastify";
import { db } from "../db";
import { products, providers } from "../db/schema";
import { eq, and, sql } from "drizzle-orm";

export const productRoutes: FastifyPluginAsync = async (app) => {
  // List products by category with filters
  app.get<{
    Querystring: {
      category?: string;
      islamic?: string;
      status?: string;
      limit?: string;
      offset?: string;
    };
  }>("/", async (request) => {
    const { category, islamic, status, limit = "20", offset = "0" } = request.query;

    const conditions = [];
    if (category) conditions.push(eq(products.category, category));
    if (islamic === "true") conditions.push(eq(products.islamicCompliant, true));
    if (status) {
      conditions.push(eq(products.status, status as "active" | "inactive" | "draft"));
    } else {
      conditions.push(eq(products.status, "active"));
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    const result = await db
      .select({
        product: products,
        provider: {
          id: providers.id,
          nameEn: providers.nameEn,
          nameAr: providers.nameAr,
          logoUrl: providers.logoUrl,
          type: providers.type,
          website: providers.website,
        },
      })
      .from(products)
      .leftJoin(providers, eq(products.providerId, providers.id))
      .where(whereClause)
      .limit(parseInt(limit, 10))
      .offset(parseInt(offset, 10));

    const countResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(products)
      .where(whereClause);

    // Flatten so each item has product fields + nested provider
    const data = result.map((row) => ({
      ...row.product,
      provider: row.provider,
    }));

    return {
      data,
      total: Number(countResult[0].count),
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
    };
  });

  // Get product by ID
  app.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const { id } = request.params;
    const result = await db
      .select({
        product: products,
        provider: {
          id: providers.id,
          nameEn: providers.nameEn,
          nameAr: providers.nameAr,
          logoUrl: providers.logoUrl,
          type: providers.type,
          website: providers.website,
        },
      })
      .from(products)
      .leftJoin(providers, eq(products.providerId, providers.id))
      .where(eq(products.id, id));

    if (result.length === 0) {
      return reply.status(404).send({ error: "Product not found" });
    }
    return {
      ...result[0].product,
      provider: result[0].provider,
    };
  });
};
