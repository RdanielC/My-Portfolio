

sessionStorage.setItem('namesPrinted', 0); 
function leader(){

 
    let name = document.querySelector('#table').value;
    var seconds = sessionStorage.getItem('seconds');
    var minutes = sessionStorage.getItem('minutes');
    var hours = sessionStorage.getItem('hours');
   let total = hours + ":" + minutes + ":" + seconds;

  
    localStorage.setItem(name, total);
    // console.log(total);
    
    var numberList = []; //list of points

    var nameList = []; //all players names

    var origin = []; //copy of local storage

    for(let i=0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var point = value.split(":");
    seconds = Number(point[2])
    minutes = Number(point[1])
    hours = Number(point[0])

    hours = hours * 3600
    minutes = minutes * 60
 
    
    value = hours + minutes + seconds;

    numberList[numberList.length] = value;
    nameList[nameList.length] = key;
    origin[origin.length] = key + ' ' + value;
// console.log(value)
}
// console.log(numberList)
// console.log(nameList)
// console.log(origin)
 //sorted leaderboard
numberList.sort((a, b) => a - b);
let finalList = []
for (let i = 0; i < localStorage.length; i++) {
    for (x in numberList) {
        var check = nameList[x] + ' ' + numberList[i] 
        for (let z = 0; z < origin.length; z++) {
            let newOrigin = origin[z]
            if (check == newOrigin) {
                // var key = localStorage.key(i);
                // var value = localStorage.getItem(key);
                var finalMinutes = 0;
                var finalSeconds = 0;
                var finalHours = 0;
                var value1 = numberList[i];
    

            if (value1 <= 60) {
                finalMinutes = Math.floor(value1 / 60)

            } else if (value1 <= 3600){
                finalHours = Math.floor(value1 / 3600)
            }
            finalHours = Math.floor(finalSeconds / 3600)
            finalSeconds = value1 % 3600
            finalMinutes = Math.floor(finalSeconds / 60)
            finalSeconds = value1 % 60
            var value1 = finalHours + ':' + finalMinutes + ':' + finalSeconds
            
            origin.splice(z, 1)
            
            var test = nameList[x] + " " + value1;
            finalList[finalList.length] = test
            
            
            console.log(finalList);
            // finalList.appendChild(test);
                // console.log('match')
                // finalList.appendChild(check);

                
            }
        }

    }

}
   
// var test = numberList[x] + value1;
for (let i = 0; i < 10; i++) {

    var listLength = document.getElementsByTagName("li").length;
    console.log(listLength)
    if (listLength == 10) {
        break;
    }
    var value2 = finalList[i]
    if(value2 == null ){
        break;
       
    } 
    
    
    var li = document.createElement("li");
    var text = document.createTextNode(value2);
    li.appendChild(text);

    document.getElementById('myOL').appendChild(li);
    // document.getElementById('myOL').appendChild(test);
    }

document.querySelector('#lastB').onclick = function(){
    sessionStorage.setItem('hours', 0);
    sessionStorage.setItem('minutes', 0);
    sessionStorage.setItem('seconds', 0);

}


}

