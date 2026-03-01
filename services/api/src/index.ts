import "dotenv/config";
import { buildApp } from "./app";

async function start() {
  const app = await buildApp();

  try {
    const port = parseInt(process.env.PORT || "3001", 10);
    await app.listen({ port, host: "0.0.0.0" });
    console.log(`API server running on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
