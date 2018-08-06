var application = require('./config/server.js');
var porta = 3003;

var server = application.listen(porta, () => {

    console.log(`Gerador de Tokens 2.0.0 - :${porta}`);
})