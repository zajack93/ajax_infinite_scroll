//AJAX - asynchronous javascript and xml
// ajax  - kombinacja dzialan, ktore trzeba wykonac na stronie internetowej, aby pobrac dane z serwera i wyświetlić je na stronie bez konieczności przeładowania całej strony
//czyli jak cos zmieniam  w kodzie to trzeba przeładować / odswieżyc całą strone żeby sprawdzić zmiane
//zapytania do serwera są wysyłane asynchronicznie do załadowanej strony
//najpierw tworzy ie obiekt, ktory łączy sie ze storna, pobiera nam dane i potem wyświetla to, co zrobiliśmy. tak działa fejs, że wyświetla Ci sie update, i nie przeładowuje całej strony tylko fragmenty

//technologie na AJAX: html, css, xml = zapisane obiekty w formie znacznikow, np moj samochod moge zapisac w formie xml-a, i jak jest pobierane to automatycznie zmienia sie w obiekt DOM, 
//XMLHttpResponse object - gotowa js klasa, uzywana po to, aby laczyc sie z serwerem, javascript
//http - protokół, po którym przeglądarki pobieraja strony internetowe. wysylane jest zapytanie do serwera za pomoca get/post, serwer odpowiada poprzedzone kodem odpowiedzi, np 404-nie istnieje, 401-brak autoryzacji, czyli nie jestes zalogowany. ogolnie przegladarka łączy sie z serwerem
//standardowo, strona zeby pobrac cos z serwera musi przeładować strone = reload
//korzystajac z AJAX można przeładować część strony bez przeładowania całej reszty, czyli robimy to asynchronicznie. pobieramy kawałeczek, przez asynchronicznosc mozna korzystac ze strony w tym czasie
//glownym zadaniem AJAXA za pomoca obiektu połączenie się z serwerem
//js:  
//var xml = new XMLHttpRequest();-tworzymy obiekt klasy XML= XMLHttpRequest(); i przypisujemy do zmiennej xml
//w javie wszystko jest obiekte, w js wszystko jest funkcja

//metody obiekty XMLHttpRequest()
//open("metoda", "url", async, "user", "password") - otwiera połączenie z serwerem , metoda=get/post, adres pliku //mozna sie laczyc tylko z jedna domena!!!!
//send("contest") - wysylamy żądanie do serwera
//abort()  blokuje, zatrzymuje żądanie
//setRequestHeader()  - wysyla konkretny naglowek do serwera
//setResponsetHeader("nazwa_naglowka) - pobiera konkretny naglowek
//getAllResponseHeaders() - pobiera wszystkie naglowki
//wlasciwosci XML...
//onreadystatechange - podpinamy sie, gdy zmieni sie status, np cos z serwera przyszlo i update
//readyState - aktualny stan serwera. 1,2,3,    //4- nie ma błedow
//responseText - serwer zwraca 2 typy danych, albo text 
//responseXML - albo XML, czyli obiekt, ktory jest przetworzony do DOM
//status - zwraca status polaczenia np. 404
//statusText - zwraca status polaczenia w formie textowej, czyli 404=not found

//var xml = new XMLHttpRequest();-tworzymy obiekt klasy XML= XMLHttpRequest(); i przypisujemy do zmiennej xml
//xml.open("GET", "http://jsonplaceholder.typicode.com/posts/1", true);  //asynchroniecznie=true!!!
										//get - podajemy parametry w przeglądarce, cyzli www.onet.pl/?imie=pawel - wywolujemy ta strone o parametrze imie i nazwie pawel
										//post - wysylasz imie, tylko jest niewidoczny www.onet.pl
//xml.onreadystatechange = function() {       //jezeli stan obiektu zostanie zmieniony, to przypisujemy 												sobie funkcje, ktora cos robi
//if (xml.readyState ==4) {
//	xml = null;							//skasuj, zebby nie utrzymywac niepotrzebnego polaczenia z serwerem
//}
//}:
//xml.send(); 						//wysylam zapytanie, ktore zdefiniowalam powyzej

//kontrola statusu kodu połączenia http
//if (xml.status==404) {
//console.warn("strona nie istnieje)
//}
//if (
//(xml.status>=200 && xml.status<300) ||   //kazdy sttatus z przedzialu 20-300 jest ok
//	(xmls.status==304) || - zwraca dane jakie sa w przegladarce, nic sie nie zmienilo
//	(navigation.userAgent.indexOf("Safari")>=0 && typeof xml.status=="undefined")) safari zwraca pusty ciag znakow, jezeli zwrocone dane nie sa zmodyfikowane
//{alert(xml.responseText);}

//zwrocone dane od serwera moga byc responseText lub xml responseXML, jezeli zwraca zwykly tekst to spoko, jesli prawidlowy tekst xml to "konwertuje" na obiekt DOM i mozna normalnie na tym dzialac jak w DOM

//ajax pobieranie json 
//$.getJson("http://, dunction(data) {
//console.log(data);
//})

//ZALETY - lepsza interaktywnosc
//strona kompaktowa - nie potrzeba wielu podstron
//"lekkie" zapytania do serwera - brak przeładowań
//zmniejszenie transfery danych

//WADY
//nie potrzebny jest przycisk refresh
//dzialania na stronie kodujemy w JavaScript
//brak adresow URL - przydatne w SEO --google nie bedzie wiedzial co na tej stronie jest, jesli chcemy
//