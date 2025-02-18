// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //Obtengo el elemento del imput
    let amigo = document.getElementById('amigo');

    //Obtengo el valor ingresado y elimino espacios en blanco al inicio y al final
    let nombre = amigo.value.trim();

    //Verifico que se haya ingresado un nombre o si ya existe en la lista
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
    }else if(amigos.includes(nombre)){
        alert(`El nombre ${nombre} ya se encuentra dentro de la lista`);
        amigo.value = "";
    }else{
        //Agrego el nombre al array
        amigos.push(nombre);
        //Limpio el input
        amigo.value = "";
        //Compruebo por consola
        console.log("Amigo agregado:", amigos);
        //Despues de agregar actualizo la lista 
        actualizarLista();
    }
};

//Funcion para mostrar los amigos dentro de la lista
function actualizarLista(){
    //Obtengo elemento de la lista
    const lista = document.getElementById('listaAmigos');
    //Limpio la lista
    lista.innerHTML = "";
    //Agrego cada elemento del array como un li con forEach
    // amigos.forEach(amigo => {
    //     const li = document.createElement('li');
    //     li.textContent = amigo;
    //     lista.appendChild(li);
    // });
    //Agrego cada elemento del array como un li con for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
};

//Funcion para el sorteo 
function sortearAmigo(){  
    //Verifico que haya amigos para sortear
    if (amigos.length === 0){
        alert("No hay amigos que sortear");
        return;
    }
    //Genero un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //Obtengo el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    //Muestro el resultado del sorteo
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
};



