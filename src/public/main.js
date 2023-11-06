const socket = io()

const notesform = document.querySelector('#notesForm')
const name = document.querySelector("#name")
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const fecha = document.querySelector("#fecha");
const telefono = document.querySelector("#telefono")
const direccion = document.querySelector("#direccion");

notesform.addEventListener("submit", (e)=>{
    e.preventDefault();
    socket.emit("client:newClient", {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        Fecha: fecha.value,
        Telefono: telefono.value,
        direccion: direccion.value
    })

    socket.on('server:client', (data)=>{
        appendNotes(data);
    })
})

document.addEventListener('DOMContentLoaded', () => {
    socket.on('server:client', (data) => {
      appendNotes(data);
      console.log(data);
    });
  
    // Otro código relacionado con el documento
});