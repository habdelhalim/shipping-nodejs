var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'ship',
    password: 'ship',
    database: 'ship_db'
});

function executeQuery(query, params, callback) {
    pool.query(query, params, callback)
}

module.exports = {connection: pool, query: executeQuery}
