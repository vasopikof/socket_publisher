const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function onConnection(socket){
	//for API list
}

io.on('connection', onConnection);
var nsp = io.of('/global');
nsp.on('connection', function(socket){
  socket.on('boardcastData',function(user,data){
  	console.log(data);
  	io.of('/global').emit('got Broadcast', user,data);
  });
  socket.on('sendData',function(user,data){
  	console.log(data);
  	io.of('/global').emit('got Broadcast', user,data);
  });
});

http.listen(port, () => console.log('listening on port ' + port));