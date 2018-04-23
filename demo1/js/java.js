function CambiarTexto() {
	/*
	Cambiar el texto de un elemento con id = "Resultado" del documento HTML 
	*/

	var miParrafo;
	var precio = 22.65;

	miParrafo = document.getElementById('Resultado');
	precio = precio + 10;
	miParrafo.innerHTML += 
	"<br>"+"Tipo de dato numerico" +"<br>"+
	"El precio es " + precio + "<br>" + 
	"El doble del precio es " + (precio*2) + "<br>";

	/*Cambiamos el tipo de dato de precio*/

	precio = "Muy caro";
	miParrafo.innerHTML += 
	"Tipo de dato string" +"<br>"+
	"El precio es " + precio + "<br>" + 
	"El doble del precio es " + (precio*2) + "<br>";
}