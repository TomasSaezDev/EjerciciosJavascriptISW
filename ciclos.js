// imprimir numeros del 1 al 10
for(let i=1;i<=10;i++){
    console.log(i);
}

console.log("\n");

//imprimir numeros del 10 la 1
for(let i=10;i>=1;i--){
    console.log(i);
}

console.log("\n");

//imprimir numeros del 1 al 10 pero solo los pares
for(let i=1;i<=10;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

console.log("\n");

//imprimir numeros del 1 al 10 pero solo los impares
for(let i=1;i<=10;i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

console.log("\n");

//imprimir numeros del 1 al 10 pero solo los multiplos de 3
for(let i=1;i<=10;i++){
    if(i % 3 == 0){
        console.log(i);
    }
}

console.log("\n");

//imprimir numeros del 1 al 10 pero solo los multiplos de 5
for(let i=1;i<=10;i++){
    if(i % 5 == 0){
        console.log(i);
    }
}

console.log("\n");

//imprimir numeros del 1 al 10 pero solo los multiplos de 3 y 5
for(let i=1;i<=10;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i);
    }
}

console.log("\n");

//imprimir numeros del 1 al 10 pero solo los multiplos de 3 o 5
for(let i=1;i<=10;i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i);
    }
}