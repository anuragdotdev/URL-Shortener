import express from "express"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./config/swagger.js"
import healthRouter from "./routes/health.router.js"
import UrlRouter from "./routes/url.router.js"
import redirectRouter from "./routes/redirect.router.js"

const app = express()

app.use(cors())

app.use(express.json())

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
)

app.use('/api/v1',healthRouter)
app.use('/api/v1',UrlRouter)
app.use('/',redirectRouter)

export default app
