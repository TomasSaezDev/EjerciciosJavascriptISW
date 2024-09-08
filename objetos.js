

const Persona = {
    "nombre" : 'Tomas saez',
    'edad' : 22,
    'genero' :'masculino'
}

console.log(`nombre: ${Persona.nombre}\nedad: ${Persona.edad}\ngenero: ${Persona.genero}\n`);

const Caja = {
    cuadernos : ['Cuaderno calculo 3','Cuaderno ISW','Cuaderno I.A','Cuaderno FEP'],
    lapices: ['portaminas','boligrafo negro','boligrafo rojo'],
    papel: {
        cantidad : 10,
        tipo : 'Carta A4'
    },
    fotografias : ['Foto de carnet','Foto graduacion'],
    buen_estado : true,
    descripcion : function(){
        console.log(`Cuadernos: [${this.cuadernos}]\nLapices: [${this.lapices}]\nPapel: [cantidad: ${this.papel.cantidad} tipo: ${this.papel.tipo}]\nFotografias: [${this.fotografias}]\nBuen estado: ${this.buen_estado} `);
    }
}

console.log("---CONTENIDO DE LA CAJA---");
Caja.descripcion();

console.log("---TIPOS DE DATOS PROPIEDADES CAJA---")
console.log(typeof(Caja));
console.log(typeof(Caja.cuadernos));
console.log(typeof(Caja.lapices));
console.log(typeof(Caja.papel));
console.log(typeof(Caja.fotografias));
console.log(typeof(Caja.buen_estado));

