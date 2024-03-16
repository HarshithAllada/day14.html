// Define an array to store the list items
let todoList = [];

// Function to add a new item to the list
function addItem() {
    let todoInput = document.getElementById("todoInput");
    let item = todoInput.value.trim();
    
    if (item !== "") {
        todoList.push(item);
        displayList();
        todoInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

// Function to remove an item from the list
function removeItem(index) {
    todoList.splice(index, 1);
    displayList();
}

// Function to display the current list
function displayList() {
    let todoListContainer = document.getElementById("todoList");
    todoListContainer.innerHTML = "";

    todoList.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;

        let button = document.createElement("button");
        button.textContent = "Remove";
        button.onclick = function() {
            removeItem(index);
        };

        li.appendChild(button);
        todoListContainer.appendChild(li);
    });
}
