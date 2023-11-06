import express from "express";
import path from "path";
import {Server as websocketserver} from "socket.io";
import http from "http";
import Notes from "./Clients";
import {v4} from "uuid"
import {connect} from "./connection/connection"
import Clientsql from "./Clientsql";

const app = express();
const Server = http.createServer(app)
const io = new websocketserver(Server)


app.use(express.static(path.join(__dirname, "public")));

io.on('connection', async(socket)=>{
    console.log('conect socket: ', socket.id);
    socket.emit("ping")
    const clients = await new Clientsql().getClientes();
    console.log(clients);
    socket.emit('server:client', clients)

    socket.on('client:newClient', (data)=>{
        new Clientsql().addClientes(data.apellido, data.direccion, data.email, data.Fecha, data.nombre, data.Telefono);
        socket.emit('server:client', clients)
    })
})
Server.listen(1000, ()=>{
    console.log(`server on port 1000`);
    connect;
    
})