
function mostrar(mensaje){
    document.querySelector("#resultado").innerHTML=mensaje;
}

function actualizarPantalla(){
    
    document.querySelector("#vacio").style.display="none";
    document.querySelector("#imagenSinMensaje").style.display="none";
    document.querySelector("#sinMensaje").style.display="none";
    document.querySelector("#descpripcionSinMensaje").style.display="none";
    document.querySelector("#resultado").style.display="inline-block";
    document.querySelector("#copiar").style.display="inline-block";
}

function encriptarMensaje(){
    let mensaje = document.querySelector("#texto").value;
    let secreto="";

    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(let i=0;i<mensaje.length;i++){
            switch(mensaje[i]){
                case "a":
                    secreto+="ai";
                    break;
                case "e":
                    secreto+="enter";
                    break;
                case "i":
                    secreto+="imes";
                    break;
                case "o":
                    secreto+="ober";
                    break;
                case "u":
                    secreto+="ufat";
                    break;
                default:
                    secreto+=mensaje[i];
            }
        }

        actualizarPantalla();
        mostrar(secreto);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
}

function desencriptarMensaje(){
    let mensaje = document.querySelector("#texto").value;
    let codigos= [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    let letras = ['a','e','i','o','u'];
    
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(let i=0;i<5;i++){
            mensaje=mensaje.replaceAll(codigos[i], letras[i]);
        }

        actualizarPantalla();
        mostrar(mensaje);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    
}

function copiarTexto(){
    let texto = document.querySelector("#resultado");
    texto.select();
    texto.setSelectionRange(0, 99999); /* mobile devices */
    navigator.clipboard.writeText(texto.value);
}

let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");


copiar.onclick = copiarTexto;
encriptar.onclick = encriptarMensaje;
desencriptar.onclick = desencriptarMensaje;
