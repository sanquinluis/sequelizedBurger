//========================================================================//

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burger_db'
})
//========================================================================//


	connection.connect(function(err){
		if (err) {
			console.log('Error Connecting ' + err.stack);
			return;
		}
		console.log('connected as Id ' + connection.threadId);
	});

	module.exports = connection;