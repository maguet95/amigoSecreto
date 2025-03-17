//lista de amigo capturados//
let amigos = [];
let listaDeAmigos = [];


function agregarAmigo() {


    let inputAmigo = document.getElementById("amigo"); //  Capturar el valor del campo de entrada
    let nombreAmigo = inputAmigo.value; 
     // Paso 2: Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; 
    }

    amigos.push(nombreAmigo); // Añadir el nombre al array de amigos
    limpiarCaja();    // Limpiar el ombre de la caja
    
    actualizarListaAmigos(); // Actualizar la lista de amigos en la página
  
}

function limpiarCaja() {
    document.getElementById("amigo").value = '';
   
}


function actualizarListaAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");  // lista donde se mostrara los nombres
    listaDeAmigos.innerHTML = ""; // Limpieza de la lista  previa
        
    // Recorrer el arreglo para  asignar los nombres a la lista de amigos 
    for (let i = 0; i < amigos.length; i++) {

        let elementoNombre = document.createElement("li");

        elementoNombre.textContent = amigos[i];
        listaDeAmigos.appendChild(elementoNombre);
    }
}

function sortearAmigo(){
  // Verificacion que el array no este vacio
    if (amigos.length === 0) {
        alert("Oyee, ¿No tiene amigos???, agrega aunque sea uno");
        return; 
    }
    // Generar un indice aleatorio en base al array existente
    let numeroGenerado = Math.floor(Math.random() * amigos.length);
    let amigoElegido = amigos[numeroGenerado];

    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = (`¡Tu amigo secreto es: ${amigoElegido}!`)
        
   

}