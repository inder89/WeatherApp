const http = require('http');
const api = require('./api.json');

function printWeather(weather) {
	const message = `Current temperature in ${weather.name} is ${weather.main.temp} C`;
	console.log(message);
	

}

function get(query) {
		const request =  http.get(`http://api.openweathermap.org/data/2.5/weather?id=${query}&units=metric&appid=${api.key}`, response => {
				let body = '';
				//Read the line
				response.on('data', chunk => {
					body += chunk;
				});
				response.on('end', () => {
					const weather = JSON.parse(body);
					printWeather(weather);
				});
		   // console.log(response.statusCode);

	  });

}

module.exports.get = get;

//getWeather();
