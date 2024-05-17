// Pegando os campos
const container = document.querySelector(".container");

const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Eventos
function generationQrCode(){
    
    const qrCodeInputValue = qrCodeInput.value;

    // Se não tiver valor no input
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {

        container.classList.add("active");

        qrCodeBtn.innerHTML = "Código gerado!";
    });
}

qrCodeBtn.addEventListener("click", () => {
    generationQrCode();
});

// Configurando o enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generationQrCode();
    }
});

// Limpando o input
qrCodeInput.addEventListener("keyup", () =>{
    // verifico se existe algo no input
    if(!qrCodeInput.value){
        container.classList.remove("active");

        qrCodeBtn.innerHTML = "Gerar";

    }
});