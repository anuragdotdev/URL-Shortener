import { Router } from "express";
import { UrlController } from "../controllers/url.controller.js";
import { UrlRepository } from "../repositories/url.repository.js";
import { UrlService } from "../services/url.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

/**
 * @openapi
 * /api/v1/urls:
 *   post:
 *     summary: Create a short URL
 *     tags:
 *       - URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UrlRequest'
 *     responses:
 *       201:
 *         description: Short URL created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UrlResponse'
 *       400:
 *         description: Invalid URL
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

const UrlRouter = Router()

const repository = new UrlRepository()
const service = new UrlService(repository)
const controller = new UrlController(service)

UrlRouter.post('/urls',asyncHandler(
    controller.createShortUrl.bind(controller)
))

export default UrlRouter

