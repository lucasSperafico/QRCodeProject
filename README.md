# Node.js - QR Code Project

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404D59.svg?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 🌐 Informações
Projeto desenvolvido durante os estudos de Node.js e desenvolvimento Fullstack.
Esta aplicação full-stack permite que o usuário digite um link, processe os dados via Express.js no backend utilizando o pacote qr-image, gere uma imagem PNG e utilize recursos avançados do front-end (como a Clipboard API) na página de resultados.

---

> [!IMPORTANT]
> **Antes de rodar as aplicações:**
> 1. Instale as dependências executando no terminal:
>    ```bash
>    npm install
>    ```
> 2. Inicialize o projeto com um dos comandos abaixo:
>    ```bash
>    node index.js
>    # ou para reinício automático:
>    nodemon index.js
>    ```
> 3. Após isso abra no seu navegador:
>    ```bash
>    localhost:3000/
>    ```


---

## 📚 Funcionalidades

### 1. Geração Dinâmica:
Converte qualquer URL inserida pelo usuário em um QR Code visual (PNG) no servidor.

### 2. Download do QR Code:
Permite salvar a imagem localmente através de um botão dedicado.

### 3. Cópia Inteligente:
Utiliza a Clipboard API (navigator.clipboard.write), fetch e Blob para injetar a imagem direto no Ctrl + C do usuário.

### 4. Atalho para WhatsApp:
Facilita o compartilhamento da URL gerada.

---

## 🛠️ Tecnologias e Ferramentas

- **Node.js**
- **NPM** (nodemon, body-parser, qr-image)
- **Express.js**
- **JavaScript**
- **HTML5 & CSS3**
- **Postman**
