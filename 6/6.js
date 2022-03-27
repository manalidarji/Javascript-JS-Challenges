// In this challenge, you'll create a ticking clock in the document body. 
// The index.html file contains a div with an ID of clock. 
// Using callback functions and DOM manipulation, output a ticking digital clock which displays the current hours, minutes, and seconds


const clockNode = document.getElementById('clock');

const setCurrentTime = () => {
    let date = new Date();
    clockNode.innerHTML = date.toLocaleTimeString();
}

setCurrentTime();
setInterval(setCurrentTime, 1000);