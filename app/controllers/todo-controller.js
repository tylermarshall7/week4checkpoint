import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
}

export default class TodoController {
  constructor() {
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    let todo = {
      name: form.description.value
    };

    form.reset()
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }

  deleteCompletedTodos() {
    TodoService.deleteCompletedTodos()
  }
}
