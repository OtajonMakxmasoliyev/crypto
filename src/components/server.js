const puppeteer = require('puppeteer');
const fs = require("fs/promises");
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://api.coinranking.com/v2/coins/?limit=10");
//     await page.screenshot({ path: 'example.png', fullPage: false });
//     // Get the "viewport" of the page, as reported by the page.
//     const format = await page.evaluate(() => {
//         return Array.from(document.querySelectorAll("pre")).map(x => x.textContent)
//     })
//     await fs.writeFile("code.json", format)

//     await browser.close();

// })();


setInterval(() => {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://api.coinranking.com/v2/coins/?limit=10");
        await page.screenshot({ path: 'example.png', fullPage: false });
        // Get the "viewport" of the page, as reported by the page.
        const format = await page.evaluate(() => {
            return Array.from(document.querySelectorAll("pre")).map(x => x.textContent)
        })
        await fs.writeFile("code.json", format)

        await browser.close();

    })();

}, 15000);



