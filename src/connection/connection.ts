import mysql from 'mysql2';
import dotenv from "dotenv";

dotenv.config()

export const connect = mysql.createConnection(process.env.MYSQL_URI!);

connect.connect((err)=>{
    if(err){
        console.log(err);
        throw err;
    }
    console.log('DB conect');
})