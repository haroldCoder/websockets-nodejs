const clientsList = document.querySelector("#clients");

const appendNotes = (clients) =>{
    console.log(clients);
    clientsList.innerHTML = ``;
    clients.map((nts)=>{
       clientsList.innerHTML += 
        `
            <div class="card card-body bg-secondary my-3">
                <div>
                    <h1>${nts.Nombre}</h1>
                </div>
                <div>
                    <p>${nts.Apellido}</p>
                </div>
                <div>
                    <h1>${nts.Email}</h1>
                </div>
                <div>
                    <h1>${nts.Direccion}</h1>
                </div>
                <div>
                    <h1>${nts.FechaVenc}</h1>
                </div>
                <div>
                    <h1>${nts.Telefono}</h1>
                </div>
            </div>
        `; 
    })
    
}