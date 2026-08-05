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
                url: "http://localhost:8000",
                description: "Root redirect and application entrypoint",
            },
            {
                url: "http://localhost:8000/api/v1",
                description: "API endpoints",
            },
        ],
        tags: [
            {
                name: "URL",
                description: "URL shortener operations",
            },
        ],
        components: {
            schemas: {
                UrlRequest: {
                    type: "object",
                    required: ["url"],
                    properties: {
                        url: {
                            type: "string",
                            format: "uri",
                            description: "Original URL to shorten",
                        },
                    },
                },
                UrlResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                        },
                        data: {
                            type: "object",
                            properties: {
                                shortCode: {
                                    type: "string",
                                },
                                shortUrl: {
                                    type: "string",
                                    format: "uri",
                                },
                            },
                        },
                    },
                },
                ErrorResponse: {
                    type: "object",
                    properties: {
                        success: {
                            type: "boolean",
                        },
                        message: {
                            type: "string",
                        },
                    },
                },
            },
        },
    },

    apis: ["./src/routes/*.ts"],
}

export const swaggerSpec = swaggerJsdoc(options)
