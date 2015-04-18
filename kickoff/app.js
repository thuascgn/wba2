var fs 		= require('fs');
var chalk 	= require('chalk');

fs.readFile('wolkenkratzer.json', function(error, data){
	if (error) throw error;
	
	data = JSON.parse(data.toString());
	
	for(var i in data.wolkenkratzer){
		console.log(chalk.green(data.wolkenkratzer[i].name));
		console.log(chalk.green(data.wolkenkratzer[i].stadt));
		console.log(chalk.green(data.wolkenkratzer[i].hoehe));
		console.log("------");
	}
	
});
