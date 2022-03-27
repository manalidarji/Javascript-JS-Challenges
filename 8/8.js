const changeColor = (color) => {
	return function() {
		document.body.style.background = color;
	}
}

const changeColorToBlue = changeColor('#32a1d5');
const changeColorToPink = changeColor('#ffc0cb');
const changeColorToGreen = changeColor('#88ff88');

document.getElementById('blue').addEventListener('click', changeColorToBlue);
document.getElementById('pink').addEventListener('click', changeColorToPink);
document.getElementById('green').addEventListener('click', changeColorToGreen);