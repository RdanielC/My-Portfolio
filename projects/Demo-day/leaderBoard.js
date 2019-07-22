function leader(){
 
    let name = document.querySelector('#table').value;
    var seconds = sessionStorage.getItem('seconds');
    var minutes = sessionStorage.getItem('minutes');
    var hours = sessionStorage.getItem('hours');
   let total = hours + " " + minutes + " " + seconds;

  
    localStorage.setItem(name, total);
    console.log(total);
  
}

