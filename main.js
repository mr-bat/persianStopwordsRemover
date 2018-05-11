import {readFileSync, writeFileSync} from fs;
const stopwords = require('stopwords-fa'); // array of stopwords
const args = process.argv.slice(2);

if (args.length != 2) {
	console.log("Usage: npm start inputFile outputFile");
}
else {
	str = readFileSync(args[0]);
	str = str.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
	originalWords = str.split(" ");
	
	finalWords = originalWords.filter(word => !stopwords.includes(word));
	writeFileSync(args[1], finalWords.join(' '));
	console.log('Succesful!');
}
