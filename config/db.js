var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tokens2Bfx'
});

connection.connect(error => {
    if(error) console.log(error);
});

module.exports = connection;