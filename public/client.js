var socket = io();

var dialogue = document.getElementById('dialogue');
var box = document.getElementById('angle');

socket.on('connect', function(){
	dialogue.innerHTML = "Socket Connected";
});

socket.on('data', function (data) {
  switch(data) {
      case 'light':
          document.body.style.backgroundColor = 'white';
          console.log('white')
          break;
      case 'shade':
          document.body.style.backgroundColor = 'black';
          console.log('black');
          break;
      default:
          box.innerHTML = data;
	        angle = data;
  }
});
