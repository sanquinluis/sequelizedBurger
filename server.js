//requiring express mysql and method-override.
//Here is where you set up your server file. Express middleware.
//Dependencies
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var express = require("express");



//Configurations 
var app = express();
app.set('port', (process.env.PORT || 3001));

//server static content for the app from the "public" directory in the application directory.

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
		extended: false
}));

//override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//Handelbar engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


//PORT Listener
app.listen(app.get('port'),function() {
	console.log("App is listening on PORT: " + app.get('port'));
});





