var textbox;
var numero1;
var numero2;

function poner(numero) {
	
	var operando;
	
	textbox = document.getElementById('valor');

	textbox.value += numero;

	if(numero.value.length = 1)
		numero1 = parseInt(numero);
	if(numero.value.length = 3)
		numero2 = parseInt(numero);
	
}
function Calcular() {
	
	var resultado;
	var textbox;
	var operando;

	operando = document.getElementById('oper').value;
	textbox = document.getElementById('valor');

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

	textbox.value = resultado;

}

