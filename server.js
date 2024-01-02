const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Todo = require("./models/todoModel");
const { errorHandler } = require("./utils/error");

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/todos/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body);

        if (!todo) {
            const errorMessage = `Cannot find any note with ID ${id}`;
            return next(errorHandler(404, errorMessage));
        }

        const updatedTodo = await Todo.findById(id);
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/todos/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            const errorMessage = `Cannot find any note with ID ${id}`;
            return next(errorHandler(404, errorMessage));
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/todos/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);

        if (!todo) {
            const errorMessage = `Cannot find any note with ID ${id}`;
            return next(errorHandler(404, errorMessage));
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/todo', async (req, res, next) => {
    try {
        if (req.body.title.length < 3 || req.body.description.length < 10) {
            return next(errorHandler(400, 'Minimum title length should be 3 and minimum description length should be 10'));
        }
        const todo = await Todo.create(req.body);
        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect("mongodb+srv://yashdhoke1:yax50120@yashdhoke.z5ipbv5.mongodb.net/SkillStreatBackendAssignment").then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Error while connecting to the database");
});
