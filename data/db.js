// Import mysql2 
const mysql = require('mysql2');

// creiamo l'oggetto per la connessione
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog_db"
});

// Creiamo la connessione
connection.connect((err) => {
    if (err) throw err;
    console.log("Connesso al MYSQL!");
});

// Export
module.exports = connection;