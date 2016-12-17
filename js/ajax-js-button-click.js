"use strict";

function ajax(options) {
	options = {
		type: options.type || "POST"
		, url: options.url || ""
		, onComplete: options.onComplete || function () {}
		, onError: options.onError || function () {}
		, onSuccess: options.onSuccess || function () {}
		, dataType: options.dataType || "test"
	};

	function httpSuccess(httpRequest) { //przechwytywanie wyjątków, 
		try {
			return (httpRequest.status >= 200 || httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined")
				// kod który się wykona
		}
		catch (e) {
			return false;
			// jeżeli coś pójdzie nie tak, własna obsługa wyjątków, bo domyślna - wyrzucanie błędów do konsoli
		}
	}
	var httpReq = new XMLHttpRequest();
	httpReq.open(options.type, options.url, true);
	
	//jeśli stan dokumentu został zmieniony  => http.readyState
	// 0: połaczenie nie nawiązane
	// 1: połączenie nawiązane
	// 2: żądanie odebrane
	// 3: przetwarzanie
	// 4: dane zwrócone i gotowe do użycia
	
	httpReq.onreadystatechange = function () {
		if (httpReq.readyState == 4) {
			if (httpSuccess(httpReq)) {
				options.onSuccess(httpReq.responseText); //wywołanie funkcji onSuccess
				httpReq = null;
			}
			else {
				options.onError(httpReq.statusText);
			}
		}
	}
	httpReq.send();
}

window.onscroll = function(event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        
		event = pobierzDane();
		}
	}

function pobierzDane() {
	
	ajax({
		type: "GET"
		, url: "https://jsonplaceholder.typicode.com/users"
		, onError: function (msg) {
			console.log(msg);
		}
		, onSuccess: function (response) {
			/*console.log(response);*/
			
			var jsonObj = JSON.parse(response);
			
			for (var i in jsonObj) {
				var email = document.createElement("p");
				document.body.appendChild(email);
				email.innerHTML = "Email: " + jsonObj[i].email;
				
				var id = document.createElement("p");
				document.body.appendChild(id);
				id.innerHTML = "Id: " + jsonObj[i].id;
				
				var name = document.createElement("p");
				document.body.appendChild(name);
				name.innerHTML = "Name: " + jsonObj[i].name;
			
				
			}
			
		}
	});
}