import Notes from "./Notes";
import {connect} from "./connection/connection"

class Notesql extends Notes{
    constructor(){
        super("", "");
    }

    getNotes = async()  =>{
        const notes = (await (await connect).query(`SELECT * FROM notes`))[0];
        return notes;
    }

    addNote = async(title: string, description: string) =>{
        try {
            const query = `INSERT INTO notes (title, description) VALUES (?, ?)`;
            const [result] = await connect.execute(query, [title, description]);
        
            return "note added";
          } catch (error) {
            console.error(error);
            throw error;
          }
    }
}

export default Notesql;