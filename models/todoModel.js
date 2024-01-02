const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter Title"] ,
            minlength: [3, "Title should be at least 3 characters long"]
        },
        description: {
            type: String,
            required: [true,"Please enter the description"] , 
            minlength: [10, "Description should be at least 3 characters long"]
        }
    },
    {
        timestamps: true
    }
)


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;