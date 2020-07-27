// Instagram URL (https://www.instagram.com/p/CC_cEcbF3Y0/)
const puppeteer = require('puppeteer');
const delay = require('delay');

const user = {
  username: 'gb_s0',
  password: 'Gbrp6789instagram$',
};

const users = ["@programarendaextra.tv", "@ajib_torii", "@appleclub.uz"];

(async () => {
  // const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Login Page
  await page.goto("https://www.instagram.com/accounts/login/?next=%2Fp%2FCC_cEcbF3Y0%2F");
  await delay(1000);
  
  // await page.type(login[0], 'gb_s0')
  // await page.type(login[1], process.env.SECRET_PASSWORD)

  // Login Forms
  await page.type("input[name='username']", user.username, { delay: 50 });
  await page.type("input[name='password']", user.password, { delay: 50 });


  await page.screenshot({path: 'screenshots/test_FORM.png'});
  
  // Login Submit
  await Promise.all([
    page.waitForNavigation(),
    // btnSubmit.click()
    page.click('button[type="submit"]')
  ]);
  
  await page.screenshot({path: 'screenshots/test_LOGIN.png'});
  
  // const login = await page.$$("input");
  // const btnSubmit = await page.$$("button");
  await page.goto("https://www.instagram.com/p/CC_cEcbF3Y0/");
  
  // await Promise.all([
  //   page.waitForNavigation(),
  //   page.click(btnSubmit[0])
  // ]);
  
  // const formDiv = document.querySelector(".X7cDz");
  // const textArea = document.querySelector(".Ypffh");

  // Get page elements and type
  
  // await textArea.click({clickCount:3})
  // await textArea.type('gb_s0')

  // await page.click(".sqdOP yWX7d    y3zKF     ")

  // For Loop
  await page
  .waitForSelector("textarea[class='Ypffh']")
  .then(() => console.log('Commenting ' + users.length + ' users'));
  for (let i = 0; i < users.length; i++){
    await page.type("textarea[class='Ypffh']", users[i], {delay: 1000})
    await page.click("button[type='submit']")
    await page.screenshot({path: 'screenshots/profiles/' + user[i] + '_submitted.png'});
    console.log("Submitted: " + users[i])
  }

  console.log('Navigation complete');

  await browser.close();

})();
