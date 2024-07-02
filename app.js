const textArea = document.getElementById('input');
const image = document.getElementById('muñe');
const loaderCubo = document.querySelector('.loader');
const titleEncrip = document.querySelector('.title'); 
const paragraf = document.querySelector('.parrafo');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const botonCopy = document.querySelector('.result_btn');

const palabras = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]

const encriptarMensaje = (mensaje) => {
    let mensajeEncriptado = ''

    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptado = letra;

        for(let j = 0; j < palabras.length; j++){

            if(letra === palabras[j][0]){
                encriptado = palabras[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptado;
    }
    return mensajeEncriptado;
}

const desencriptarMensaje = (mensaje) => {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < palabras.length; i++){
        let regex = new RegExp(palabras[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, palabras[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (e) =>{
    muñe.style.display = "none";
    loaderCubo.classList.remove("hidden");
    titleEncrip.textContent = "Capturando mensaje";
    paragraf.textContent = "";
});

botonEncriptar.addEventListener("click", (e) =>{
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    paragraf.textContent = mensajeEncriptado; 
    titleEncrip.textContent = "El resultado es: ";
    botonCopy.classList.remove("hidden");
});

botonDesencriptar.addEventListener("click", (e) => {
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    paragraf.textContent = mensajeDesencriptado; 
    botonCopy.style.remove("hidden");
});

botonCopy.addEventListener("click", () => {
    let textCopy = paragraf.textContent;
    navigator.clipboard.writeText(textCopy).then(()=>{
        image.style.display("block");
        loaderCubo.classList.add("hidden");
        titleEncrip.textContent = "Texto copiado";
        botonCopy.classList.add("hidden")
    })
})