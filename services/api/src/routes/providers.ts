import type { FastifyPluginAsync } from "fastify";
import { db } from "../db";
import { providers } from "../db/schema";
import { eq } from "drizzle-orm";

export const providerRoutes: FastifyPluginAsync = async (app) => {
  // List all active providers
  app.get("/", async (request, reply) => {
    const result = await db
      .select()
      .from(providers)
      .where(eq(providers.active, true));
    return result;
  });

  // Get provider by ID
  app.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const { id } = request.params;
    const result = await db
      .select()
      .from(providers)
      .where(eq(providers.id, id));

    if (result.length === 0) {
      return reply.status(404).send({ error: "Provider not found" });
    }
    return result[0];
  });
};
