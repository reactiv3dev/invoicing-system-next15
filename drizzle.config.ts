import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
    path: "./.env.local"
});

if(typeof process.env.NEON_DB_URL !== "string") throw new Error(`Please set XATA_DATABASE_URL string`);

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    dbCredentials: {
        url: process.env.NEON_DB_URL,
    }
})