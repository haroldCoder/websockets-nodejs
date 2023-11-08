const clientsList = document.querySelector("#clients");

<<<<<<< HEAD
const appendNotes = (clients) => {
    console.log(clients);
    clientsList.innerHTML = ``;
    
        clientsList.innerHTML =
            `
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Fecha vencimiento</th>
                    <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody class="content">
                   
                </tbody>
                </table>
        `;
        var content = document.querySelector(".content")
        clients.map((nts, index) => {
            content.innerHTML += `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${nts.Nombre}</td>
                    <td>${nts.Apellido}</td>
                    <td>${nts.Email}</td>
                    <td>${nts.Direccion}</td>
                    <td>${nts.FechaVenc}</td>
                    <td>${nts.Telefono}</td>
                </tr>
            `;
        })

=======
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
    
>>>>>>> da6513eca77b7af9cfec6056dff2bac600de05a3
}