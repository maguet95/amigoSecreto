//lista de amigo capturados//
let amigos = [];


//Capturar Nombre//
function agregarAmigo() {

    let capturarNombre =document.getElementById('amigo');
    // validacion
    
    if (nombres == ""){
       alert ('Por favor, ingrese un nombre')
    }
    // Agregagr nombre al array
    amigos.push(nombres);

}
