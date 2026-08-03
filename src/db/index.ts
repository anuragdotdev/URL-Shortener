import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import "dotenv/config"
import { env } from "../config/config.js"
import { sql } from "drizzle-orm"
import { logger } from "../lib/logger.js"

const client = postgres(env.DATABASE_URL)

export const db = drizzle(client)

export async function connectDB(){
    try{
        await db.execute(sql`SELECT 1`)

        logger.info("Database connected successfully")
    }catch(error){
        logger.error("Failed to connect to the database")
        logger.error(error)
        process.exit(1)
    }
}