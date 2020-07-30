require('dotenv/config');
const puppeteer = require('puppeteer');
const delay = require('delay');
const randomInt = require('random-int');

const users = ["@angelavcorrea", "@ocleytonmaciel", "@magalhaesraffaa", "@will_mth", "@anacarlalunadasilva", "@indsouzac", "@gabrielbrrj0", "@danisinhareis", "@francine_coutinho", "@markinhos_tjs", "@llevi.drew", "@dalhke", "@carvalhosilvagabriela47", "@_thiagoaraujo.s", "@prijsp", "@ryan098_86", "@queilamartins13", "@ronan_019", "@luizz_nando_g", "@ederrosio.treinador", "@pc.br", "@queilafernandasouza", "@mike_henrique30", "@kary_aguilarx", "@henriquedimbinha", "@jklvb", "@williamschneider00", "@juliana_cristina24", "@alex.vega.16", "@juliana_cristina24", "@lucasrossanezi", "@kayanefraga", "@lucasrossanezi", "@dieegohdt", "@lucasrossanezi", "@juliana_cristina24", "@auriedna_b", "@patricia_yasmin_123", "@lucasrossanezi", "@juliana_cristina24", "@lucasrossanezi", "@erika_almeidaaa", "@celsobernini", "@lucasrossanezi", "@vanemisz1203", "@lucasrossanezi", "@vanemisz1203", "@patricia_yasmin_123", "@juliana_cristina24", "@marcelo1818ll", "@jeffersnoliveira", "@n.cadu_ferreira", "@fee.lipe019", "@walaslopes", "@monicaa_santos11", "@angeloborgesf", "@felipe_tomazim", "@elmerldc", "@gu.alto", "@_flaviadsantos", "@_gabriel_oliveira20", "@klausinho_j", "@_marcosneeres_", "@gabriellms14", "@filipe_da_gp", "@mateuscameron", "@theushenrique07", "@vimasca", "@_kauelk", "@andreia_ggmr_", "@kevinlucena", "@wedersoncamargos.wc", "@joaodinizkungfu", "@davipedro1991", "@edsoonmarcoos", "@andreia_ggmr_", "@vanessalana_", "@juliabreda_", "@nenem_delicia", "@thiagosemlimites", "@celsovinicius1603", "@angelica_rodrigues27", "@sant_lago", "@guilherme_ferro18", "@hilnayguibson", "@sabriina_justino", "@obra_bu", "@welton.gg", "@lucas.lpires", "@danisinhareis", "@_anderson.cavalacante_", "@thatiafonso", "@welinton_tr"];

(async () => {
  const browser = await puppeteer.launch({headless: false, args: [
    '--window-size=800,800', // Minimun size for chromium start without headless mode
  ]});
  const page = await browser.newPage();
  
  // Login Page
  await page.goto("https://www.instagram.com/accounts/login/?next=%2Fp%2FCC_cEcbF3Y0%2F");
  await page.waitFor(2000)
  
  // Login Forms
  await page.type("input[name='username']", process.env.USER_NAME, { delay: 100 });
  await page.type("input[name='password']", process.env.PASSWORD, { delay: 100 });

  // await page.screenshot({path: 'screenshots/test_FORM.png'});
  
  // Login Submit
  await Promise.all([
    page.waitForNavigation(),
    // btnSubmit.click()
    page.click('button[type="submit"]')
  ]);
  
  await page.waitFor(20000) // Wait for 2 factor auth
  
  await page.goto("https://www.instagram.com/p/CC_cEcbF3Y0/");
  
  // For Loop
  await page
  .waitForSelector("textarea[class='Ypffh']")
  .then(() => console.log('Commenting ' + users.length + ' users'));
  for (let i = 0; i < users.length; i++){
    const textArea = await page.$("textar ea[class='Ypffh']")
    await page.waitFor(randomInt(2000, 5999))
    await page.type("textarea[class='Ypffh']", users[i], {delay: randomInt(399, 699)})
    await page.click("button[type='submit']", {delay: randomInt(399, 699)})
    await page.waitFor(randomInt(2000, 5999))
    
    // await page.screenshot({path: 'screenshots/profiles/' + users[i] + '_submitted.png'});
    
    console.log("Submitted: " + users[i])
  }

  console.log('Navigation complete');

  await browser.close();

})();
