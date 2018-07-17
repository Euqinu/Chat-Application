var socket=io.connect("http://localhost:4000/");


var output=document.getElementById('output');
var handle=document.getElementById('handle');
var message=document.getElementById('message');
var btn=document.getElementById('send');
var feedback=document.getElementById('feedback');

//Event Listener
btn.addEventListener('click',function(){
  socket.emit('chat',{
    message:message.value,
    handle:handle.value
  })
});

message.addEventListener('keypress',()=>{
  socket.emit('typing',handle.value);
});

//Listening to event from the server
socket.on('chat',(data)=>{
  feedback.innerHTML="";
  output.innerHTML +='<p><strong>'+ data.handle +':'+ '</strong>' + data.message + '</p>'
});

socket.on('typing',(data)=>{
  feedback.innerHTML='<p><em>'+data + ' is typing'+'</em></p>'
})
