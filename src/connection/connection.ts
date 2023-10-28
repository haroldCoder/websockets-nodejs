import mysql from 'mysql2';

export const connect = mysql.createPool("mysql://uvij9d1qpneofvnd:DaDPt0b0c70abp18er8b@bmvhzelg5sar6mezsouj-mysql.services.clever-cloud.com:3306/bmvhzelg5sar6mezsouj");

connect.on('connection', ()=>{
    try{
       console.log('DB Connect'); 
    }
    catch(err){
        console.log(err);
    }
})