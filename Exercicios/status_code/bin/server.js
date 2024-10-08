const http = require('http') // Importa o módulo HTTP nativo do Node.js.
const app = require('../src/app'); // Importa a aplicação Express criada anteriormente.
// const port = searchPort(process.env.PORT || '3000'); // Define a porta do servidor, com fallback para 3000.
const port = parseInt(process.env.PORT, 10) || 3000; //Segunda forma de fazer sem a funcao search
const server = http.createServer(app) // Cria o servidor HTTP usando o app Express.

server.listen(port) // Inicia o servidor na porta definida.
server.on('listening', onListening); // Liga o evento de listening à função onListening.
console.log(`Api executada na porta: ${port}`) // Exibe a porta em que o servidor está rodando.

function onListening() {
    const addr = server.address(); // Obtém o endereço do servidor.
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port; // Define se o endereço é uma string ou número.
    console.log('Listening on ' + bind); // Mostra um log informando em qual endereço o servidor está ouvindo.
}
