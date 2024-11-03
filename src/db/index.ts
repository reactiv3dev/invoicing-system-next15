import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
 

 
const db = drizzle(process.env.NEON_DB_URL!); 

export default db;