const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'us-west.connect.psdb.cloud',
    database: "minigames",
    user:"swtgxlp1qjwga3pskmr0",
    password:"pscale_pw_W2Hxq6EctEfvhLCpSCPvpVrMtZq99TcjYr177P8414T",
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = connection
