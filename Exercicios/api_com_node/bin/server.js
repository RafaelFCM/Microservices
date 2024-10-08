const http = require('http') // Importa o módulo HTTP nativo do Node.js.
const debug = require('debug')('nodestr:server') // Configura debug para logs.
const app = require('../src/app'); // Importa a aplicação Express criada anteriormente.
const port = searchPort(process.env.PORT || '3000'); // Define a porta do servidor, com fallback para 3000.
const server = http.createServer(app) // Cria o servidor HTTP usando o app Express.

server.listen(port) // Inicia o servidor na porta definida.
// server.on('error', onError); // Liga o evento de erro à função onError.
server.on('listening', onListening); // Liga o evento de listening à função onListening.
console.log(`Api executada na porta: ${port}`) // Exibe a porta em que o servidor está rodando.

function searchPort(val) { //Usada para garantir que a porta está configurada corretamente.
    const port = parseInt(val, 10) // Converte o valor para um número inteiro.

    if (isNaN(port)) return val; // Se não for um número, retorna o valor original.

    if (port >= 0) return port; // Se for um número válido, retorna o número.

    return false; // Caso contrário, retorna false.
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error; // Verifica se o erro está relacionado à tentativa de iniciar o servidor.
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port; // Define se a porta é uma string ou número.

    // Lida com erros comuns ao tentar iniciar o servidor.
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges'); // Erro de permissao.
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use'); // Erro de porta ja em uso.
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address(); // Obtém o endereço do servidor.
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port; // Define se o endereço é uma string ou número.
    debug('Listening on ' + bind); // Mostra um log informando em qual endereço o servidor está ouvindo.
}
