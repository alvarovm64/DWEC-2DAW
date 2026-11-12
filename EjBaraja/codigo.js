class ExcepcionesCarta {
  constructor(numero, palo) {
    if (numero < 1 || numero > 13) {
      throw new Error("El número no es correcto");
    }

    if (palo != "t" && palo != "r" && palo != "p" && palo != "c") {
      throw new Error("El palo no es correcto");
    }
  }
}

class Carta {
  constructor(numero = 1, palo = "c") {
    new ExcepcionesCarta(numero, palo);

    this.numero = numero;
    this.palo = palo;
  }

  static copiar(carta) {
    return new Carta(carta.getNumero(), carta.getPalo());
  }

  getNumero() {
    return this.numero;
  }

  getPalo() {
    return this.palo;
  }

  setNumero(numero) {
    new ExcepcionesCarta(numero, this.palo);
    this.numero = numero;
  }

  setPalo(palo) {
    new ExcepcionesCarta(this.numero, palo);
    this.palo = palo;
  }

  mostrarCarta() {
    let numeroMostrar = this.numero;
    let paloMostrar = "";

    if (this.numero == 1) {
      numeroMostrar = "As";
    } else if (this.numero == 11) {
      numeroMostrar = "Jack";
    } else if (this.numero == 12) {
      numeroMostrar = "Reina";
    } else if (this.numero == 13) {
      numeroMostrar = "Rey";
    }

    if (this.palo == "c") {
      paloMostrar = "Corazones";
    } else if (this.palo == "p") {
      paloMostrar = "Picas";
    } else if (this.palo == "r") {
      paloMostrar = "Rombos";
    } else if (this.palo == "t") {
      paloMostrar = "Tréboles";
    }

    console.log("Es el " + numeroMostrar + " de " + paloMostrar);
  }

  comparar(carta) {
    let resultado = 0;

    if (this.numero > carta.getNumero()) {
      resultado = 1;
    } else if (this.numero < carta.getNumero()) {
      resultado = -1;
    } else {
      let valorPalo1 = this.obtenerValorPalo(this.palo);
      let valorPalo2 = this.obtenerValorPalo(carta.getPalo());

      if (valorPalo1 > valorPalo2) {
        resultado = 1;
      } else if (valorPalo1 < valorPalo2) {
        resultado = -1;
      }
    }

    if (resultado == 1) {
      console.log("La primera carta es la ganadora");
    } else if (resultado == -1) {
      console.log("La segunda carta es la ganadora");
    } else {
      console.log("Hay un empate");
    }

    return resultado;
  }

  obtenerValorPalo(palo) {
    if (palo == "t") {
      return 4;
    } else if (palo == "r") {
      return 3;
    } else if (palo == "p") {
      return 2;
    } else {
      return 1;
    }
  }
}

// PRUEBAS

try {
  let c1 = new Carta(1, "manzanas");
  let c2 = new Carta(-5, "rombos");
} catch (e) {
  console.log(e.message);
}
