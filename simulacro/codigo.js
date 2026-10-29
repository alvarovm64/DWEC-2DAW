/*Ejercicio 11. Biblioteca

Dificultad: examen · Tiempo recomendado: 25-30 minutos

Criterio de exito: el programa debe funcionar sin errores inesperados y demostrar los cinco conceptos del tema. */


//Crea una clase Libro con los atributos titulo, autor y disponible, que inicialmente será true.
class Libro {
    constructor(titulo,autor,disponible) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    //Apartado A  Clases
    //Crea los metodos prestar() y devolver().
    //- prestar() cambia la disponibilidad a false.
    //- devolver() cambia la disponibilidad a true.
    

    prestar(){
        if (this.disponible == false) {
            throw new libroPrestadoError("El libro ha sido prestado, lo sentimos");
        }else{
            this.disponible = false;
        }
        
    }

    devolver(){
        if (this.disponible == true) {
            throw new libroDevueltoError("El libro ha sido devuelto.");
        }else{
            this.disponible = true;
        }
    }

    /*Apartado D  Polimorfismo

    Añade un método mostrarInformacion() a Libro y sobrescríbelo en LibroDigital para incluir también el formato. */

    mostrarInformacion(){
        console.log("Información del libro: Titulo = " + this.titulo + ", autor = " + this.autor + ", disponibilidad = " + this.disponible);
    }



}
//Apartado B _ Excepciones
//Si intentas prestar un libro que ya está prestado, lanza una excepción. Si intentas devolver un libro que ya está disponible, lanza otra excepción.

class libroPrestadoError extends Error{
    constructor(mensaje){
        super(mensaje);
        this.name = "libroPrestadoError";
    }
    
}

class libroDevueltoError extends Error{
    constructor(mensaje){
        super(mensaje);
        this.name = "libroDevueltoError";
    }
    
}

/*Apartado C — Herencia

Crea una clase LibroDigital que herede de Libro y añada un atributo formato, por ejemplo, "PDF". */

class LibroDigital extends Libro{
    constructor(titulo,autor,disponible,formato){
        super(titulo,autor,disponible);
        this.formato = formato;

    }

    //apartado D
    mostrarInformacion(){
        console.log("Información del libro digital: Titulo = " + this.titulo + ", autor = " + this.autor + ", disponibilidad = " + this.disponible + ", formato = " + this.formato);
    }
}

/*Apartado E — Arrays

Crea un array con tres libros, incluyendo al menos un libro digital. Recorre el array para mostrar su información. Después, presta uno de los libros y gestiona los posibles errores con try...catch. */


let libro1 = new Libro("El coco","Juca",true);
let libro2 = new LibroDigital("Los 7 enanitos","Da vinci",true,"PDF");
let libro3 = new Libro("Caperucita roja","Juanma",true);

let Biblioteca = [libro1,libro2,libro3];

for(let i = 0; i<Biblioteca.length; i++){
    Biblioteca[i].mostrarInformacion();
}

try{
    libro1.prestar();
    libro1.prestar();

}catch(error){
    console.log(error.message);
}