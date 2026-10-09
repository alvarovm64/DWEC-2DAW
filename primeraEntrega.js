//Se va a almacenar en un Object de javascript (no usar class todavía)
//Propiedades: año, mes, dia, hora, minuto y segundo
//Constructor: Un solo constructor que reciba los 6 parámetros y cree un objeto de tipo tiempo. Si todos los parámetros valen 0,
//entonces inicializa el objeto con la fecha y hora actual.
//Métodos: getters y setters (tambien getFechaCompleta y getHoraCompleta: devuelven dd/mm/aaaa y hh:mm:ss respectivamente)
//esBisiesto() true si es bisiesto, false en otro caso
//esMayor(otroTiempo) true si es mayor que otroTiempo, false en otro caso
//esMenor(otroTiempo) true si es menor que otroTiempo, false en otro caso
//esIgual(otroTiempo) true si es igual que otroTiempo, false en otro caso
//sumaHora(otroTiempo) suma la hora de otroTiempo


function Tiempo(año, mes, dia, hora, minuto, segundo) {

    if(año == 0 && mes == 0 && dia == 0 && hora == 0 && minuto == 0 && segundo == 0){
        const ahora = new Date();

        this.año = ahora.getFullYear();
        this.mes = ahora.getMonth();
        this.dia = ahora.getDate();
        this.hora = ahora.getHours();
        this.minuto = ahora.getMinutes();
        this.segundo = ahora.getSeconds();
    }else{

        this.año = año;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
}

//getters y setters:

Object.defineProperties(Tiempo, {
    año: {
        getAño() {
            return this.año;
        },

        setAño(val) {
            this.año = val;
        }
    },

    mes: {
        getMes() {
            return this.mes;
        },

        setMes(val) {
            this.mes = val;
        }
    },

    dia: {
        getDia() {
            return this.dia;
        },

        setDia(val) {
            this.dia = val;
        }
    },

    hora: {
        getHora() {
            return this.hora;
        },

        setHora(val) {
            this.hora = val;
        }
    },

    minuto: {
        getMinuto() {
            return this.minuto;
        },

        setMinuto(val) {
            this.minuto = val;
        }
    },

    segundo: {
        getSegundo() {
            return this.segundo;
        },

        setSegundo(val) {
            this.segundo = val;
        }
    },



})

//fechaCompleta

Tiempo.prototype.getFechaCompleta = function() {
    
    const dd = String(this.dia);
    const mm = String(this.mes);
    const aa = String(this.año);

    return dd + `/`+ mm + `/` + aa;
}

//horaCompleta

Tiempo.prototype.getHoraCompleta = function() {

    const hh = String(this.hora);
    const min = String(this.minuto);
    const ss = String(this.segundo);

    return hh + `:` + min + `:` + ss;
}

//bisiesto

Tiempo.prototype.esBisiesto = function () {
    return ((this.año%4 == 0 && this.año%100 !== 0) || this.año%400 == 0);
}

//To date
Tiempo.prototype.toDate = function () {
  return new Date(
    this.año,
    this.mes,
    this.dia,
    this.hora,
    this.minuto,
    this.segundo,
  );
};

//Comparaciones

Tiempo.prototype.esMayor = function (otroTiempo) {
    return (this.toDate().getTime() > otroTiempo.toDate().getTime());
};

Tiempo.prototype.esMenor = function (otroTiempo) {
  return this.toDate().getTime() < otroTiempo.toDate().getTime();
};

Tiempo.prototype.esIgual = function (otroTiempo) {
  return this.toDate().getTime() == otroTiempo.toDate().getTime();
};


//sumaHora

Tiempo.prototype.sumaHora = function (otroTiempo) {
    const fecha = this.toDate();

    fecha.setFullYear(fecha.getFullYear() + otroTiempo.año);
    fecha.setMonth(fecha.getMonth() + otroTiempo.mes);
    fecha.setDate(fecha.getDate() + otroTiempo.dia);
    fecha.setHours(fecha.getHours() + otroTiempo.hora);
    fecha.setMinutes(fecha.getMinutes() + otroTiempo.minuto);
    fecha.setSeconds(fecha.getSeconds() + otroTiempo.segundo);

    this.año = fecha.getFullYear();
    this.mes = fecha.getMonth() + 1;
    this.dia = fecha.getDate();
    this.hora = fecha.getHours();
    this.minuto = fecha.getMinutes();
    this.segundo = fecha.getSeconds();
};


//Crear instancias de prueba
const tiempo1 = new Tiempo(2024, 2, 28, 23, 59, 50);
const tiempo2 = new Tiempo(2024, 2, 28, 23, 59, 50);
const tiempo3 = new Tiempo(2026, 10, 9, 10, 0, 0);
const tiempoActual = new Tiempo(0, 0, 0, 0, 0, 0);

//Probando getFechaCompleta y getHoraCompleta
console.log("tiempo1 Fecha:", tiempo1.getFechaCompleta());
console.log("tiempo1 Hora:", tiempo1.getHoraCompleta());
console.log("tiempoActual Fecha:", tiempoActual.getFechaCompleta());
console.log("tiempoActual Hora:", tiempoActual.getHoraCompleta());

//Probando esBisiesto
console.log("¿tiempo1 es bisiesto?:", tiempo1.esBisiesto());

//Probando comparaciones
console.log("¿tiempo1 es mayor que tiempo3?:", tiempo1.esMayor(tiempo3));
console.log("¿tiempo1 es menor que tiempo3?:", tiempo1.esMenor(tiempo3));
console.log("¿tiempo1 es igual a tiempo2?:", tiempo1.esIgual(tiempo2));

//Probando sumaHora
const tSuma = new Tiempo(0, 0, 0, 0, 0, 15);
console.log("tiempo1 antes de sumar:", tiempo1.getFechaCompleta(), tiempo1.getHoraCompleta());
tiempo1.sumaHora(tSuma);
console.log("tiempo1 después de sumar 15 secs:", tiempo1.getFechaCompleta(), tiempo1.getHoraCompleta());