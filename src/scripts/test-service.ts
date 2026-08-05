import { UrlRepository } from "../repositories/url.repository.js";
import { UrlService } from "../services/url.service.js";

async function main(){
    const repository = new UrlRepository()
    const service = new UrlService(repository)

    const created = await service.shortenUrl(
        "https://leetcode.com/problems/two-sum"
    )

    console.log(created)

    const original = await service.getOriginalUrl(
        created.shortCode
    )

    console.log(original)
}

main().catch(console.error)