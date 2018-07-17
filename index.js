var express=require('express');
var socket=require('socket.io');
var app=express();


app.use(express.static('public'));


var server=app.listen(4000,function(req,res){
  console.log("listening to port 4000");
});

var io=socket(server);

io.on('connection',(socket)=>{
  console.log('made socket connection');

//listening to event in server
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });

  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
  })
});
