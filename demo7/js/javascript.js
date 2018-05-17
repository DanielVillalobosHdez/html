class Contacto {
	constructor(n, t){
		this.nombre = n;
		this.telefono = t;
	}

	Escribir(){
		var resultado;

		resultado = document.getElementById('Resultado');
		resultado.innerHTML += 
			"Nombre: " + this.nombre + "<br>" +
			"Teléfono" + this.telefono + "<br>";
	}

	CambiarTelefono(MrT){
		this.telefono = MrT;
	}
}

function CrearContacto() {
	var c1 = new Contacto('Pepe', 1111),
		c2 = new Contacto('Ana', 2222);

	c1.Escribir();
	c2.Escribir();
}

//imprimir tres contactos y poder modificar los contactos