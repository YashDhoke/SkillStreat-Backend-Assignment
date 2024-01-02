const express = require("express") ; 
const app = express() ; 
const mongoose = require("mongoose") ;
const Todo = require("./models/todoModel") ; 

app.use(express.json()) ; 

app.listen(3000, () => {
    console.log("Server is running on port 3000") ;  
});

app.get('/' ,  (req , res) => {
       res.send('Hello') ; 
}); 

app.post('/todos' , async(req , res) => {
    try{
        const todo = await Todo.create(req.body) ; 
        res.status(200).json(todo) ; 
    }catch(error){
        console.log(error.message) ;
        res.status(500).json({message : error.message}) ; 
    }
})

mongoose.connect("mongodb+srv://yashdhoke1:yax50120@yashdhoke.z5ipbv5.mongodb.net/SkillStreatBackendAssignment").then(() => {
    console.log("Connected to database") ; 
}).catch(() => {
    console.log("Error while connecting to the database") ; 
}) ; 