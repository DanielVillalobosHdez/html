function Cambiaroperadores() {
	/*
	Realiza operaciones aritméticas con el elemento del documento HTML 
	*/

	var miParrafo;
	var valor;

	miParrafo = document.getElementById('Resultado');
	valor = 12 + 20;
	miParrafo.innerHTML += 
	"<br>"+"sumando los numeros 12 y 20 = " + valor +"<br>"

	valor = 12 - 20;
	miParrafo.innerHTML += 
	"<br>"+"restando los numeros 12 y 20 = " + valor +"<br>"
	
	
	valor = 3 * 20;
	miParrafo.innerHTML += 
	"<br>"+"multiplicando los numeros 12 y 20 = " + valor +"<br>"

	valor = 34 / 6;
	miParrafo.innerHTML += 
	"<br>"+"dividiendo los numeros 34 y 6 = " + valor +"<br>"

	valor = 8;
	miParrafo.innerHTML += 
	"<br>"+"sumando valor= " + (valor++) +"<br>"

	valor = 8;
	miParrafo.innerHTML += 
	"<br>"+"sumando valor= " + (++valor) +"<br>"
}