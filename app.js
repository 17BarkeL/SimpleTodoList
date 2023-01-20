var todoList = document.querySelector(".todo-items");
var newTodoItemButton = document.querySelector(".new-todo-item");
var completeButton = document.querySelector(".todo-item button");

window.onload = function () {
  var todoListStorage = JSON.parse(localStorage.getItem("todoItems"));

  if (todoListStorage.length != 0) {
    todoListStorage.forEach((item) => {
      newTodoItem();
      todoList.lastChild.querySelector("input").value = item;
    });
  } else {
    newTodoItem();
  }
};

setInterval(() => {
  var todoListStorage = [];
  var todoItemElements = document.querySelectorAll(".todo-item input");

  if (todoItemElements.length == 0) {
    newTodoItem();
  }

  todoItemElements.forEach((item) => {
    todoListStorage.push(item.value);
  });

  localStorage.setItem("todoItems", JSON.stringify(todoListStorage));
}, 10);

newTodoItemButton.addEventListener("click", () => {
  newTodoItem();
});

function newTodoItem() {
  var newTodoItem = document.createElement("div");
  todoList.appendChild(newTodoItem);
  newTodoItem.classList.add("todo-item");
  newTodoItem.innerHTML = `
  <input class="text" type="text" placeholder="Type here..." />
  <button class="complete-item" onclick="completeTodoItem(this)"><img src="./tick.svg" alt="" /></button>
  `;
}

function completeTodoItem(item) {
  if (item.parentNode.parentNode.childElementCount - item.parentNode.parentNode.querySelectorAll("completed").length > 1) {
    item.parentNode.classList.add("completed");

    setTimeout(() => {
      item.parentNode.remove();
    }, 400);
  } else {
    item.parentNode.querySelector("input").value = "";
  }
}
