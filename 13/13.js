const getDataFromAPI = async(apiURL) => {
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		const ulNode = document.getElementById('users-ul');
		ulNode.innerHTML = '';

		data.results.forEach(user => {
			const liNode = `<li>
				<img src="${user.picture.medium}" />
			</li>`;
			ulNode.innerHTML += liNode;
		});
	} catch (error) {
		console.log(error);
	}
}

getDataFromAPI('https://randomuser.me/api?results=5');