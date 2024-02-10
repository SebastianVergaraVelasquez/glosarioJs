
// Tipos de datos

// string = "";
// numero = 25;
// bool = true;

// variables

// const edad = 26; //Const debe declararse en el momento que se inicializa
// let nombre;
// var cargo;

//otros valores: undefined, null, NaN

//prompt --> Input

// const nombreIngresado = prompt("Hola")  prompt es como un input


//concatenacion

// nombre = "Java"
// let saludo = "Hola"

// frase = saludo +" "+ nombre
// console.log(frase)
// console.log(""+numero+edad)

//Si se agrega un string vacío a la suma de dos numeros, los toma como string

// console.log(saludo.concat(" ").concat(nombre).concat("Concatenar con concat, solo es para strings"))

//     //concatenar con backticks

//         console.log(`Hola ${nombre} desde concatenar con backticks`)

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

// if (nombre == "java") {
//     console.log("lol")
// }
// else if (nombre == "sol"){
//     console.log("xd")
// }
// else{
//     console.log("uwu")
// }

// //Arrays

// let arreglo = [1,2,3,4]

// //objetos

// let estudiante = {
//     id: "1",
//     nombreEstudiante: "Carlos",
//     edad: 25,
// }

// let edadEstudiante = estudiante["edad"]

// console.log(estudiante["nombreEstudiante"])


//Ciclos y bucles 

//while

// while(edadEstudiante < 30){
//     edadEstudiante++;
//     console.log(edadEstudiante);
//     console.log("solo while")
//     if(edadEstudiante==27){
//         break;
//     }
// }

// //do while

// do{
//     edadEstudiante++;
//     console.log(edadEstudiante)
//     console.log("do  while")
// }
// while (edadEstudiante<30)

// //ciclo for

// for(let i =0; i <20 ; i++){
//     if (i == 10){
//         break
//     }
//     console.log(i)
// }

// for (zapato in tienda){
        //este ciclo guarda los indices (in)
// }

// for (zapato of tienda){
        //este ciclo guarda los valores en cada posicion (of)
// }

//funciones

// function sumar (a, b){
//     const sumar = a + b;
//     console.log(sumar)
// }

// sumar(6,10)

// const restar = function(a,b){
//     const restar = a-b;
//     console.log(restar)
// }

// restar(5,10)

// //funciones flecha

// const saludar = (nombre) => {
//     console.log(`Hola ${nombre}`)
// }

// saludar('alfonso')

//objetos

// class estudiante{
//     constructor(nombreEst, edadEst, telefonoEst){
//         this.nombre = nombreEst;
//         this.edad = edadEst;
//         this.telefono = telefonoEst;
//     }
//     mostrarInfo(){
//         console.log(`Hola ${this.nombre} tienes ${this.edad} años y tu telefono es ${this.telefono}`)
//     }

//     set setTelefono(telNuevo){
//         this.telefono = telNuevo
//     }

//     get getEdad(){
//         return this.edad
//     }
// }

// //herencia

// class profesor extends estudiante{
//     constructor(nombreEst, edadEst, telefonoEst, cargo){
//         super(nombreEst, edadEst, telefonoEst)
//         this.cargo = cargo
//     }
//     infoProfe (){
//         console.log(`Ademas su cargo es ${this.cargo}`)
//     }
// }

// const estudiante1 = new estudiante("Javier", 25, 312558886);
// const estudiante2 = new estudiante("Sofia",18,3218484);

// estudiante1.mostrarInfo()

// const profesor1 = new profesor("Marcos", 25, 69959, "Maestro de inglés")
// profesor1.mostrarInfo()
// profesor1.infoProfe()

// //set y get

// estudiante1.setTelefono = 315487
// console.log(estudiante1.telefono)

// console.log(estudiante1.getEdad)


//Métodos de las cadenas


// endswith()  //devuelven true o false
// startswith()
// includes()

// indexof("Raul") //Devuelve la posicion de la primera letra de la cadena ingresada (cuenta de cero)
// lastindexof()
// padStart()
// padEnd()

// split("separador que se escoja") //divide la cadena de acuerdo al separador y devuelve un array
// substring(inicio, fin) //divide la cadena desde la posicion inicial a la final
// toLowerCase()
// toUpperCase()
// trim() //elimina los espacios de inicio y fin
// trimStart()
// trimEnd()


//Métodos de los array

//transforman el array original

// pop() //elimina el último elemento y lo retorna
// shift() //elimina el primer elemento y lo retorna
// push() //agrega elementos a un array, al final
// reverse() //invierte el orden de los elementos 
// unshift() //agrega elementos al inicio del array
// sort() //Ordena alfabéticamente
// splice(posicionInicio, cantidadDeElementosAEliminar, loQueQuieraAgregar, loquequieraagregar2)

//devuelven un nuevo array

// join(separador) //devuelve una cadena de texto con cada elemento juntado como una cadena
// slice(posicionInicial, posicionFinal) //devuelve un string con los elementos en el rango seleccionado
// indexof()
// lastindexof()
// includes()

// repeticiones

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.

// const materias = ["matematicas" , "materiales" , "historia", "lenguas"]

// const resultado = materias.forEach(materia => {
//     primeraLetra = materia.substring(0,1);
//     if (primeraLetra == "m"){
//         console.log(materia)
//     }
// })

// //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);


// Métodos Math

Math.sqrt()
Math.cbrt()
Math.max()
Math.min()
Math.random() //valor entre 0 y 1, *100
Math.round() // entero más cercano
Math.fround() // redondea decimales
Math.floor()
Math.trunc() // devuelve la parte entera