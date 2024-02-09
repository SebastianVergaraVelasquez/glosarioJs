// Tipos de datos

string = "";
numero = 25;
bool = true;

// variables

const edad = 26; //Const debe declararse en el momento que se inicializa
let nombre;
var cargo;

//otros valores: undefined, null, NaN

//prompt --> Input

// const nombreIngresado = prompt("Hola")  prompt es como un input


//concatenacion

nombre = "Java"
let saludo = "Hola"

frase = saludo +" "+ nombre
console.log(frase)
console.log(""+numero+edad)

//Si se agrega un string vacío a la suma de dos numeros, los toma como string

console.log(saludo.concat(" ").concat(nombre).concat("Concatenar con concat, solo es para strings"))

    //concatenar con backticks

        console.log(`Hola ${nombre} desde concatenar con backticks`)

//Operadores lógicos

// a == b
// a != b
// a === b //tipo de dato y mismo valor
// a !== b
// a > b
// a < b
// a >= b
// a <= b

//condicionales

if (nombre == "java") {
    console.log("lol")
}
else if (nombre == "sol"){
    console.log("xd")
}
else{
    console.log("uwu")
}

//Arrays

let arreglo = [1,2,3,4]

//objetos

let estudiante = {
    id: "1",
    nombreEstudiante: "Carlos",
    edad: 25,
}

console.log(estudiante[nombreEstudiante])