//========================================================================//

var mysql = require('mysql');
var connection;
//========================================================================//
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    	connection = mysql.createConnection({
		PORT: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	});
};

	connection.connect(function(err){
		if (err) {
			console.log('Error Connecting ' + err.stack);
			return;
		}
		console.log('connected as Id ' + connection.threadId);
	});

	module.exports = connection;