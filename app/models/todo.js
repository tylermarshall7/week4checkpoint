export default class Todo {
  constructor(data) {
    console.log('[RAW TODO API DATA]', data);

    this.id = data._id
    this.user = data.user
    this.completed = data.completed
    this.description = data.name || data.description
  }

  get Template() {
    if (this.completed == true) {
      return `
      <li class="my-2 text-slash">
        <input checked type="checkbox" onchange="app.todoController.toggleTodoStatus('${this.id}')">
        ${this.description} 
        <div class="text-right push-up">
        <i class="fa text-danger fa-trash action" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
        </div>
      </li>`
    }
    else {
      return `<li class="my-2"> 
      <div class="">
      <input type="checkbox" id="" class="mr-2" onchange="app.todoController.toggleTodoStatus('${this.id}')">
      ${this.description}
      </div>
      <div class="text-right push-up">
      <div onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
      </div>
    </li>
      `
    }
  }
}