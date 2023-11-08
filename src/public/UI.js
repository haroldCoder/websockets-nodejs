const clientsList = document.querySelector("#clients");

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

}