const puppeteer = require('puppeteer');
const fs = require("fs/promises");
const dayjs = require('dayjs')


setInterval(() => {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://api.coinranking.com/v2/coins/?limit=10");
        const format = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("pre")).map(x => x.textContent)
        })
        await fs.writeFile("code.json", format)

        await browser.close();

    })();

}, 10000);

export dayjs().format()




