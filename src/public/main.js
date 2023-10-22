const socket = io()

socket.on('ping', ()=>{
    console.log('listening');
    socket.emit("pong")
})