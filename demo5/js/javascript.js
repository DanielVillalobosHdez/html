function CalcularDia() {
	var campoResultado,
		fechaActual,
		diaActual;

	campoResultado = document.getElementById('Resultado');

	fechaActual = new Date();
	diaActual = fechaActual.getDay();

	switch (diaActual) {
		case 1:
			campoResultado.innerHTML += "Lunes ";
			break;
		case 2:
			campoResultado.innerHTML += "Martes ";
			break;
		case 3:
			campoResultado.innerHTML += "Miercoles ";
			break;
		case 4:
			campoResultado.innerHTML += "Jueves ";
			break;
		case 5:
			campoResultado.innerHTML += "Viernes ";
			break;
		case 6:
			campoResultado.innerHTML += "Sabado ";
			break;
		case 7:
			campoResultado.innerHTML += "Domingo ";
			break;
		default:
			campoResultado.innerHTML +
			= " Día no valido";
			break;
	}

	if (diaActual <= 5 && diaActual >= 1 )
		campoResultado.innerHTML += "Entre semana";
	else
		campoResultado.innerHTML += "Fin de semana";
}