function* getStops(){
	yield 'Poughkeepsie';
	yield 'Newburgh';
	yield 'Peekskill';
	yield 'Yonkers';
	yield 'Bronx';
	yield 'Grand Central';
}

let trainStops = getStops();

let nextStop = document.getElementById('next-stop');
let nextStopBtn = document.getElementById('next-stop-btn');

nextStopBtn.addEventListener('click', () => {
	let currStop = trainStops.next();
	if(currStop.done){
		nextStop.innerHTML += '<br/>We made it! ';
		nextStopBtn.setAttribute('disabled', '');
	}else{
		nextStop.innerHTML += '<br/>' + currStop.value;
	}
})