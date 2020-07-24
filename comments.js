// Instagram URL (https://www.instagram.com/p/CC_cEcbF3Y0/)
const puppeteer = require('puppeteer');

(async () => {
  const browser = await.puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/p/CC_cEcbF3Y0/');
  
  const formDiv = document.querySelector(".X7cDz");
  const textArea = document.querySelector(".Ypffh");
  
  await page.type(textArea, '@danilo_levi');
  
  


})();


// Submit form 
document.forms["myForm"].submit();


let NAMES = '/profiles/0-9.txt';

function readSingleFile(evt) {
	var f = evt.target.files[0];   
	if (f) {
	  var r = new FileReader();
	  r.onload = function(e) { 
	      var contents = e.target.result;             
	      var ct = r.result;
	      var words = ct.split(' ');            
	  }
	  r.readAsText(f);
	} else { 
	  alert("Failed to load file");
	}
}

for (var i = 0; i < NAMES.length; i++) {
  var commentInput = document.querySelector(".Ypffh").innerHTML;
  var btnSubmit = document.getElementsByClassName("sqdOP yWX7d    y3zKF     ");
  var btnSend = btnSubmit[4]; 
  
}

var commentInput = document.querySelector(".Ypffh").innerHTML;
var btnSubmit = document.getElementsByClassName("sqdOP yWX7d    y3zKF     ");
var btnSend = btnSubmit[4];

for (var i = 0; i < NAMES.length; i++) {
  for(var nome = NAMES[i]; nome < NAMES.length; nome++)
  {
      commentInput = nome;
      btnSend.click(function() {
  		alert( "Handler for .click() called." );
  	});
      await sleep(5000);
      console.log(nome);
  }
  
}