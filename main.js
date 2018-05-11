const fs = require('fs');
const stopwords = require('stopwords-fa'); // array of stopwords
const stopwords2 = fs.readFileSync('stopwords', 'utf8');
const removePuncs = require('remove-punctuation');
const args = process.argv.slice(2);

if (args.length != 2) {
	console.log("Usage: npm start inputFile outputFile");
}
else {
	str = fs.readFileSync(args[0], "utf8");
	str = removePuncs(str);
	originalWords = str.split(" ");
	
	finalWords = originalWords.filter(word => {
		//console.log(word);
		//console.log((!stopwords.includes(word) && !stopwords2.includes(word))? true: false);
		return (!stopwords.includes(word) && !stopwords2.includes(word))? true: false;
	});
	fs.writeFileSync(args[1], finalWords.join(' '));
	console.log('Succesful!');
}
