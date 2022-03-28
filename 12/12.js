const numPermutations = (word) => {
	let num = word.length;
	if(num < 1) return 1;
	return num * numPermutations(word.slice(1));
}

console.log(numPermutations('hello'));