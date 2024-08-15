const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kartikeynamdev:vinayak2003@mycluster.hjnalxi.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);
module.exports = {
  todo,
};
