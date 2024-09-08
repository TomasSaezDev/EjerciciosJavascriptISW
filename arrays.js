//funcion que reciba array de numeros y retorne la suma de todos
function sumaNumeros(lista){
    let suma = 0;
    lista.forEach(element => {
        suma += element;
    });
    return suma; 
}

//funcion que reciba como parametro un array de numeros y retorne el promedio de todos los numeros del array
function promedio(lista){
    let suma = 0;
    lista.forEach(element => {
        suma += element;
    });
    return suma/lista.length;
}

//funcion que tome un arreglo de strings como param y retorne un nuevo arreglo que contenga los mismo pero en  mayusculas
function upperCaseList(lista){
    const lista2 = lista.map((el)=>{
        return el.toUpperCase();
    })
    return lista2;
}

//funcion que tome un arreglo de numeros y dedvuelva un nuevo arreglo solo con los numeros pares

function numerosPares(lista){
    const listaPares = lista.filter((el)=>{
        if(el % 2 == 0){
            return el;
        }
    })
    return listaPares;
}

/*
    FOREACH => ejecuta bloque de codigo por cada elemento
    MAP => devuelve un array nuevo del mismo size
    FILTER => devuelve un array nuevo
 */