import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser'
import qr from 'qr-image';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public")); //Faz com que o CSS seja adicionado a pagina no express. "Tudo que estiver dentreo de Public pode ser acessado diretamente pelo navegador"
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

function createQRCode(req, res, next) {
  const url = req.body["url-input"];
  const qr_svg = qr.image(url);

  // qr_svg.pipe(fs.createWriteStream('./public/qr_img.png')); //usava pipe() diretamente, mas a página às vezes carregava antes do arquivo terminar de ser criado.

  const file = fs.createWriteStream('./public/qr_img.png'); //Cria um stream para escrever no arquivo

  qr_svg.pipe(file); //Envia os dados (QR Code) para o arquivo

  file.on("finish", () => {
      console.log("QR Code criado!");
      next();
  }); //quando termina o processo lança um console log informando que esta salvo e da o next para o proximo middleware

  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
    });

};

app.post("/generateQR", createQRCode, (req, res) => {

  res.sendFile(__dirname + "/public/QRCodeGenerated.html");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});