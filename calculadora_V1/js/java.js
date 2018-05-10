function Obtenerdatos() {
	/*
	Realiza operaciones aritméticas con el elemento del documento HTML 
	*/

	var resultado;
	var dato1;
	var dato2;
	var operacion;
	var potencia;

	dato1 = parseInt(document.getElementById('Dato1').value);
	dato2 = parseInt(document.getElementById('Dato2').value);
	operacion = document.getElementById('signo').options;
	resultado = document.getElementById('Resultado');

	switch (operacion[operacion.selectedIndex].value) {
		case "a":
			resultado.innerHTML = dato1 + "+" + dato2 + " = " + (dato1 + dato2); 
			if(dato1 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "+" + dato2 + " = " + (dato1 + dato2);
			if(dato2 < 0)
				resultado.innerHTML = dato1 + "+" + "(" + dato2 + ")" + " = " + (dato1 + dato2);
			if(dato1 < 0 && dato2 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "+" + "(" + dato2 + ")" + " = " + (dato1 + dato2);
			break;
		case "b":
		    resultado.innerHTML = dato1 + "-" + dato2 + " = " + (dato1 - dato2);
		    if(dato1 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "-" + dato2 + " = " + (dato1 - dato2);
			if(dato2 < 0)
				resultado.innerHTML = dato1 + "-" + "(" + dato2 + ")" + " = " + (dato1 - dato2);
			if(dato1 < 0 && dato2 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "-" + "(" + dato2 + ")" + " = " + (dato1 - dato2); 
			break;
		case "c":
			resultado.innerHTML = dato1 + "x" + dato2 +  " = " + (dato1 * dato2);
			if(dato1 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "x" + dato2 + " = " + (dato1 * dato2);
			if(dato2 < 0)
				resultado.innerHTML = dato1 + "x" + "(" + dato2 + ")" + " = " + (dato1 * dato2);
			if(dato1 < 0 && dato2 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "x" + "(" + dato2 + ")" + " = " + (dato1 * dato2); 
			break;
		case "d":
			resultado.innerHTML = dato1 + "/" + dato2 + " = " + (dato1 / dato2); 
			if(dato1 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "/" + dato2 + " = " + (dato1 / dato2);
			if(dato2 < 0)
				resultado.innerHTML = dato1 + "/" + "(" + dato2 + ")" + " = " + (dato1 / dato2);
			if(dato1 < 0 && dato2 < 0)
				resultado.innerHTML = "(" + dato1 + ")" + "/" + "(" + dato2 + ")" + " = " + (dato1 / dato2); 
			break;
		case "e":
			resultado.innerHTML = dato1 + "<sup>" + dato2 + "</sup>" + " = " + Math.pow(dato1, dato2);
			break;
		case "f":
			resultado.innerHTML = "<sup>" + dato1 + "</sup>" + "&#8730;" + dato2 + " = " + Math.sqrt(dato1, dato2);
			break;
	}
}