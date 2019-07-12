var audio = new Audio('Sadness.mp3');
      audio.play(); 
    //   audio.load();
    

let index = 0;
var pics = ['https://markmanson.net/wp-content/uploads/2013/11/keep-calm-and-admit-you-re-wrong-6.png', 'https://media1.tenor.com/images/4ba9099e6d484f34ddfc0325d6736aaf/tenor.gif?itemid=10631811']

document.querySelector('#change').onclick = function () {
  var picChange = document.querySelector('#imgChange');
  if (index == 1){
    index = 0 ;
    picChange.src = pics[index];
  }
  else {
    index++;
    picChange.src = pics[index];
  } 
  
}








// Unworking Code
// let position = 0;
// var pics = ['https://media1.tenor.com/images/c5ee754e6f0f4f31ad65784ef2ab8e09/tenor.gif?itemid=5896479', 'https://markmanson.net/wp-content/uploads/2013/11/keep-calm-and-admit-you-re-wrong-6.png']

// document.querySelector('#change').onclick = function () {
//   var Change = document.querySelector('#img-change');
//   if (position == 1){
//     position = 0 ;
//     Change.src = pics[position];
//     console.log(position)
   
//   }
//   else {
//     position++;
//     Change.src = pics[position];
//     console.log(position)
    
//   } 
  
// }


//test
// index[1].onclick = function () {
//   window.location.href = 'index.html';
// }