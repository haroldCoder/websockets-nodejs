import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config()

export let connect: any;
const connectToDatabase = async () => {
    try {
        connect = mysql.createPool({
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            port: parseInt(process.env.MYSQL_PORT!),
            database: process.env.MYSQL_DATABASE,
            host: process.env.MYSQL_HOST
        });
  
      console.log('DB connected');
    } catch (err) {
      console.error(err);
      throw err;
    }
};

connectToDatabase()
