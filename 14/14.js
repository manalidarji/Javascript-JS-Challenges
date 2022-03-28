// -all punctuation must be removed
// -all letters must be lowercase
// -all spaces must be joined by hyphens. 
const URLify = (blogName) => {
	const punctuation = /[!@#$%^&*()_+?.,/;:'"]/g;
	let URL = blogName.replace(punctuation, '');
	return URL.toLowerCase().trim().replace(/ /g, '-');
}

console.log(URLify('This will be the URL of MY BLOG POST'));
console.log(URLify('wOaH then let\'s DO it!'));