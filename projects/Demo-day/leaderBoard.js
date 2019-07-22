function leader(){
 
    let name = document.querySelector('#table').value;
    var seconds = sessionStorage.getItem('seconds');
    var minutes = sessionStorage.getItem('minutes');
    var hours = sessionStorage.getItem('hours');
   let total = hours + " " + minutes + " " + seconds;

  
    localStorage.setItem(name, total);
    console.log(total);
    for (let i = 0; i < localStorage.length; i++) {

       
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
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


