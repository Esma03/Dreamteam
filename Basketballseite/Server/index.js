var jsonObj = require("./generated.json");
var express = require("express");
var app = express();
var index = app.listen(1337, function(){
  console.log('Example app listening');
});
app.use(express.static('websites'));
//Socket Setup//////////////////////////////////////////////////

var socket = require('socket.io');
var io = socket(index);

io.on('connection',function(socket){
  console.log('Socket Verbindung hergestellt', socket.id);


  //auf chat emit reagieren ,, data daten die gesendet werden
  socket.on('chat', function(data){
    //wegen bug gemacht
    console.log('message: ' + data);
    //remote call
    io.sockets.emit('chat', data);
  });
});
/////////////////////////////////////////////////////////////////////////////

app.get('/api/players', function(req, res){
  var fav = req.query.favorites;
 var searchChar = req.query.search;

 var fs = require('fs');
 var data = fs.readFileSync('generated.json');
 var players = JSON.parse(data);

 res.header('Content-Type', 'application/json');

 if (typeof fav !== 'undefined' && fav == 'true') {
   res.send(favorite(players));
 } else if (typeof searchChar !== 'undefined') {
   var buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   if (typeof searchChar !== 'string' || searchChar.length > 1 || buchstaben.indexOf(searchChar.charAt(0)) < 0) {
     res.status(400).send('Wrong input');
   } else {
     console.log(search(players, searchChar).length);
     res.send(search(players, searchChar));
   }
 } else {
   res.send(jsonObj);
 }
});

app.get('/api/players?favorites=true', function(req, res){
res.send(jsonObj);
});

function favorite(players, res) {
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++) {
    if (players[i].favorite == true) {
      if (first) {
        first = false;
      } else {
        json += ',';
      }
      json += JSON.stringify(players[i]);
    }
  }
  json += ']';
  return JSON.parse(json);
}

function search(players, searchChar) {
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++) {
    if (players[i].name.indexOf(searchChar) == 0) {
      if (first) {
        first = false;
      } else {
        json += ',';
      }
      json += JSON.stringify(players[i]);
    }
  }
  json += ']';
  return JSON.parse(json);
}


app.delete('/api/players/:id', function(req, res) {
  var id = req.params._id;
  console.log(id);
  var fs = require('fs');
  var data = fs.readFileSync('generated.json');
  var players = JSON.parse(data);
  var json = '[';
  var first = true;
  for (var i = 0; i < players.length; i++) {
    if (id != players[i].id) {
      if (first) {
        first = false;
      } else {
        json += ',';
      }
      json += JSON.stringify(players[i]);
    }
  }
  json += ']';
  fs.writeFile("generated.json", json);
});

app.post('/api/players', function(req, res) {
  res.header('Content-Type', 'Application/Json');
  var json = '[{"message":"Spieler wurde erfolgreich gespeichert"}]'
  res.send(JSON.parse(json));
});


app.put('/api/players/:id', function(req, res) {
  var id = req.params._id;
  console.log(id);
  res.header('Content-Type', 'Application/Json');
  var json = '[{"message":"Spieler mit der ID ' + id + ' wurde erfolgreich geupdatet"}]'
  res.send(JSON.parse(json));
});
