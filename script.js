const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//functions
const addTodo = (event) => {
    //prevent form from submitting
    event.preventDefault();
    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv')
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //create complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-plus-square'></i>"
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton)
    //delete button
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = "<i class='fas fa-trash'></i>"
    deletedButton.classList.add('delete-btn');
    todoDiv.appendChild(deletedButton)
    //append todoDiv to UL
    todoList.appendChild(todoDiv)
    todoInput.value = "";
}


//event-listeners

todoButton.addEventListener('click', addTodo);
