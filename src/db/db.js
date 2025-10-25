import PG from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const { Pool } = PG;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})