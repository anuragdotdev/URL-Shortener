import swaggerJsdoc from "swagger-jsdoc"

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "URL Shortener API",
            version: "1.0.0",
            description: "API Documentation for URL Shortener",
        },
        servers: [
            {
                url: "http://localhost:8000/api/v1",
            },
        ],
    },

    apis: ["./src/routes/*.ts"],
}

export const swaggerSpec = swaggerJsdoc(options)
