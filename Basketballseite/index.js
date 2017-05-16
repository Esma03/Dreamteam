	function checkForm () {
		
		var akzeptiert = true;
		var buchstaben = /^[a-zA-zöaüßÖÄÜ]+$/;
		
		var eingabeFeld = document.getElementById("vorname");
		if(eingabeFeld.value.length == 0 || !buchstaben.test(eingabeFeld.value)){
			akzeptiert = false;
			
		}
		var eingabeFeld = document.getElementById("nachname");
		if(eingabeFeld.value.length == 0 || !buchstaben.test(eingabeFeld.value)){
			akzeptiert = false;
			
		}
		var eingabeFeld = document.getElementById("verein");
		if(eingabeFeld.value.length == 0 || !buchstaben.test(eingabeFeld.value)){
			akzeptiert = false;
			
		}
		var eingabeFeld = document.getElementById("hcoach");
		if(eingabeFeld.value.length == 0 || !buchstaben.test(eingabeFeld.value)){
			akzeptiert = false;
			
		}
		var eingabeFeld = document.getElementById("acoach");
		if(eingabeFeld.value.length == 0 || !buchstaben.test(eingabeFeld.value)){
			akzeptiert = false;
			
		}
		eingabeFeld = document.getElementById("aktiv");
		var eingabeFeldZwei = document.getElementById("aktiv2");
		if (!aktiv.checked && !aktiv2.checked) {
			akzeptiert = false;
		}
		var number = document.getElementById("number").value;
		if(number.length == 0 && number >= 4 && number <= 15) {
			akzeptiert = false;
		}
		
		return akzeptiert;
		
	}
	
	 function sendeData(form) {
	
		if(checkForm()) {
			console.log("true");
			var formData = new FormData(form);
			
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://188.166.165.74:13337/api/players' ,true);
			xhr.responseTyp = 'json';
			xhr.onload = function(e){};
			xhr.send(formData);
			
		
			} else {
				alert("Einige Eingaben sind Fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
			}
	
	 }
	
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
/**
function checkForm() {
	
	var strFehler= "";
	var geil = true;
	
	if (!validName(document.Formular.vorname.value)) {
		geil = false;
		strFehler += "Gültigen Vorname eingeben\n";
	}
		
	if (!validName(document.Formular.nachname.value)) {
		geil = false;
		strFehler += "Gültigen Nachname eingeben\n";
	}
	
	if (!validName(document.Formular.verein.value)) {
		geil = false;
		strFehler += "Gültigen Verein eingeben\n";
	}
		
	if (!validName(document.Formular.hcoach.value)) {
		geil = false;
		strFehler += "Gültigen Headcoach eingeben\n";
	}
		
	if (!validName(document.Formular.acoach.value)) {
		geil = false;
		strFehler += "Gültigen Assistantcoach eingeben\n";
	}
	
	
		
	
	  if (strFehler.length>0) {

    alert("Festgestellte Probleme: \n\n"+strFehler);

  }  
  return geil;
}

 function validName(vorname, nachname, verein, hcoach, acoach) {
 
	var strRed = "^([a-zA-ZäöüßÄÖÜ])+$";
	
	var regex = new RegExp(strRed);
	
	return(regex.test(vorname));
	return(regex.test(nachname));
	return(regex.test(hcoach));
	return(regex.test(acoach));
	return(regex.test(verein));
 }
 
 function sendeData(form) {
	
		if(checkForm()) {
			console.log("true");
			var formData = new FormData(form);
			
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://188.166.165.74:13337/api/players' ,true);
			xhr.responseTyp = 'json';
			xhr.onload = function(json){
				
			};
			xhr.send(formData);
			
			} else {
				console.log("false");
			}
	
	}
 

**/


/** GEHT NICHT
	function checkFormular() {
	
		var geil = true;
		var buchstaben =  /^[a-zA-zöaüßÖÄÜ]+$/;
		
		var inputField = document.getElementById("vorname");
		if(inputField.value.length == 0 || !buchstaben.test(inputField.value)) {
			geil = false;
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
			inputField.focus();
		}
		var inputField = document.getElementById("nachname");
		if(inputField.value.length == 0 || !buchstaben.test(inputField.value)) {
			geil = false;
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
			inputField.focus();
		}
		var inputField = document.getElementById("hcoach");
		if(inputField.value.length == 0 || !buchstaben.test(inputField.value)) {
			geil = false;
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
			inputField.focus();
		}
		var inputField = document.getElementById("acoach");
		if(inputField.value.length == 0 || !buchstaben.test(inputField.value)) {
			geil = false;
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
			inputField.focus();
		}
		var inputField = document.getElementById("aktiv");
		var inputFieldTwo = document.getElementById("inaktiv");
		if (!aktiv.checked && !inaktiv checked) {
			geil = false;
			alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
			inputField.focus();
		}
	
	
		return geil;
	}
	
	
	function sendeData(form) {
	
		if(checkFormular()) {
			console.log("true");
			var formData = new FormData(form);
			
			var xhr = new XMLHttpRequest();
			xhr.open('POST', 'http://188.166.165.74:13337/api/players' ,true);
			xhr.responseTyp = 'json';
			xhr.onload = function(json){}
			xhr.send(formData);
			
			} else {
				console.log("false");
			}
	
	}
	
	
**/

/** GEHT AUCH NICHT
	document.getElementById("button").addEventListener("click", function(){
	validateForm(document.myForm);
	});
	
	function validateForm(formular) {
		
		if (formular.vorname.value.match(/^([A-Za-z ]+)$/) &&
			formular.nachname.value.match(/^([A-Za-z ]+)$/) &&
			formular.verein.value.match(/^([A-Za-z ]+)$/) &&
			formular.hcoach.value.match(/^([A-Za-z ]+)$/) &&
			formular.acoach.value.match(/^([A-Za-z ]+)$/) &&
			formular.number.value.match(/^([4-9]+)$/) &&
			formular.number.value > 3 &&
			formular.number.value < 16 &&
			(document.getElementById("Aktiv1").checked || document.getElementById(Aktiv"2").checked) &&
			(new Date(document.getElementById("idDate").value).getFullYear() <= new Date().getFullYear()) ) {
			
			senden(form);
			
			}else {
				alert("Einige Eingaben sind fehlerhaft. Bitte ueberpruefen Sie ihre Eingaben.");
			}
			
	}
	
	function senden(formular){
		var formData = new FormData(formular);
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://188.166.165.74:13337/api/players', true);
		xhr.responseType = 'json';
		xhr.onreadystatechange = function() {
			if(xhr.readyState === XMLHttpRequest.DONE && xhr.status==200){
				alert("Daten wurden erfolgreich uebermittelt")
			}else if(xhr.readyState === XMLHttpRequest.DONE){
				alert("Daten konnten nicht erfolgreich uebermittelt werden")
				console.log(xhr.status);
		}
	};
	xhr.send(formData);
	}
	
	**/
	