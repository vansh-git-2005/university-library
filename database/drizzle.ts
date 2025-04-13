import config from "@/lib/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

console.log("I am here: ", config)
const sql = neon(config.env.databaseUrl);
export const db = drizzle({ client: sql, casing: "snake_case" });
