const puppeteer = require('puppeteer');
const delay = require('delay');

const user = {
    username: 'user@test.com',
    password: 'passw0rd',
};

puppeteer.launch().then(async browser => {
    signIn(browser, user).then(authResponse => console.log(authResponse));
});

let signIn = async (browser, user, opts) => {
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/');

    await page.waitFor('input[name=username]', { visible: true });
    await delay(100);
    await page.type('input[name=username]', user.email || user.username, { delay: 50 });

    await delay(100);
    await page.type('input[name=password]', user.password, { delay: 50 });

    await delay(100);
    const [ signin ] = await page.$x('//button[contains(.,"Log in")]');
    await signin.click({ delay: 30 });

    let _resp = null;
    await page.waitForResponse(response => {
        if(response.url() === 'https://www.instagram.com/accounts/login/ajax/') {
            _resp = response.json().then(body => body.authenticated);
            return _resp
        }
    }).catch();

    return await _resp;
};