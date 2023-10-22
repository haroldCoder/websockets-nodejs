import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(1000, ()=>{
    console.log(`server on port 1000`);
    
})