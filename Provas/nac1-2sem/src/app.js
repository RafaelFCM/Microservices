const express = require('express');
const app = express();
const productRouter = require('./routes/product-route')


app.use(express.json());
//Converte o corpo da requisição para JSON, permitindo que o servidor entenda e manipule dados enviados em formato JSON.

app.use(express.urlencoded({ extended: true }));
//Permite que a API aceite requisições de formulários HTML.

//Configurando a conexão
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase');


// Habilita o CORS (Cross-Origin Resource Sharing) que é uma política de segurança do navegador.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite acesso de qualquer origem/domínio.
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Define métodos HTTP permitidos.
    next(); // Passa para o próximo middleware.
});

//registar as models
require('./models/product')

//criar rotas
// const index = require('./routes/index')
// app.use('/', index)


app.use('/products', productRouter)

module.exports = app;