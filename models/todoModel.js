const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter Title"]
        },
        description: {
            type: String,
            required: [true,"Please enter the description"]
        }
    },
    {
        timestamps: true
    }
)


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;