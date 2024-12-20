'use strict'

const express = require('express')
const router = new express.Router();
// Cria um roteador do Express.

//ENDPOINTS, cada um desses abaixo é um, e dependendo do conteudo que colcoar depois da / aparece lá no postman
router.get('/', (req, res, next) => { // Define a rota GET na raiz ('/')
    res.status(200).send({ // Envia uma resposta com o status 200 (sucesso).
        "nome": "Rafael Fiel" // Informações simples da API.
    });
});

// Obtendo o token do header Authorization
//401 Unauthorized
router.get('/private', (req, res) => {
    // Obtendo o token do header Authorization
    const token = req.headers['authorization'];

    // Verificando se o token foi enviado e se é válido
    if (!token || token !== 'token1234') {
        // Retornando o status 401 Unauthorized se o token estiver ausente ou inválido
        return res.status(401).send('Unauthorized: token inválido');
    }

    // Se o token for válido, continuar com a requisição
    res.send('Area privada permitida!').sendStatus(200);
});

const tokensDatabase = {
    'tokenRH': { role: 'rh' },
    'tokenVendas': { role: 'vendas' },
    'tokenContabilidade': { role: 'contabilidade' },
    'tokenTI': { role: 'ti' },
    'tokenDonos': { role: 'donos' },
};

//Exemplo Forbidden 403
router.get('/donos', (req, res) => {
    // Obtendo o token do header Authorization
    const token = req.headers['authorization'];

    // Verificando se o token foi enviado
    if (!token) {
        return res.status(401).send('Unauthorized: token não fornecido');
    }

    const user = tokensDatabase[token];
    if (!user) {
        return res.status(401).send('Unauthorized: token inválido');
    }

    // Verificando se o usuário tem acesso ao recurso administrativo
    if (user.role !== 'donos') {
        return res.status(403).send('Forbidden: você não tem permissão para acessar esta área');
    }

    res.send('Bem-vindo dono!');
});


//Exemplo bad request 400
router.post('/submit', (req, res) => {
    const { username, email } = req.body;

    // Verificando se os campos obrigatórios estão presentes
    if (!username || !email) {
        return res.status(400).send('Favor preencher todos os campos: username e email.');
    }

    // Simulando verificação de email válido 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('Bad Request: Formato do email inválido');
    }

    // Se tudo estiver certo, continuar com o processamento
    res.send('Dados enviados com sucesso').status(202);
});

// Objeto para rastrear as requisições de cada IP
const requestCounts = {};
const RATE_LIMIT = 5; // Limite de requisições permitido
const TIME_WINDOW = 60 * 1000; // Tempo da janela em milissegundos (1 minuto)

// Middleware para rate limiting
//Definição: Middleware é uma função em um aplicativo Express (ou outros frameworks) 
//que processa requisições antes que elas cheguem à rota final ou resposta.

router.use((req, res, next) => {
    const ip = req.ip;
    //console.log(ip)
    if (!requestCounts[ip]) {
        requestCounts[ip] = { count: 1, firstRequest: Date.now() };
    } else {
        requestCounts[ip].count++;
    }

    const currentTime = Date.now();
    const timePassed = currentTime - requestCounts[ip].firstRequest;

    if (timePassed < TIME_WINDOW && requestCounts[ip].count > RATE_LIMIT) {
        return res.status(429).send('Muitas requisições: Por favor, tente novamente mais tarde.');
    }

    if (timePassed >= TIME_WINDOW) {
        requestCounts[ip].count = 1;
        requestCounts[ip].firstRequest = Date.now();
    }

    next();
});

// Rota de exemplo com rate limiting
router.get('/data', (req, res) => {
    res.send('Aqui estão seus dados!');
})

//Exemplo de erro 404 not found
//Documentação: https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4

let items = [
    { id: 0, name: 'Rafael', area: 'Dono' },
    { id: 1, name: 'Luca', area: 'RH' },
    { id: 2, name: 'Pedro', area: 'Contabilidade' },
    { id: 2, name: 'José', area: 'TI' },
];

router.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);

    // Verificando se o itemId é um número válido
    if (isNaN(itemId)) {
        return res.status(400).send('Bad Request: Formato do ID inválido');
    }
    const item = items.find(item => item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        // Se o item não existir, retornando 404 Not Found
        res.status(404).send('Funcionário não foi encontrado');
    }
});

//O status code 204 (No Content) é usado para indicar que a requisição foi processada com sucesso,
//mas não há conteúdo a ser retornado na resposta
router.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const newName = req.body.name;

    // Verificando se o itemId é um número válido
    if (isNaN(itemId)) {
        return res.status(400).send('Bad Request: Formato do ID inválido');
    }

    // Buscando o índice do item no array
    const itemIndex = items.findIndex(item => item.id === itemId);

    // Verificando se o item existe
    if (itemIndex !== -1) {
        // Atualizando o item
        items[itemIndex].name = newName;
        // Retornando status 204 No Content
        return res.status(204).send();
    } else {
        // Se o item não existir, retornando 404 Not Found
        return res.status(404).send('Funcionário não foi encontrado');
    }
});

//outro exemplo de 204 - no content
router.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);

    // Verificando se o itemId é um número válido
    if (isNaN(itemId)) {
        return res.status(400).send('Bad Request: Formato do ID inválido');
    }

    // Buscando o índice do item no array
    const itemIndex = items.findIndex(item => item.id === itemId);

    // Verificando se o item existe
    if (itemIndex !== -1) {
        // Removendo o item
        items.splice(itemIndex, 1);
        // Retornando status 204 No Content
        return res.status(204).send();
    } else {
        // Se o item não existir, retornando 404 Not Found
        return res.status(404).send('Funcionário não foi encontrado');
    }
});

//Exemplo status 200
let nextId = 3;

// Rota para criar um novo item
//O status code 201 (Created) é usado para indicar que a requisição foi bem-sucedida 
//e que um novo recurso foi criado no servidor como resultado
router.post('/items', (req, res) => {
    const { name } = req.body;

    // Verificando se o nome foi fornecido
    if (!name) {
        return res.status(400).send('Bad Request: Precisa fornecer um nome');
    }

    // Criando um novo item
    const newItem = { id: nextId++, name };

    // Adicionando o novo item ao "banco de dados"
    items.push(newItem);

    // Retornando status 201 Created com o novo item
    return res.status(201).json(newItem);
});

// Simulando uma fila de processamento
const processingQueue = [];

// Rota para aceitar uma nova requisição de processamento
router.post('/envio-whatsapp', (req, res) => {
    const { data } = req.body;

    // Verificando se os dados foram fornecidos
    if (!data) {
        return res.status(400).send('Bad Request: Fornecer os dados para processamento');
    }

    // Simulando a aceitação da requisição para processamento futuro
    const requestId = Date.now();
    processingQueue.push({ requestId, data });

    // Retornando status 202 Accepted com o ID da requisição
    return res.status(202).json({ requestId, message: 'Requisição aceita pra processamento' });
});

// Rota para obter o status de uma requisição de processamento
router.get('/envio-whatsapp/:requestId', (req, res) => {
    const requestId = parseInt(req.params.requestId, 10);

    // Verificando se o requestId é um número válido
    if (isNaN(requestId)) {
        return res.status(400).send('Bad Request: Requisição inválida formato ID');
    }

    // Buscando a requisição na fila de processamento
    const request = processingQueue.find(req => req.requestId === requestId);

    if (request) {
        // Se a requisição existir, retornar o status 200 OK com os dados da requisição
        return res.status(200).json(request);
    } else {
        // Se a requisição não existir, retornar o status 404 Not Found
        return res.status(404).send('Requisição não encontrada');
    }
});

//sempre o ultimo codigo, exporta o roteador para ser utilizado em outros arquivos.
module.exports = router;