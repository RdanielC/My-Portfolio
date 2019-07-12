window.onload = function() {


const input = document.getElementById('inputKey')
const inputValue = document.getElementById('inputValue')
const output = document.getElementById('output')

document.querySelector('#button').onclick = function(){
    console.log('click')
    const key = input.value;
    const value = inputValue.value

    localStorage.setItem(key, value)
    location.reload()


    }

    // for (let i=0; i < localStorage.length; i++){
        const key = localStorage.key();
        const value = localStorage.getItem(key);
        console.log(key)
        output.innerHTML = key + ': ' + value

    // }


}