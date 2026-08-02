import winston from "winston"

const { combine, json, timestamp }  = winston.format

export const logger = winston.createLogger({
    format : combine(timestamp(),json()),
    transports : [new winston.transports.Console()],
})
