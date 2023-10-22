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
})