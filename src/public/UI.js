const notesList = document.querySelector("#notes");

const appendNotes = (notes) =>{
    console.log(notes);
    notesList.innerHTML = ``;
    notes.map((nts)=>{
       notesList.innerHTML += 
        `
            <div class="card card-body bg-secondary my-3">
                <div>
                    <h1>${nts.title}</h1>
                </div>
                <div>
                    <p>${nts.description}</p>
                </div>
            </div>
        `; 
    })
    
}