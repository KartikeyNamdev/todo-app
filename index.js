const express = require("express");
const { createToDo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayLoad = req.body;
  const safeParsed = createToDo.safeParse(createPayLoad);
  if (!safeParsed.success) {
    res.status(411).json({
      msg: "You have send wrong input",
    });
    return;
  }
  // put it in mongoDB
});

app.get("/todo", function (req, res) {});

app.put("/completed", function (req, res) {
  const updateToDo = req.body;
  const safeParsed = updateToDo.safeParse(updateToDo);
  if (!safeParsed.success) {
    res.status(411).json({
      msg: "You have send wrong input",
    });
    return;
  }
  //update todo in mongoDB
});
