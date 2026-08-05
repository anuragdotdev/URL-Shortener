import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { UrlRepository } from "../repositories/url.repository.js";
import { UrlService } from "../services/url.service.js";
import { UrlController } from "../controllers/url.controller.js";

/**
 * @openapi
 * /{shortCode}:
 *   get:
 *     summary: Redirect to the original URL
 *     tags:
 *       - URL
 *     parameters:
 *       - in: path
 *         name: shortCode
 *         required: true
 *         schema:
 *           type: string
 *         description: Short code to redirect to the original URL
 *     responses:
 *       302:
 *         description: Redirects to original URL
 *       404:
 *         description: Short URL not found
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

const redirectRouter = Router()

const repository = new UrlRepository()
const service = new UrlService(repository)
const controller = new UrlController(service)

redirectRouter.get("/:shortCode",asyncHandler(
    controller.redirect.bind(controller)
))

export default redirectRouter