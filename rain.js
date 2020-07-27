// Instagram URL (https://www.instagram.com/p/CC_cEcbF3Y0/)
const puppeteer = require('puppeteer');

(async () => {
  // const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/accounts/login/?next=%2Fp%2FCC_cEcbF3Y0%2F");
  // Selecionar/Clicar na logo
    
  page
    .waitForSelector('h1')
    .then(() => console.log('Login Page: '));
  
  const login = await page.$$("input");
  const btnSubmit = await page.$$("button");
  
  // await Promise.all([
  //   page.waitForNavigation(),
  //   // page.click("button")
  // ]);
  
  await page.screenshot({path: 'screenshots/test00.png'});
  
  // const login = await page.$$("input");
  // const btnSubmit = await page.$$("button");
  
  console.log(login);
  console.log(btnSubmit);

  
  
  // await Promise.all([
  //   page.waitForNavigation(),
  //   page.click(btnSubmit[0])
  // ]);
  
  // const formDiv = document.querySelector(".X7cDz");
  // const textArea = document.querySelector(".Ypffh");

  // Get page elements and type
  // const textArea = await page.$(".Ypffh")
  // await textArea.click({clickCount:3})
  // await textArea.type('gb_s0')

  // await page.click(".sqdOP yWX7d    y3zKF     ")

  // For Loop
  // await page
  // .waitForSelector('input')
  // .then(() => console.log('First URL with image: '));
  // for (currentURL of ['https://example.com', 'https://google.com', 'https://bbc.com']) {
  //   await page.goto(currentURL);
  // }
  


  console.log('Testing');

  await browser.close();

})();
