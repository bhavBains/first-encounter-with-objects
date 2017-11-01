function countLetters(input){
	var noSpaces = input.split(" ").join("").toLowerCase();
	var result = {};

	for (let i in noSpaces){
		var letter = noSpaces[i];
		if (result[letter]){
			result[letter]++;	
		} else 
			result[letter] = 1 ;	
	}
	return result;
}

var show = countLetters('bhavdeepbb');
for (let j in show){
	console.log( j + ' : ' + show[j]);
}