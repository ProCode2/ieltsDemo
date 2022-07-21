const todo = require("../services/todo.service");
const createError = require("http-errors");

class todoController {
  static getTodos = async (req, res, next) => {
    try {
      const todos = await todo.getTodosByUser(req.user);
      res.status(200).json({
        status: "True",
        message: "Successfully fetched todos",
        data: todos,
      });
    } catch (error) {
      next(createError.InternalServerError(error.message));
    }
  };

  static createTodo = async (req, res, next) => {
    const { data } = req.body;
    try {
      const newTodo = await todo.createTodoByUser(data, req.user);
      res.status(200).json({
        status: "True",
        message: "Successfully created todo",
        data: newTodo,
      });
    } catch (error) {
      next(createError.InternalServerError(error.message));
    }
  };

  static markTodoAsDone = async (req, res, next) => {
    const { todoId } = req.body;
    try {
      const newTodo = await todo.markTodoAsDone(todoId, req.user.id);
      res.status(200).json({
        status: "True",
        message: "Successfully updated todo",
        data: newTodo,
      });
    } catch (error) {
      next(createError.InternalServerError(error.message));
    }
  };

  static deleteTodo = async (req, res, next) => {
    const { todoId } = req.body;
    try {
      const delTodo = await todo.deleteTodo(todoId, req.user.id);
      res.status(200).json({
        status: "True",
        message: "Successfully deleted todo",
        data: delTodo,
      });
    } catch (error) {
      next(createError.InternalServerError(error.message));
    }
  };
}

module.exports = todoController;
