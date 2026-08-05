import { UrlRepository } from "../repositories/url.repository.js";
import { generateShortCode } from "../utils/generateShortCode.js";
import { isValidUrl } from "../utils/isValidUrl.js";

export class UrlService{
    constructor(private readonly repository: UrlRepository){}

    async shortenUrl(originalUrl: string){

        if(!isValidUrl(originalUrl)){
            throw new Error("Invalid url")
        }

        const existing = await this.repository.findByOriginalUrl(originalUrl)

        if(existing){
            return existing
        }

        let shortCode = generateShortCode()

        while(await this.repository.existsByShortCode(shortCode)){
            shortCode = generateShortCode()
        }

        const created = await this.repository.create({
            originalUrl,
            shortCode,
        })

        return {
            shortCode: created.shortCode,
        }

    }

    async getOriginalUrl(shortCode: string){
        const url = await this.repository.findByShortCode(shortCode)

        if(!url){
            throw new Error("Short URL not found")
        }

        return url.originalUrl
    }
}