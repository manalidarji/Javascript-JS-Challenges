const foodTruckFestival = (menus) => {
	let allMenu = menus.flat();
	allMenu = new Set(allMenu);
	
	let ulNode = document.getElementById('combined-menu');
	
	allMenu.forEach( (menuItem) => {
		let liNode = document.createElement('li');
		liNode.innerHTML = menuItem;
		ulNode.appendChild(liNode);
	})
}

let allMeuu = [
	['pasta', 'pizza'],
	['calzones', 'pizza'],
	['lobster', 'chesscake'],
	['oyster', 'calzones']
];

foodTruckFestival(allMeuu);