function CalcularEtapa() {
	var campoEdad, campoResultado, valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;

	if(valorEdad >= 0 && valorEdad <= 12)
		campoResultado.innerHTML = "Estas en la infancia";
	else 
		if(valorEdad >= 13 && valorEdad <= 22)
			campoResultado.innerHTML = "Estas en la adolescencia";
		else 
			if(valorEdad >= 23 && valorEdad <= 110)
				campoResultado.innerHTML = "Eres un adulto";
			else
				campoResultado.innerHTML = "Eres gilipollas"
}