import { Request, Response } from "express"
import { logger } from "../lib/logger.js"

export const health = ( req : Request ,res : Response ) => {
    try{
        res.status(200).json({
            message : "Server working fine"
        })

        logger.info("Server working fine")
    }catch(error){
        res.status(400).json({
            success : false,
            error : 'Health check failed'
        })
        logger.error(error)
    }
}