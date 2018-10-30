var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database:'burgers_db'
	});
}

connection.connect(err => {
    if (err) throw err;
    console.log("MySQL is connected!")
})

module.exports = connection;
