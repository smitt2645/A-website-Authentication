import express from "express";
import connectDB from "./db/connectDB.mjs";
import {join} from "path";
import { router } from "./routers/web.mjs";


const app = express();
const url = "mongodb://127.0.0.1:/";
connectDB(url);

// set tamplate engine!
app.set("view engine","ejs");
app.set("views",join(process.cwd(),"views"));

// static path of Public Folder
app.use(express.static(join(process.cwd(),"public")));

// req.body
app.use(express.urlencoded({ extended: true }));

// json formate
app.use(express.json())

// Load Routers!
app.use("/",router);

const Port = 5000;
app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
});

