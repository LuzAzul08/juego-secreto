let intentosMaximo = 10;
let listaNumeroSorteado = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades! Acertaste en ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else { (numeroDeUsuario < numeroSecreto)
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;

    if (listaNumeroSorteado.length == intentosMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto')
    asignarTextoElemento('p', 'Indica un número del 1 al 10')
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar nuevo numero secreto
    numeroSecreto = generarNumeroSecreto();
    //deshabilitar boton de intentar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //inicializar el número de intentos
    intentos = 1;
}

condicionesIniciales();



