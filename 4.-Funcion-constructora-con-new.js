function createSuperHumano(superpoder, tipo, alias) {
    // //const superhumani {
    //     superpoder:superpoder,
    //     tipo:tipo,
    //     alias:alias,
    // };
    // return superHumano;
    this.superpoder =superpoder;
    this.tipo = tipo;
    this.alias = alias;
    this.volar = volar
    //return superhumano
};


function createPanadero(isComerciante, hasMandil) {
    this.isComerciante =isComerciante;
    this.hasMandil = hasMandil;
};

function createPerson(name, altura, colorPiel) {
    this.name =name;
    this.altura = altura;
    this.colorPiel = colorPiel;
};

createSuperHumano.prototype.volar= () => {
    console.log("tu super vuela");
}

const flash = new createSuperHumano("super velocidad", "super heroe", "Flash");
const mujerMaravilla = new createSuperHumano("super fuerza", "super heroe", "Mujer Maravilla");
console.log(flash);
console.log(mujerMaravilla);

/**
 * 1. Se cambia var por const ya que es más correcto limitar el alcance de las varianles
 * 2. El objeto literal es reemplazado por la sintaxis this
 * 3. El return de la funcion constructora se elimina, ya que al llamar a la funcion
 * constructora con new, implicitamente nos retorna un objeto con las propiedades asignadas
 * en el this
 */
