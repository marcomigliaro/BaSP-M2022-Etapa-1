console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres 
// y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');

var string2A = 'smartphones';

console.log(string2A.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
// primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b:');

var string2B = 'thermostats';

var stringSubString2B = string2B.substring(0,5);

console.log(stringSubString2B);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
// últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c:');

var string2C = 'fabrications';

var stringSubString2C = string2C.substring(9,12);

console.log(stringSubString2C);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
// con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva 
// variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d:');

var string2D = 'facilitating';

var stringSubString2D = string2D.substring(0,1).toUpperCase() + string2D.substring(1,12).toLowerCase();

console.log(stringSubString2D);

// e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e:');

var string2E = 'peter parker';

var index2E = string2E.indexOf(' ');

console.log(index2E);

// f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
// espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un 
// nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras 
// en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f:');

var string2F = 'mathematical account';

var newString2F = string2F.substring(0,1).toUpperCase() + string2F.substring(1,string2F.indexOf(' ') + 1).toLowerCase()
+ string2F.substring(string2F.indexOf(' ') + 1, string2F.indexOf(' ') + 2).toUpperCase() + 
string2F.substring(string2F.indexOf(' ') + 2).toLowerCase() ;

console.log (newString2F);