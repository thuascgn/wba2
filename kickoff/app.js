var fs 		= require('fs');
var chalk 	= require('chalk');

fs.readFile('wolkenkratzer.json', function(error, data){
	if (error) throw error;
	
	data = JSON.parse(data.toString());
	
	for(var i in data.wolkenkratzer){
		console.log(data.wolkenkratzer[i].name);
		console.log(data.wolkenkratzer[i].stadt);
		console.log(data.wolkenkratzer[i].hoehe);
		console.log("------");
	}
	
});
