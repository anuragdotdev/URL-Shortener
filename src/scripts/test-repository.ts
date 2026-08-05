import { UrlRepository } from "../repositories/url.repository.js";

async function main(){
    const repo = new UrlRepository()

    const created = await repo.create({
        originalUrl: "https://google.com",
        shortCode: "abc1234",
    })

    console.log("Created: ",created)

    const found = await repo.findByShortCode("abc123")

    console.log("Found: ",found)
}

main().catch(console.error)