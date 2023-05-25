function recogText (text) {
    
    let caract = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayus = /[A-Z]/g;  
    let vacio="";  
      
    if(text.match(mayus)||text.match(caract)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(text==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}


let btnEncriptar = document.querySelector("#btn-encript");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIng = textInput;
   
    if (recogText (textoIng) == false) {       
        let Encriptado = encriptar(textoIng);
        let resultado = document.querySelector("#result");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})


const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIng) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIng.replaceAll(obj,reglas[obj]);
        textoIng = Encriptado;        
    }
    return (Encriptado);
}


let btnCopiar = document.querySelector("#btn-copiar");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#result").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";

});

let btnDesencriptar = document.querySelector("#btn-desin");

btnDesencriptar.addEventListener("click", function(){
    let textoIng = document.querySelector("#input-texto").value;
    let Desencriptado = desencriptar(textoIng);

    let resultado = document.querySelector("#result");
    resultado.value = Desencriptado;
})



function desencriptar (textoIng) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIng.replaceAll(reglas[obj],obj);
        textoIng = Encriptado;        
    }
    return (Encriptado);
}