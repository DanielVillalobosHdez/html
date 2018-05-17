function EscribirNumero() {
	
	var campoResultado, numero, contador;

	campoResultado = document.getElementById('Resultado');
	numero = parseInt(document.getElementById('Numero').value);

	contador = 0;

	//numero del 1 al numero 
	// primero con while
	// luego con do while

	while (contador <= numero){
		campoResultado.innerHTML += contador + ' ';
		contador++;
	}

	contador = 0;
	campoResultado.innerHTML += '<br><br>';

	do {
		campoResultado.innerHTML += contador + ' ';
		contador++;
	} while (contador <= numero);

	campoResultado.innerHTML += '<br><br>';

}