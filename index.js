'use strict';
const Alexa = require('alexa-sdk');

exports.handler = (event, context, callback) => {
	console.log(`event: ${event}`);
	console.log(`context: ${context}`);
	console.log(`callback: ${callback}`);
	var alexa = Alexa.handler(event, context, callback);
	alexa.dynamoDBTableName = "jarvis-vars";
	alexa.registerHandlers(handlers);
	alexa.execute();
};

const handlers = {
	'LaunchRequest': function() {
		this.emit(':tell', "Go fuck yourself");
	},
	'Mimic': function() {
		this.emit(':tell', "Lick my balls");
	}
};