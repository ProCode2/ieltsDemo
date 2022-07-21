const router = require("express").Router();
const auth = require("../middlewares/auth");
const todo = require("../controllers/todo.controller");

// get all owned todos
router.get("/todos", auth, todo.getTodos);
// create a todo
router.post("/todos", auth, todo.createTodo);
// mark a todo as done
router.put("/todos", auth, todo.markTodoAsDone);
// delete a todo
router.delete("/todos", auth, todo.deleteTodo);

module.exports = router;
