if (sessionStorage.getItem('seconds') == null) {
    var seconds = 0;    //localStorage.getItem("counter");
    var minutes = 0;
    var hours = 0;

//define var to hold display values

    var displaySeconds = 0;
    var displayMinutes = 0;
    var displayHours = 0;

//create setInterval func
} else {
    var seconds = Number(sessionStorage.getItem('seconds'));    //localStorage.getItem("counter");
    var minutes = Number(sessionStorage.getItem('minutes'));
    var hours = Number(sessionStorage.getItem('hours'));
    
    //define var to hold display values
    
    var displaySeconds = sessionStorage.getItem('seconds');
    var displayMinutes = sessionStorage.getItem('minutes');
    var displayHours = sessionStorage.getItem('hours');
    // define vars to hold the values

}






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
    Try = 
    function Try() {
        console.log('workign')
        sessionStorage.setItem('seconds', displaySeconds)
        sessionStorage.setItem('minutes', displayMinutes)
        sessionStorage.setItem('hours', displayHours)


    };
document.getElementById('display').innerHTML= displayHours+":"+displayMinutes+":"+displaySeconds;
    
 }
     interval = window.setInterval(stopWatch,1000);

    // function start() {
    //     if(status === 'stopped'){
    //         //start the clock
    //        interval = interval = window.setInterval(stopWatch,1000);
    //         document.getElementById('start').innerHTML = 'Start';
    //         status = 'started';
    //      } //else{
    //     //     window.clearInterval(interval);
    //     //     document.getElementById('start').innerHTML = 'Start'
    //     //     status = 'stopped'
    //     // }
    // }
    
