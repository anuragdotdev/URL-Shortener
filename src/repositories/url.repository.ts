import { db } from "../db/index.js";
import { urls } from "../db/schema.js";
import { eq } from "drizzle-orm";

export class UrlRepository {
    async create(data: {
        originalUrl : string;
        shortCode: string;
    }){
        const[url] = await db
            .insert(urls)
            .values(data)
            .returning();

        return url;
    }

    async findByShortCode(shortCode: string){
        const [url] = await db.select().from(urls).where(eq(urls.shortCode, shortCode))

        return url;
    }

    async findByOriginalUrl(originalUrl: string){
        const [url] = await db.select().from(urls).where(eq(urls.originalUrl, originalUrl))

        return url;
    }

    async existsByShortCode(shortCode: string){
        const url = await this.findByShortCode(shortCode);

        return !!url;
    }
}