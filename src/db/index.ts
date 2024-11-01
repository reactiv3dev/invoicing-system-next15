import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Invoices } from './schema';

const pool = new Pool({ connectionString: process.env.NEON_DB_URL, max: 20 });
const db = drizzle(pool, {
    schema: { Invoices } 
});

export default db;