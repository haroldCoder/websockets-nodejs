import express from "express";
import path from "path";
import {Server as websocketserver} from "socket.io";
import http from "http";
import Notes from "./Notes";
import {v4} from "uuid"
import {connect} from "./connection/connection"
import Notesql from "./Notesql";

const app = express();
const Server = http.createServer(app)
const io = new websocketserver(Server)


app.use(express.static(path.join(__dirname, "public")));

io.on('connection', async(socket)=>{
    console.log('conect socket: ', socket.id);
    socket.emit("ping")
    const notes = await new Notesql().getNotes();
    console.log(notes);
    socket.emit('server:notes', notes)

    socket.on('client:newNote', (data)=>{
        new Notesql().addNote(data.title, data.description);
        socket.emit('server:notes', notes)
    })
})
Server.listen(1000, ()=>{
    console.log(`server on port 1000`);
    connect;
    
})