var fs 		= require('fs');
var chalk 	= require('chalk');
var filename = 'wolkenkratzer.json';

fs.readFile('wolkenkratzer.json', function(read_error, data){
	if (read_error) throw read_error;

	data = JSON.parse(data.toString());
	
	//console.log(data.wolkenkratzer);
	//mischen von wolkenkratzer.json
	data.wolkenkratzer.sort(function(a,b){ 
		var r = Math.random();
		if (r>0.5) { 
			return a.hoehe-b.hoehe;
		} else {
			return b.hoehe-a.hoehe; 
		}
	});

	//console.log(data.wolkenkratzer);
	//sort aufsteigend
	data.wolkenkratzer.sort(function(a,b){ return a.hoehe-b.hoehe });
	//console.log('\n ---- \n');
	//console.log(data.wolkenkratzer);

	fs.writeFile('wolkenkratzer_sorted.json',JSON.stringify(data, null,1), function(write_error){
		if (write_error) throw write_error;
		//console.log('sortierte Liste gespeichert \n');
		//@todo ueber kv, generisch machen
		for(var i in data.wolkenkratzer){
			console.log(chalk.green(data.wolkenkratzer[i].name));
			console.log(chalk.green(data.wolkenkratzer[i].stadt));
			console.log(chalk.green(data.wolkenkratzer[i].hoehe));
			console.log("------");
		}
	});
});
