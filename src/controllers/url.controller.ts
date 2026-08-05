import { Request, Response } from "express";
import { UrlService } from "../services/url.service.js";

export class UrlController{
    constructor(private readonly urlService: UrlService){}

    async createShortUrl(req: Request, res: Response){
        try{
            const { url } = req.body 

            const result = await this.urlService.shortenUrl(url)

            return res.status(200).json({
                success : true,
                data : {
                    shortCode: result.shortCode,
                    shortUrl: `${req.protocol}://${req.get("host")}/${result.shortCode}`,
                }
            })
        }catch(error){
            return res.status(400).json({
                success: false,
                message : error instanceof Error ? error.message : "Something went wrong",
            })
        }
    }

    async redirect(req: Request<{ shortCode: string }>, res: Response){
        try{
            const { shortCode } = req.params

            const originalUrl = await this.urlService.getOriginalUrl(shortCode)

            return res.redirect(originalUrl)
        }catch(error){
            return res.status(400).json({
                success: false,
                message: error instanceof Error ? error.message : "Something went wrong",
            })
        }
    }
}