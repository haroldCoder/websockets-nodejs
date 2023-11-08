class Clients {
    private static lastId: number = 0;
    public Id: number;
    apellido: string
    direccion: string
    email: string
    Fecha: string
    nombre: string
    Telefono: number

    constructor(apellido: string, direccion: string, email: string, Fecha: string, nombre: string, Telefono: number) {
        Clients.lastId++;
        this.Id = Clients.lastId;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
        this.Fecha = Fecha;
        this.nombre = nombre;
        this.Telefono = Telefono;
    }
}

export default Clients;