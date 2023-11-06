const socket = io()

const notesform = document.querySelector('#notesForm')
const title = document.querySelector("#title")
const description = document.querySelector("#description");

notesform.addEventListener("submit", (e)=>{
    e.preventDefault();
    socket.emit("client:newNote", {
        title: title.value,
        description: description.value
    })

    socket.on('server:notes', (data)=>{
        appendNotes(data);
    })
})

document.addEventListener('DOMContentLoaded', () => {
    socket.on('server:notes', (data) => {
      appendNotes(data);
      console.log(data);
    });
    // Otro código relacionado con el documento
});