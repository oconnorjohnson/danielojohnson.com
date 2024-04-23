import { createClient as createNodeClient } from "@libsql/client";
import { createClient as createEdgeClient } from "@libsql/client/web";

export const tursoNodeClient = createNodeClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const tursoEdgeClient = createEdgeClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
