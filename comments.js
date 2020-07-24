// Instagram URL (https://www.instagram.com/p/CC_cEcbF3Y0/)

formDiv = document.querySelector(".X7cDz");
textBox = document.querySelector(".Ypffh");

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
// Fetch
fetch("https://www.instagram.com/web/comments/2359728180464940596/add/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrftoken": "J3wpVNML3LzdYTvGGuFSU4TMCCBqRHMp",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR2QfUgp3ezbC0JNTgeYduA8jG9bD5L54Tz1jCR3q-uelDy3",
    "x-instagram-ajax": "649268ec3eb2",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.instagram.com/p/CC_cEcbF3Y0/",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "comment_text=%40gb_s0+&replied_to_comment_id=",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}); ;
fetch("https://graph.instagram.com/logging_client_events", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.instagram.com/p/CC_cEcbF3Y0/",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "access_token=936619743392459%7C3cdb3f896252a1db29679cb4554db266&message=%7B%22app_uid%22%3A%224002207000%22%2C%22app_id%22%3A%22936619743392459%22%2C%22app_ver%22%3A%221.0.0%22%2C%22data%22%3A%5B%7B%22time%22%3A1595542315.294%2C%22name%22%3A%22instagram_web_time_spent_bit_array%22%2C%22extra%22%3A%7B%22ig_userid%22%3A4002207000%2C%22pk%22%3A4002207000%2C%22rollout_hash%22%3A%22649268ec3eb2%22%2C%22frontend_env%22%3A%22prod%22%2C%22app_id%22%3A%22936619743392459%22%2C%22tos_id%22%3A%22wvg90v%22%2C%22start_time%22%3A1595542303%2C%22tos_array%22%3A%5B1983%2C0%5D%2C%22tos_len%22%3A13%2C%22tos_seq%22%3A2%2C%22tos_cum%22%3A16%2C%22log_time%22%3A1595542315294%2C%22referrer%22%3A%22%22%2C%22referrer_domain%22%3A%22%22%2C%22url%22%3A%22%2Fp%2FCC_cEcbF3Y0%2F%22%2C%22original_referrer%22%3A%22%22%2C%22original_referrer_domain%22%3A%22%22%7D%7D%2C%7B%22time%22%3A1595542318.967%2C%22name%22%3A%22instagram_web_time_spent_bit_array%22%2C%22extra%22%3A%7B%22ig_userid%22%3A4002207000%2C%22pk%22%3A4002207000%2C%22rollout_hash%22%3A%22649268ec3eb2%22%2C%22frontend_env%22%3A%22prod%22%2C%22app_id%22%3A%22936619743392459%22%2C%22tos_id%22%3A%22wvg90v%22%2C%22start_time%22%3A1595542315%2C%22tos_array%22%3A%5B15%2C0%5D%2C%22tos_len%22%3A4%2C%22tos_seq%22%3A3%2C%22tos_cum%22%3A20%2C%22log_time%22%3A1595542318967%2C%22referrer%22%3A%22%22%2C%22referrer_domain%22%3A%22%22%2C%22url%22%3A%22%2Fp%2FCC_cEcbF3Y0%2F%22%2C%22original_referrer%22%3A%22%22%2C%22original_referrer_domain%22%3A%22%22%7D%7D%2C%7B%22time%22%3A1595542319.072%2C%22name%22%3A%22instagram_organic_comment_button%22%2C%22extra%22%3A%7B%22ig_userid%22%3A4002207000%2C%22pk%22%3A4002207000%2C%22rollout_hash%22%3A%22649268ec3eb2%22%2C%22frontend_env%22%3A%22prod%22%2C%22app_id%22%3A%22936619743392459%22%2C%22deviceid%22%3A%225F5736AE-06A8-4A2C-8AF0-8BFB6D49E182%22%2C%22device_model%22%3A%22Chrome+84.0.4147.89%22%2C%22device_os%22%3A%22Web%22%2C%22a_pk%22%3A%221040864500%22%2C%22m_pk%22%3A%222359728180464940596%22%2C%22primary_locale%22%3A%22pt_BR%22%2C%22referrer%22%3A%22%22%2C%22referrer_domain%22%3A%22%22%2C%22url%22%3A%22%2Fp%2FCC_cEcbF3Y0%2F%22%2C%22original_referrer%22%3A%22%22%2C%22original_referrer_domain%22%3A%22%22%7D%7D%2C%7B%22time%22%3A1595542319.075%2C%22name%22%3A%22instagram_web_client_events%22%2C%22extra%22%3A%7B%22event_type%22%3A%22action%22%2C%22event_name%22%3A%22comment%22%2C%22mid%22%3A%22XDU3eQAEAAFhiXYayfF-27NFndEa%22%2C%22ig_userid%22%3A4002207000%2C%22pk%22%3A4002207000%2C%22rollout_hash%22%3A%22649268ec3eb2%22%2C%22frontend_env%22%3A%22prod%22%2C%22app_id%22%3A%22936619743392459%22%2C%22source%22%3A%22postPage%22%2C%22referrer%22%3A%22%22%2C%22referrer_domain%22%3A%22%22%2C%22original_referrer%22%3A%22%22%2C%22original_referrer_domain%22%3A%22%22%7D%2C%22module%22%3A%22postPage%22%2C%22obj_type%22%3A%22url%22%2C%22obj_id%22%3A%22%2Fp%2FCC_cEcbF3Y0%2F%22%7D%5D%2C%22log_type%22%3A%22client_event%22%2C%22seq%22%3A51%2C%22session_id%22%3A%221737db0ad62-d333dc%22%2C%22device_id%22%3A%225F5736AE-06A8-4A2C-8AF0-8BFB6D49E182%22%2C%22claims%22%3A%5B%22hmac.AR2QfUgp3ezbC0JNTgeYduA8jG9bD5L54Tz1jCR3q-uelDy3%22%5D%7D",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}); ;

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