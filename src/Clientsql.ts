import Clients from "./Clients";
import Notes from "./Clients";
import {connect} from "./connection/connection"

class Clientsql extends Clients{
    constructor(){
        super("", "", "", "", "", 0);
    }

    getClientes = async()  =>{
        const notes = (await (await connect).query(`SELECT * FROM clientes`))[0];
        return notes;
    }

    addClientes = async(apellido: string, direccion: string, email: string, Fecha: string, nombre: string, Telefono: number) =>{
        try {
            const query = `INSERT INTO clientes (Apellido, Direccion, Email, FechaVenc, Nombre, Telefono) VALUES (?, ?, ?, ?, ?, ?)`;
            const [result] = await connect.execute(query, [apellido, direccion, email, Fecha, nombre, Telefono]);
        
            return "note added";
          } catch (error) {
            console.error(error);
            throw error;
          }
    }
}

export default Clientsql;