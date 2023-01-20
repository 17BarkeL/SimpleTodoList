var todoList = document.querySelector(".todo-items");
var newTodoItemButton = document.querySelector(".new-todo-item");
var completeButton = document.querySelector(".todo-item button");

document.onload = newTodoItem();

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
  if (item.parentNode.parentNode.childElementCount != 1) {
    item.parentNode.style.padding = "0";
    item.parentNode.style.width = "0";
    setTimeout(() => {
      item.parentNode.remove();
    }, 600);
  } else {
    item.parentNode.querySelector("input").value = "";
  }
}
