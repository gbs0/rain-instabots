// Instagram URL (https://www.instagram.com/p/CC_cEcbF3Y0/)
require('dotenv/config');
const puppeteer = require('puppeteer');
const delay = require('delay');

const user = {
  username: 'gb_s0',
  password: 'Gbrp6789instagram$',
};

(async () => {
  // const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/accounts/login/?next=%2Fp%2FCC_cEcbF3Y0%2F");
  // Selecionar/Clicar na logo
    
  await delay(1000);
  

  const login = await page.$$("input");
  const btnSubmit = await page.$("button");
  
  // console.log(login[0]);
  // console.log(btnSubmit);

  // await page.type(login[0], 'gb_s0')
  // await page.type(login[1], process.env.SECRET_PASSWORD)

  await page.type("input[name='username']", user.username, { delay: 50 });
  await page.type("input[name='password']", user.password, { delay: 50 });

  await page.screenshot({path: 'screenshots/test_FORM.png'});
  
  await Promise.all([
    page.waitForNavigation(),
    // page.click(btnSubmit)
    page.click('button[type="submit"]')
  ]);
  
  await page.screenshot({path: 'screenshots/test_LOGIN.png'});
  
  // const login = await page.$$("input");
  // const btnSubmit = await page.$$("button");
  
  
  
  
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
