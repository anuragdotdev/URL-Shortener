import app from "./app.js";
import { env } from "./config/config.js";
import { logger } from "./lib/logger.js";

const port  = env.PORT ?? "8000"

const startServer = async () => {
    app.listen(port , () => {
        logger.info(`Server started on port : ${port}`)
    })
}

startServer()
