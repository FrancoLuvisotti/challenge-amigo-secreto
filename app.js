// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Obtengo el elemento del imput
    let amigo = document.getElementById('amigo');

    //Obtengo el valor ingresado y elimino espacios en blanco al inicio y al final
    let nombre = amigo.value.trim();

    //Verifico que se haya ingresado un nombre
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
    }else{
        //Agrego el nombre al array
        amigos.push(nombre);
        //Limpio el input
        amigo.value = "";
        //Compruebo por consola
        console.log("Amigo agregado:", amigos);
    }
};

