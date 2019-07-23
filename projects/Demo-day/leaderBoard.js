
sessionStorage.setItem('namesPrinted', 0); 
function leader(){
 
    let name = document.querySelector('#table').value;
    var seconds = sessionStorage.getItem('seconds');
    var minutes = sessionStorage.getItem('minutes');
    var hours = sessionStorage.getItem('hours');
   let total = hours + " " + minutes + " " + seconds;

  
    localStorage.setItem(name, total);
    console.log(total);
    for (let i = 0; i < 10; i++) {
        var totalName = sessionStorage.getItem('namesPrinted')
        totalName = Number(totalName) + 1
        sessionStorage.setItem('namesPrinted', totalName)
        if (totalName > 10) {
            break;
        }
        const key = localStorage.key(i)
        if(key == null) {
            break;
        }
        const value = localStorage.getItem(key);
        var item = key + ' ' + value
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        document.getElementById('myOL').appendChild(li);
        


    }
   
 
    
}

document.querySelector('#lastB').onclick = function(){
    sessionStorage.setItem('hours', 0);
    sessionStorage.setItem('minutes', 0);
    sessionStorage.setItem('seconds', 0);

}


