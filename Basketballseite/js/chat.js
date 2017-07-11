//WEBSOCKET verbindung herstellen
var senden = document.getElementById('senden');
var socket = io.connect('http://localhost:1337');


//HTML ELEMENTE 
var message = document.getElementById('message');
var senden = document.getElementById('senden');
var chatAnzeige = document.getElementById('chatAnzeige');

console.log(senden);


var text = prompt('Sie haben den Chat betreten, bitte gib deinen Namen ein', 'Username');
chatAnzeige.innerHTML += '<p>' + 'Wilkommen im Chat' + ' ' + text + '</p>';
console.log(text);

//Daten senden
senden.addEventListener('click', function(){

	socket.emit('chat', {
		message: message.value,
		chatName: text,
	});
  message.value = '';
});



//Frontend 
socket.on('chat', function(data){
	chatAnzeige.innerHTML += '<p>' + data.chatName + ': ' + data.message + '</p>';
});
