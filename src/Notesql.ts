import Notes from "./Notes";
import {connect} from "./connection/connection"

class Notesql extends Notes{
    constructor(){
        super("", "");
    }

    getNotes = async()  =>{
        const notes = await connect.query(`SELECT * FROM notes`);
        return notes;
    }

    addNote = async(title: string, description: string) =>{
        await connect.query(`INSERT INTO notes(title, description) VALUES(${title}, ${description})`, (err, result)=>{
            if(err){
                return err
            }
        })
        return "note added"
    }
}

export default Notesql;