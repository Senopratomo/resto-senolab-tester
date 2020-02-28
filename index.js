const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://resto.senolab.org/');
    await page.waitFor(2000);
    await page.screenshot({ path: 'screenshots/resto_main.png' });
    await page.goto('https://resto.senolab.org/restaurant.html?id=1');
    await page.waitFor(1000);
    await page.screenshot({path: 'screenshots/resto_1.png'});
    await page.goto('https://resto.senolab.org/restaurant.html?id=2');
    await page.waitFor(1000);
    await page.screenshot({path: 'screenshots/resto_2.png'});
    await page.goto('https://resto.senolab.org/restaurant.html?id=3');
    await page.waitFor(1000);
    await page.screenshot({path: 'screenshots/resto_3.png'});
    await page.goto('https://resto.senolab.org/restaurant.html?id=4');
    await page.waitFor(1000);
    await page.screenshot({path: 'screenshots/resto_4.png'});
    await page.goto('https://resto.senolab.org/restaurant.html?id=5');
    await page.waitFor(1000);
    await page.screenshot({path: 'screenshots/resto_5.png'});

    browser.close();
}

setInterval(function () {
    let date = new Date();
    console.log(`Running scripts at ${date}`);
    run();
}, 60000);


