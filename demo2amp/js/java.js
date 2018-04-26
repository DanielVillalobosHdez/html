var click=0;
function Cambiaroperadores() {
	/*
	Realiza operaciones aritméticas con el elemento del documento HTML 
	*/

	var miParrafo;
	var valor;


	miParrafo = document.getElementById('Resultado');

	click++;

	switch(click) {
		case 1:
			valor = 12 + 20;
			miParrafo.innerHTML = 
			"<br>"+"sumando los numeros 12 y 20 = " + valor +"<br>"
			break;
		case 2:
			valor = 12 - 20;
			miParrafo.innerHTML = 
			"<br>"+"restando los numeros 12 y 20 = " + valor +"<br>"
			break;
		case 3:	
			valor = 3 * 20;
			miParrafo.innerHTML = 
			"<br>"+"multiplicando los numeros 12 y 20 = " + valor +"<br>"
			break;
		case 4:
			valor = 34 / 6;
			miParrafo.innerHTML = 
			"<br>"+"dividiendo los numeros 34 y 6 = " + valor +"<br>"
			break;
		default: 
			click = 0;
	}
}