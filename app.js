// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
var nombreAmigo;


function agregarAmigo(){ //Agregar amigos a arreglo
    nombreAmigo = document.getElementById('amigo').value;    

    let vacio = validarTexto(nombreAmigo.length);

    if (vacio != false) {
        amigos.push(nombreAmigo);
        console.log(`Valor ingresado: ${amigos}`);
        limpiarTextbox();
        actualizarLista();
    }
}

function validarTexto(valor){ //Validar campo vacio
    if (valor == 0) {
        alert('Por favor, ingrese un nombre');
        return false
    }
    //console.log(`Parametro ${valor}`);
}

function validarLista(valor){
    if (valor == 0) {
        alert('Lista vacia');
        return false;
    }
}

function limpiarTextbox(){ //Limpiar campo de texto
    document.querySelector('#amigo').value = '';
}

function actualizarLista() { //Visualizar lista de elementos en HTML

    document.getElementById('listaAmigos').innerHTML = ''; //Limpia listado HTML

    for(var i = 0; i < amigos.length; i++){
        
        var li = document.createElement("li"); //crea elemento li
        var contenido = amigos[i]; //valor de posicion en array

        li.appendChild(document.createTextNode(contenido)); //agregar elemento de array a elemento li
        document.getElementById('listaAmigos').appendChild(li); //agrega elemento li a HTML
    }
    
}

function sortearAmigo() { //Genera indice aleatorio

    let listaVacia = validarLista(amigos);

    document.getElementById('resultado').innerHTML = '';
    
    if (listaVacia != false) {
        let indice = Math.floor(Math.random() * amigos.length);
        var li = document.createElement("li"); //Crea elemento li
        
        li.appendChild(document.createTextNode(amigos[indice])); // agrega informacion a elemento li
        console.log(indice);

        document.getElementById('resultado').appendChild(li); // Muestra el amigo sorteado
    }
        
}


