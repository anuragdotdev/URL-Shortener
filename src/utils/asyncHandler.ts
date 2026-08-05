import { Request, Response, NextFunction, RequestHandler } from "express";

export function asyncHandler<P = Record<string, any>, ResBody = any, ReqBody = any, ReqQuery = Record<string, any>>(
    fn: RequestHandler<P, ResBody, ReqBody, ReqQuery>
): RequestHandler<P, ResBody, ReqBody, ReqQuery> {
    return (
        req: Request<P, ResBody, ReqBody, ReqQuery>,
        res: Response<ResBody>,
        next: NextFunction
    ) =>{
        Promise.resolve(fn(req,res,next)).catch(next)
    }
}