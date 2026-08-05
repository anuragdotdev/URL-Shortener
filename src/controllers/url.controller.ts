import { Request, Response } from "express";
import { UrlService } from "../services/url.service.js";

export class UrlController{
    constructor(private readonly urlService: UrlService){}

    async createShortUrl(req: Request, res: Response){
        const {url} = req.body

        const result = await this.urlService.shortenUrl(url)

        res.status(201).json({
            success: true,
            data: {
                shortCode: result.shortCode,

                shortUrl:
                    `${req.protocol}://${req.get("host")}${req.baseUrl}/${result.shortCode}`
            }
        })
    }

    async redirect(req: Request<{ shortCode: string }>, res: Response){
        const { shortCode } = req.params
        const originalUrl = await this.urlService.getOriginalUrl(shortCode)

        res.redirect(originalUrl)
    }
}