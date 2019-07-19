


// define vars to hold the values
let seconds = 0;    //localStorage.getItem("counter");
let minutes = 0;
let hours = 0;

//define var to hold display values

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
//create setInterval func


//clock status

//stop watch func, logic
function stopWatch() {
   
    seconds ++;
   // localStorage.setItem("counter",seconds);
    //logic to increment values

    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }
    //adding leading 0
    if (seconds < 10){
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10){
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10){
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    document.querySelector('.watch').onclick = function() {
        sessionStorage.setItem('seconds', displaySeconds)
        sessionStorage.setItem('minutes', displayMinutes)
        sessionStorage.setItem('hours', displayHours)


    }
document.getElementById('display').innerHTML= displayHours+":"+displayMinutes+":"+displaySeconds;
    
 }
    interval = window.setInterval(stopWatch,1000);





// function start() {
//     if(status === 'stopped'){
//         //start the clock
       
//         document.getElementById('start').innerHTML = 'Start';
//         status = 'started';
//     } else{
//         window.clearInterval(interval);
//         document.getElementById('start').innerHTML = 'Start'
//         status = 'stopped'
//     }
// }



