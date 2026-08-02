import { Router } from "express"
import { health } from "../controllers/health.controller.js"

const healthRouter = Router()

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 *     description: Returns a simple status message to verify the API is running.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server working fine
 */
healthRouter.get('/health', health)

export default healthRouter

