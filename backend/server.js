'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://moonfaw:1234@cluster0.wv6znpr.mongodb.net/activity', {})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log('Task API Server is running on port ' + port);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  id: { type: String, required: true },
  password: { type: String, required: true }
});

const Task = mongoose.model("Task", taskSchema);

const router = express.Router();
app.use('/api/tasks', router);

router.route("/")
  .get(async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });

router.route("/:id")
  .get(async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      res.json(task);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });

router.route("/add")
  .post(async (req, res) => {
    const { id, password } = req.body;

    const newTask = new Task({
      id,
      password
    });

    try {
      await newTask.save();
      res.json("Task added!");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });

router.route("/update/:id")
  .put(async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json("Error: Task not found");
      }

      task.id = req.body.id;
      task.password = req.body.password;

      await task.save();
      res.json("Task updated!");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });

router.route("/delete/:id")
  .delete(async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).json("Error: Task not found");
      }
      res.json("Task deleted.");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });
