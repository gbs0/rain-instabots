// Instagram URL (https://www.instagram.com/p/CC_cEcbF3Y0/)
const puppeteer = require('puppeteer');

(async () => {
  // const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/accounts/login/?next=%2Fp%2FCC_cEcbF3Y0%2F&source=desktop_nav");
  
  
  await page.type("._2hvTZ pexuQ zyHYP", "@gb_s0");

  await page.screenshot({path: 'screenshots/test.png'});

  // await page.type(".Ypffh", "@gb_s0");
  
  // await Promise.all([
  //   page.waitForNavigation(),
  //   page.click(".sqdOP yWX7d    y3zKF     ")
  // ]);
  
  // const formDiv = document.querySelector(".X7cDz");
  // const textArea = document.querySelector(".Ypffh");

  // Get page elements and type
  // const textArea = await page.$(".Ypffh")
  // await textArea.click({clickCount:3})
  // await textArea.type('gb_s0')

  // await page.click(".sqdOP yWX7d    y3zKF     ")
  await page.screenshot({path: 'screenshots/test.png'});

  console.log('Testing');

  await browser.close();

})();
