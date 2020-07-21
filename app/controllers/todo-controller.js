import todoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  let template = ''
  todos.forEach(tdl => template += tdl.Template)
  document.getElementById('todos').innerHTML = template
}
export default class TodoController {
  constructor() {
    todoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todo = {
      name: form.description.value
    };

    form.reset()
    todoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    todoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    todoService.removeTodoAsync(todoId);
  }

  deleteCompletedTodos() {
    todoService.deleteCompletedTodos()
  }
}
