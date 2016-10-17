Using Sequelize to manage data


var express = require('express');
var router = express.Router();
//changeing the burger model for sequelize
var burgers = require('../models')['Burger'];
var Customer = require('../models')['Customer'];

//first route to INDEX
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

//get route to match the sequelize
router.get('/burgers', function (req, res) {
	burgers.findAll({include:{model: Customer}})
	//using promise to pass data
	.then(function(burger_data){
		//in the main INDEX, updating the page
		return res.render('index', {burger_data})
	})

});

//posting route to create data
router.post('/burgers/create', function (req, res) {
	//you can create (add) a burger name
	burgers.create({burger_name: req.body.burger_name})
	//pass the result
	.then(function(newBurger){
		console.log(newBurger);
		//redirect the HTTP
		res.redirect('/');
	})
	});

//put route to devour a burger
router.put('burgers/update', function(req, res){
	//Updating the data
	Customer.create({customer: req.body.customer})
	.then(function(theCustomer){
		return burgers.findOne({where::{id: req.body.burger_id}})
		.then(function(theBurger){
			return theBurger.setCustomer(theCustomer)
			.then(function(){
				return theBurger.updateAttributes({devoured: true})			
				.then(function(){
					//redirect to '/''
					return res.redirect('/');
				})
			})
		})
	})
})


module.exports = router;


