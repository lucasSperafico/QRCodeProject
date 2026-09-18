const qrCode = document.querySelector(".qr-img");
const saveButton = document.querySelector("#save-button");
const copyButton = document.querySelector("#copy-button");
const wppButton = document.querySelector("#whatsapp-button");

function saveQRCode(saveButton) {
    const link = document.createElement("a"); //cria um elemento <a> temporariamente

    link.href = "/qr_img.png"; //direciona para a imagem criada 
    link.download = "qr_code.png" //faz o download com o nome de qr_code.png

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

async function copyQRCode(copyButton) { //utilizando da clipboard API
    try {let qrCode = await fetch('/qr_img.png'); //utiliza o fetch para buscar a imagem no public do svr
        let blob = await qrCode.blob(); //transforma a informação em blob
        
        const data = [new ClipboardItem({ [blob.type]: blob })];
        // cria os dados para passar para o clipboard do usuário e já identifica o tipo de blob usando o [blob.type]: blob que pega a informação salva na variavel blob '/qr_img.png' e utiliza ela como tipo
        await navigator.clipboard.write(data); 
        //passa os dados para o CRTL + C do usuário
        console.log("Copiando QR Code...");

    } catch (erro) {
        console.error("Erro ao copiar:", erro);
    }
}


function sendQRCode(wppButton) {

};

saveButton.addEventListener("click", saveQRCode);
copyButton.addEventListener("click", copyQRCode);
wppButton.addEventListener("click", sendQRCode);