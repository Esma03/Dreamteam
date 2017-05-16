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
