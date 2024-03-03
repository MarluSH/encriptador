const campotexto = document.querySelector(".campo-texto");
const mensaje = document.querySelector(".mensaje");


   // ["e"], "enter", //índice 0
   // ["i"],  "imes", //índice 1
   // ["a"],  "ai", // índice 2
   // ["o"],  "ober", //índice 3
   // ["u"],  "ufat", //índice 4


function btnEncriptar(){
    const textoEncriptado = encriptar(campotexto.value)
    mensaje.value = textoEncriptado
    campotexto.value = "";
    mensaje.style.backgroundImage = "none"
}
   
function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat" ]];
    stringEncriptado = stringEncriptado.toLowerCase()
    

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(campotexto.value)
    mensaje.value = textoEncriptado
    campotexto.value = "";
    mensaje.style.backgroundImage = "none"
}
   
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat" ]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])


        }
    }
    return stringDesencriptado

}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
}

document.getElementById("campo-texto").addEventListener("input", function(){
    var texto = this.value;
    var regex = /^[a-zA-Z0-9\s]+$/;
    
    if(!regex.test(texto)){
        this.value = texto.slice(0, -1);
    }
});
