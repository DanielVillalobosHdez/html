class Contacto {
	
	constructor(n, t, d){
		this.nombre = n;
		this.telefono = t;
		this.direccion = d;
	}

	Escribir(elementoHTML){
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML += "<br>";
		resultado.innerHTML += 
			"Nombre: " + this.nombre + "<br>" +
			"Teléfono: " + this.telefono + "<br>" +
			"Dirección: " + this.direccion + "<br><br>";
	}

	EscribirNombre(elementoHTML){
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML += "<br>Nombre: " + this.nombre;
	}

	CambiarTelefono(MrT){
		this.telefono = MrT;
	}

	CambiarNombre(MrT){
		this.nombre = MrT;
	}
}

class ListaContactos {
	constructor(){
		this.nContactos = 0;
		this.lista = new Array(5);
	}

	InsertarContacto(n,t,d){
		var contacto = new Contacto(n,t,d);

		this.lista[this.nContactos] = contacto;
		this.nContactos++;
	}

	EscribirNombre(elementoHTML){
		var resultado = document.getElementById(elementoHTML);

		resultado.innerHTML = "";
		for (var i = 0; i < this.nContactos; i++) {
			this.lista[i].EscribirNombre(elementoHTML);
		}
	}
}

var miLista =  new ListaContactos();

function InsertarContactoLista() {
	var miNombre, miTelefono, miDireccion;

	miNombre = document.getElementById('Nombre').value;
	miTelefono = document.getElementById('Telefono').value;
	miDireccion = document.getElementById('Direccion').value;

	miLista.InsertarContacto(miNombre, miTelefono, miDireccion)
	miLista.EscribirNombre('ListaContactoNombre');
}