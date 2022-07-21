const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class todoService {
  static async getTodosByUser(user) {
    const { id } = user;
    console.log(user);
    const { Todo } = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Todo: true,
      },
    });
    console.log(Todo);
    return Todo;
  }

  static async createTodoByUser(todo, user) {
    todo.authorId = user.id;
    const newTodo = await prisma.todo.create({
      data: todo,
    });

    return newTodo;
  }

  static async markTodoAsDone(todoId, userId) {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: todoId,
        user: {
          id: userId,
        },
      },
      data: {
        completed: true,
      },
    });
  }

  static async deleteTodo(todoId, userId) {
    const deleteTodo = await prisma.todo.delete({
      where: {
        id: todoId,
        user: {
          id: userId,
        },
      },
    });

    return deleteTodo;
  }
}

module.exports = todoService;
