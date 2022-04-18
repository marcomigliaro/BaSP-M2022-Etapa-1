console.log('--EXERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
// guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a:');

function sum6A(x,y){
    return x + y;
}

var result6A = sum6A(10,7);
console.log(result6A);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
// número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b:');

function sum6B(x,y){
    if(typeof x != 'number' || typeof y != 'number'){
        alert('One of the parameters has an error');
        return console.log(NaN);
    } else{
        return console.log(x + y);
    }
}

sum6B(2,4);

// c. Crear una función validate integer que reciba un número 
// como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');

function validate(integerNumber){
    if (Number.isInteger(integerNumber)){
       return console.log(Number.isInteger(integerNumber));
    } else {
        return console.log('This is not an integer number');
    }
}

validate(3);

// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso 
// que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d:');

function sum6D(x,y){
    if(typeof x != 'number' || typeof y != 'number'){
        alert('One of the parameters has an error');
        return console.log(NaN);
    } else if (Number.isInteger(x) && Number.isInteger(y)){
        return console.log(x + y);
    } else {
        console.log(Math.round(x + y));
        return alert("Error: there are decimal numbers");
    }
}

sum6D(8,3);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla 
// dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e:');

function sum6E(x,y){
    return sum6D(x,y);
}

sum6E(4,5);