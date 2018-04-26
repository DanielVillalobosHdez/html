function Obtenerdatos() {
	/*
	Realiza operaciones aritméticas con el elemento del documento HTML 
	*/

	var resultado;
	var dato1;
	var dato2;
	var operacion;

	dato1 = document.getElementById('Dato1.');
	dato2 = document.getElementById('Dato2');
	operacion = document.getElementById('signo').options;
	resultado = document.getElementById('Resultado');

	parseInt(dato1).value;
	parseInt(dato2).value;

	switch (operacion[operacion.selectedIndex].value) {
		case "a":
			resultado.innerHTML = dato1 + "+" + dato2 + " = " + (dato1.value + dato2.value); 
			break;
		case "b":
		    resultado.innerHTML = dato1.value + "+" + dato2.value + " = " + (dato1.value - dato2.value);
			break;
		case "c":
			resultado.innerHTML = dato1.value + "+" + dato2.value +  " = " + (dato1.value * dato2.value); 
			break;
		case "d":
			resultado.innerHTML = dato1.value + "+" + dato2.value + " = " + (dato1.value / dato2.value); 
			break;
	}
}