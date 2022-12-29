const mysql = require('mysql');

/* definidando as variaveis que contem os dados de conexão */
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

console.log(connection + '***************');
/* fazendo a conexão */
connection.connect((error) => {
    if(!error){
        console.log(`Conectado no role:  ${process.env.DB_NAME}`)
    }else {
        console.log('********' + error + '******** deu ruim')
    };
    
});

module.exports = connection;