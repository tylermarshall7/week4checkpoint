import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Tyler/todos",
  timeout: 8000
});

class TodoService {
  constructor() {
    this.getTodos()
  }

  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get('').then(res => {
      let todoList = res.data.data.map(tdl => new Todo(tdl))
      store.commit('todos', todoList)
    })
  }

  async addTodoAsync(todo) {
    let res = await todoApi.post("", new Todo(todo));
    this.getTodos()

  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);

    if (todo) {
      todo.completed = !todo.completed
    }

    let res = await todoApi.put(todoId, todo);
    this.getTodos()
  }

  async removeTodoAsync(todoId) {
    let todo = store.State.todos.find(tdl => tdl.id == todoId)
    let res = await todoApi.delete(todo.id)
    this.getTodos()
  }

  async deleteCompletedTodos() {
    let todos = store.State.todos
    let completed = todos.filter(tdl => tdl.completed == true)

    for (let i = 0; i < completed.length; i++) {
      let todo = completed[i]
      let res = await todoApi.delete(todo.id)
    }
    this.getTodos()
  }

}

const todoService = new TodoService();
export default todoService;
