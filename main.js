const fs = require('fs');
const stopwords = require('stopwords-fa'); // array of stopwords
const removePuncs = require('remove-punctuation');
const args = process.argv.slice(2);

if (args.length != 2) {
	console.log("Usage: npm start inputFile outputFile");
}
else {
	str = fs.readFileSync(args[0], "utf8");
	//console.log(str);
	console.log(removePuncs(str));
	//str = str.replace(/[^\w\s]|_/g, "")
    //     .replace(/\s+/g, " ");
	str = removePuncs(str);
	originalWords = str.split(" ");
	
	finalWords = originalWords.filter(word => !stopwords.includes(word));
	fs.writeFileSync(args[1], finalWords.join(' '));
	console.log('Succesful!');
}
