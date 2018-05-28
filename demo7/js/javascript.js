class Contacto {
	
	constructor(n, t){
		this.nombre = n;
		this.telefono = t;
	}

	Escribir(){
		var resultado;

		resultado = document.getElementById('Resultado');
		resultado.innerHTML += "<br>";
		resultado.innerHTML += 
			"Nombre: " + this.nombre + "<br>" +
			"Teléfono: " + this.telefono + "<br><br>";
	}

	CambiarTelefono(MrT){
		this.telefono = MrT;
	}

	CambiarNombre(MrT){
		this.nombre = MrT;
	}
}

var c1, c2, c3;

function CrearContacto() {
	c1 = new Contacto('Pepe', 1111),
	c2 = new Contacto('Ana', 2222),
	c3 = new Contacto('Josefa', 3333);

	c1.Escribir();
	c2.Escribir();
	c3.Escribir();

}

function Modificar() {
	var valorNombre,
		valorTelefono;

	valorNombre = document.getElementById('Nombre').value;
	valorTelefono = document.getElementById('Telefono').value;

	c1.CambiarNombre(valorNombre);
	c1.CambiarTelefono(valorTelefono);

	c1.Escribir();
	c2.Escribir();
	c3.Escribir();


}

//5 contactos, añadir, modificar, borrar y buscar