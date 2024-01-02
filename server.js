const express = require("express") ; 
const app = express() ; 
const mongoose = require("mongoose") ;

app.listen(3000, () => {
    console.log("Server is running on port 3000") ;  
})

app.get('/' ,  (req , res) => {
       res.send('Hello') ; 
})

mongoose.connect("mongodb+srv://yashdhoke1:yax50120@yashdhoke.z5ipbv5.mongodb.net/SkillStreatBackendAssignment").then(() => {
    console.log("Connected to database") ; 
}).catch(() => {
    console.log("Error while connecting to the database") ; 
}) ; 