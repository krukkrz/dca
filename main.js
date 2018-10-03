$(document).ready(function(){

/*! Fades in page on load */
$('body').fadeIn(1000);

});

	var numer=1;
	var text=0;
	
	var tekst1 =  "Rama do drona. Charakteryzuje się niewielką wagą i bardzo prostą budową w porównaniu do innych ram tej klasy. Nie znajdziemy tutaj wymyślnych kształtów i niepotrzebnych elementów. Prosta i zwarta budowa. ";
	var tekst2 =  "Silniki. Ten silnik przeznaczony jest głównie do napędzania modeli halowych akro do 180g, 3D do 130g. Silnik posiada zamontowany tzw. propsaver do montażu śmigła.";
	var tekst3 =  "Elektroniczny regulator prędkości – pozwala na kontrolowanie silnika w zakresie kierunku obrotów, hamulca i zakresie obrotów. Stosowany jest po jednym na silnik.";
	var tekst4 =  "Bateria zasila całego drona.";

	
	
	
	
  function elementy(nr)
{
	var tekst=[tekst1, tekst2, tekst3 ,tekst4 ];
	numer=nr;
	var plik = "<img src=\"elementy/element"+numer+".png\" width=\"60%\" max-height=\"auto\"/>";
	document.getElementById("obraz").innerHTML = plik;
	var text=nr-1;
	document.getElementById("tekst").innerHTML = tekst[text];
}


