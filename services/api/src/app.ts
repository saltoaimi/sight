import Fastify from "fastify";
import cors from "@fastify/cors";
import { healthRoutes } from "./routes/health";
import { providerRoutes } from "./routes/providers";
import { productRoutes } from "./routes/products";
import { eligibilityRoutes } from "./routes/eligibility";

export async function buildApp() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true });

  // Routes
  app.register(healthRoutes);
  app.register(providerRoutes, { prefix: "/api/v1/providers" });
  app.register(productRoutes, { prefix: "/api/v1/products" });
  app.register(eligibilityRoutes, { prefix: "/api/v1/eligibility" });

  return app;
}
