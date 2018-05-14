var textbox;
var numero1;
var numero2;

function poner(numero) {
	
	var operando, numero1_1, numero2_1;
	
	textbox = document.getElementById('valor');

	textbox.value += numero;

	numero1_1 = numero.charAt(1);
	numero2_1 = numero.charAt(0);

	numero1 = parseInt(numero1_1);
	numero2 = parseInt(numero2_1);
	
}
function Calcular() {
	
	var resultado;
	var textbox;
	var operando;

	operando = document.getElementById('oper').value;
	textbox = document.getElementById('valor');

	resultado = numero1;
	resultado += ' ' + numero2;

/*
	switch (operando) {
		case 'a':
			resultado = (numero1 + numero2);
		case 'b':
			resultado = (numero1 - numero2);
		case 'c':
			resultado = (numero1 * numero2);
		case 'c':
			resultado = (numero1 / numero2);
	}
-*/
	textbox.value = resultado;
}

