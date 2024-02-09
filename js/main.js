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
saludo = "Hola"

frase = saludo +" "+ nombre
console.log(frase)
console.log(""+numero+edad)

//Si se agrega un string vacío a la suma de dos numeros, los toma como string

console.log(saludo.concat(" ").concat(nombre).concat("Concatenar con concat, solo es para strings"))

    //concatenar con backticks

        console.log(`Hola ${nombre} desde concatenar con backticks`)