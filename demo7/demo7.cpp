#include <stdlib.h>
#include <stdio.h>
#include <string.h>

/*typedef struct {
	char nombre[30];
	long telefono;
} Contacto;*/

class contacto{

	public: char nombre[30];
	public: long telefono;

public: Contacto(char n[30], long tf){
	strcpy(this.nombre, n);
	this.telefono = tf;
}

void Escribir() {
	printf("Nombre: %s Telefono: %ld", this.nombre, this.telefono);
}


void CambiarTelefono(){
	this.telefono = nt;
}

};

int main(){
	
	Contacto c1;

	c1 = new Contacto("pepe", 1111);
	c1.Escribir();
	c1.CambiarTelefono(22222)

	return 0;
}