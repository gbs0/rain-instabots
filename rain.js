require('dotenv/config');
const puppeteer = require('puppeteer');
const delay = require('delay');
const randomInt = require('random-int');

const users = ["@marianesuellen_", "@gui_14gc", "@erycasiilvaa", "@giiihsilva4563", "@hebemartins_", "@deboraaxxv", "@fernandees.laura", "@l.alveees_", "@_luaravena", "@juliana_silva71", "@cailannemoura", "@jessica.santtos2", "@beeatriss_", "@geohlnd", "@beatrizsusan2003", "@leolivaar", "@nayarajmsta", "@tatahs16", "@marquinhos200935", "@rayanececilia1", "@luiz_larri", "@wellinadiajunior", "@rayrachaves_", "@maria.felix26", "@emilydamily", "@_t.dias", "@jessica3.1", "@paloma_aro", "@_beatrizoliver_", "@lidianybr", "@day.carolina19", "@oliveira_lvr", "@glendaanjos14", "@nabarelic", "@vviteixeira", "@lorena._v", "@alissoo.on", "@dreh.nunes07", "@eric.vinicius19", "@_marianalyy", "@dreh.nunes07", "@eric.vinicius19", "@sol.ch_", "@me_carolvit", "@jeo_britto", "@laravitoria.gabriela", "@juliahentges", "@laisoliverh", "@thaissfelix2", "@laisoliverh", "@thaissfelix2", "@maria.felix26", "@drerbs", "@rah_hira", "@thaissfelix2", "@dulce_barbosa28", "@muriloo_4", "@flaviasds01", "@heloize_chavess", "@_danilo.fernandes", "@danilo.fernandes", "@jackie_blackrose", "@taliaafc_", "@juliasantossssf", "@daniisales_gomes", "@jessica3.1", "@ana_paulandrade", "@d_sylvad", "@thaislinn_", "@erica_silvaa21", "@radija_silva200", "@juliasantossssf", "@dudinha_portelaa", "@nally_windsonn", "@steffanie_2020", "@aduhsouza_", "@santadnadya", "@p_larissa.c", "@ingridbrito1", "@drehh_gomes", "@liv.maria_", "@taynara_015", "@luciareginaofc", "@olivedayana.1982", "@minhas_isas", "@cleide.passos.5648", "@gcleylson", "@cesarvirgiliofarma", "@yasmin.vso", "@andrianade.jesus", "@nessa_maia13", "@_mariaandraade", "@maria_pontes_passos", "@luizamaria4896", "@maria_marlene_damasceno", "@maria_rita_msqt", "@israelymr", "@anaa.ribas", "@sophia_stephany_", "@nathallyoficiaal", "@sergio.passos.790", "@passosestefane", "@pallomaa.__", "@bibia_140", "@cleitonsouzadss",  "@bibia_140", "@cleitonsouzadss",  "@regitaniasouzadossantos", "@cleitonsouzadss",  "@regitaniasouzadossantos", "@cleitonsouzadss",  "@mariaodetecavalcantedesa", "@caremmanci", "@biamanginii", "@adressinhaaa2015", "@_giovannalopes", "@catharina_cah", "@eduarda.quirino.505", "@__eduardafreitas_", "@eu_daysouza", "@aniiinha_santooss", "@nubia_saantoos", "@cacaisantana", "@yas_229", "@sgleiice", "@_gleicemilene", "@mace.do453", "@bella201760", "@jjjjiva", "@mace.do453", "@bella201760", "@jjjjiva", "@jeehsiillvaa", "@josy.ribeir0", "@tamiresramireslopes", "@jaanaa_jeferson", "@fernandaaparecidaparre4", "@juli_pizi2", "@regitaniasouzadossantos", "@cleitonsouzadss", "@bibia_140", "@fernandaaparecidaparre4", "@juli_pizi2", "@mariaantoniaalmeidapereira", "@regitaniasouzadossantos", "@cleit.onsouza", "@bibia_140", "@vand_ersonviana", "@danubiaa_ramos", "@renatamaxsom", "@tay_sena95", "@esther_sena", "@eae__lalah", "@brru.santana", "@_beanovais", "@viihsena_", "@eae__lalah", "@ccarvalhoe", "@esther_sena", "@bastoscelio_", "@renataedd", "@vilmar3935", "@tay_sena95", "@eae__lalah", "@brru.santana", "@esther_sena", "@eae__lalah", "@tay_sena95", "@viihsena_", "@_beanovais", "@brru.santana", "@mychelle_oliiveira", "@ccarvalhoe", "@larisse_araujo11", "@tay_sena95", "@esther_sena", "@ccarvalhoe", "@letty.ms", "@camilla.bezerra92", "@tay_sena95", "@esther_sena", "@tay_sena95", "@brru.santana", "@eae__lalah", "@mariaclaragoomes3010", "@gabrielybianca_", "@chely1000", "@marizxas", "@deborapaiixao__", "@luanaagomesc", "@cristianedesiqueira", "@criis.santos.372", "@nathdesativado__", "@dannygomesmota", "@nillllllzza", "@xavierrrr321", "@roseli1456", "@marianamrdantas", "@arianemramos", "@susuuuh_", "@nessa_alves2020", "@arianemramos", "@marianamrdantas", "@michellyoliveyra", "@paixao_092", "@heloohsz", "@elaiza956", "@allebais", "@vaninha.felix", "@johnny_ramos022", "@lucas4371santos", "2@regiane7440", "@lucas4371santos", "@johnny_ramos022", "@lucas4371santos", "@johnny_ramos022", "@regiane7440", "@biaah_xavier", "@monica.melo8", "@evelynmerlugo", "@beatrizlinicaa", "@beatrizagosta", "@santiagobelle", "@lavinnia_brandao", "@__larisouto", "@lari_cr", "@ahjucost", "@dressafelipe15", "@biaah_xavier", "@leydealves385", "@jorge_henrikky", "@nillllllzza", "@maria.mariamel", "@allebais", "@leilasantosdtna", "@dessaah", "@nutricionista.andreiamorais", "@tatianeartescomasmaos", "@by.leleoliveira", "@annie_jp33g", "@felipeoofc", "@allebais", "@samuray780", "@sirleysousa_lippe", "@duda_almeidaxx", "@kailany_almeidaxx", "@messiasroseanealmeida"];

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
  
  await page.waitFor(10000) // Wait for 2 factor auth
  
  await page.goto("https://www.instagram.com/p/CC_cEcbF3Y0/");
  
  // For Loop
  await page
  .waitForSelector("textarea[class='Ypffh']")
  .then(() => console.log('Commenting ' + users.length + ' users'));
  for (let i = 0; i < users.length; i++){
    const textArea = await page.$("textar ea[class='Ypffh']")
    await page.waitFor(randomInt(119999, 309999))
    await page.type("textarea[class='Ypffh']", users[i])
    await page.click("button[type='submit']")
    // await page.waitFor(randomInt(30000, 59999))
    
    // await page.screenshot({path: 'screenshots/profiles/' + users[i] + '_submitted.png'});
    
    console.log("Submitted: " + users[i])
  }

  console.log('Navigation complete');

  await browser.close();

})();
