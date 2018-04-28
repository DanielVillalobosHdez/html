var turno = 0;

function Comprobar() {
	
	var jugador;
	var c1;
	var c2;
	var c3;
	var c4;
	var c5;
	var c6;
	var c7;
	var c8;
	var c9;

	jugador = document.getElementById('player');
	c1 = document.getElementById('1').value;
	c2 = document.getElementById('2');
	c3 = document.getElementById('3');
	c4 = document.getElementById('4');
	c5 = document.getElementById('5');
	c6 = document.getElementById('6');
	c7 = document.getElementById('7');
	c8 = document.getElementById('8');
	c9 = document.getElementById('9');

	if (turno == 0) {jugador.innerHTML = "JUGADOR 2"; turno++} else {jugador.innerHTML = "JUGADOR 1"; turno--}

	c1.innerHTML = "<p>" + c1 + "</p>";

}