const express = require("express");
const app=express();
const cors=require("cors");
const pool =require("./db");

//middleware

app.use(cors());
app.use(express.json());



// Routes

// create a todo


app.post("/todos",async(req,res)=>{
    try {
         const {description} = req.body;
         const newtodo=await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING * ",[description]
         );

         res.json(newtodo.rows[0]);

    } catch (err) {
      console.error(err.message)
    }
});

//get all todo
app.get("/todos",async(req,res)=>{
    try {
        const alltodos=await pool.query("SELECT * FROM todo");
        res.json(alltodos.rows)
        
    } catch (err) {
        console.error(err.message+"jdbfhgcb")
        
    }
})
// get a todo

app.get("/todos/:id",async(req,res)=>{

    try {
        const { id } =req.params;
        const todo=await pool.query("SELECT * FROM todo where todo_id=$1",[id]);
        res.json(todo.rows[0]);
        
    } catch (error) {
        console.error(error.message);
        
    }
})

//update a todo

// delete a todo

app.delete("/todos/:id",async(req,res)=>{

    try {
          const {id}=req.params;
          const deletetodo=await pool.query("DELETE FROM todo WHERE todo_id=$1",[id])
          res.json("todo deleted")
    } catch (error) {
        console.error(error.message)
    }


})



app.listen(5000,()=>{
    console.log("server started listenig on port no 5000")
})