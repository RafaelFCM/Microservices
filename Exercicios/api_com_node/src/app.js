const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoConnectionString = 'mongodb+srv://usuarioTeste:senhaTeste@cluster0.erxtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.use(express.json());
//Converte o corpo da requisição para JSON, permitindo que o servidor entenda e manipule dados enviados em formato JSON.

app.use(express.urlencoded({ extended: true }));
//Permite que a API aceite requisições de formulários HTML.

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
const productRoute = require('./routes/product-route')
const index = require('./routes/index') // Importa as rotas criadas no arquivo index.js



app.use('/', index) // Associa a rota raiz '/' ao arquivo de rotas.
app.use('/products', productRoute)

module.exports = app; // Exporta o app para ser usado em outros arquivos.

// //insira a conexao
// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://02rafamiranda:1234@cluster0.nz5ym.mongodb.net/myDatabase?retryWrites=true&w=majority')
//     .then(() => console.log('Conectado ao MongoDB com sucesso!'))
//     .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
