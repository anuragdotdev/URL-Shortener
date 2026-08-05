import { Router } from "express";
import { UrlController } from "../controllers/url.controller.js";
import { UrlRepository } from "../repositories/url.repository.js";
import { UrlService } from "../services/url.service.js";

const UrlRouter = Router()

const repository = new UrlRepository()
const service = new UrlService(repository)
const controller = new UrlController(service)

UrlRouter.post('/urls',controller.createShortUrl.bind(controller))

UrlRouter.get("/:shortCode",controller.redirect.bind(controller))

export default UrlRouter

