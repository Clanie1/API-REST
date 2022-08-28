const express = require("express")
const { application } = require("express")
const mysql = require("mysql2")
const app = express()
const connection = require("./database")

app.use(express.json())

app.get("/", (req, res) =>{
    const tiempos = 'SELECT * FROM times';
    connection.query(tiempos, (err,results) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("get submited");
        }
        res.send(results)
    })
})

app.post("/", (req,res) =>{
    const query = `INSERT INTO times(name, time) VALUES('${req.body.name}', ${req.body.tiempo});`
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err)
        }
    })
    res.send()
})

app.listen(3000, ()=>{
    console.log("Escuchando en puerto 30000")
    connection.connect((err)=>{
        if (err){
            console.log(err)
        }
    })
})