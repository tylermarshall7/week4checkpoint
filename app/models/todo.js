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
      <div class="my-2 text-slash">
        <input checked type="checkbox" onchange="app.todoController.toggleTodoStatus('${this.id}')">
        ${this.description} 
        <div class="text-right">
        <div class=" text-danger trash action" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true">
        </div>
        </div>
      </div>
      `
    }
    else {
      return `<div class="my-2"> 
      <div class="col-4">
      <input type="checkbox" id="" class="mr-2" onchange="app.todoController.toggleTodoStatus('${this.id}')">
      ${this.description}
      </div>
      <div class="text-right">
      <div onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true">
      </div>
      </div>
    </div>
      `
    }
  }
}