'use strict'
const express = require('express')
const router = new express.Router() // Cria um roteador do Express.

//endpoint 
router.get('/', (req, res, next) => { // Define a rota GET na raiz ('/')
    res.status(200).send({ // Envia uma resposta com o status 200 (sucesso).
        "nome": "Rafael Fiel" // Informações simples da API.
    });
});




//sempre por ultimo
module.exports = router; // Exporta o roteador para ser utilizado em outros arquivos.
