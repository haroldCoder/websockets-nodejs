import express from "express";
import path from "path";
import {Server as websocketserver} from "socket.io";
import http from "http";
import Notes from "./Notes";
import {v4} from "uuid"

const app = express();
const Server = http.createServer(app)
const io = new websocketserver(Server)

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket)=>{
    console.log('conect socket: ', socket.id);
    socket.emit("ping")
    const notes: Array<Notes> = new Array<Notes>();

    socket.on('client:newNote', (data)=>{
        notes.push(new Notes(data.title, data.description));
        console.log(notes);

        socket.emit('server:notes', notes)
    })
})

Server.listen(1000, ()=>{
    console.log(`server on port 1000`);
    
})