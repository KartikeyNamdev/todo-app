const express = require("express");
const { createToDo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const safeParsed = createToDo.safeParse(createPayLoad);
  if (!safeParsed.success) {
    res.status(411).json({
      msg: "You have send wrong input",
    });
    return;
  }
  // put it in mongoDB
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todo", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updateToDo = req.body;
  const safeParsed = updateToDo.safeParse(updateToDo);
  if (!safeParsed.success) {
    res.status(411).json({
      msg: "You have send wrong input",
    });
    return;
  }
  //update todo in mongoDB

  await todo.update(
    {
      _id: req.body.id,
    },
    { completed: true }
  );
  res.json({
    msg: "todo updated",
  });
});
