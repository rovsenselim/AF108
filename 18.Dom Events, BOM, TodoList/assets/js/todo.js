
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#todoForm");
    let input = document.querySelector("#todoInput");
    let ul = document.querySelector(".todoList");
    let deleteAll = document.querySelector("#clearTodo");

    let todoCount = 1; 

   
    form.addEventListener("submit", addTodo);

   
    function addTodo(e) {
        e.preventDefault();

        let inputText = input.value.trim();
        console.log(inputText);

        if (inputText === "") {
            alert("Please write something");
        } else {
            addTodoUI(inputText);
        }

        input.value = "";
    }

   
    function addTodoUI(newTodo) {
        let li = document.createElement("li");
        li.className = "todolist";
        li.textContent = newTodo;

       
        let num = document.createElement("span");
        num.className = "todoNum";
        num.textContent = todoCount;
        li.appendChild(num);
        todoCount++;

        
        li.style.color = "red";

       
        let a = document.createElement("a");
        a.href = "#";
        a.className = "deleteItem";

        let i = document.createElement("i");
        i.className = "fa-solid fa-trash fa-xl";

        a.appendChild(i);
        li.appendChild(a);

        
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "deletebtn";
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash fa-xl"></i>';
        deleteBtn.addEventListener("click", deleteTodo); 
        li.appendChild(deleteBtn);

       
        let editBtn = document.createElement("button");
        editBtn.className = "editbtn";
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square fa-xl"></i>';
        editBtn.addEventListener("click", editTodo);
        li.appendChild(editBtn);

        
        let completeBtn = document.createElement("button");
        completeBtn.className = "completebtn";
        completeBtn.innerHTML = '<i class="fa-solid fa-check fa-xl"></i>';
        completeBtn.addEventListener("click", completeTodo);
        li.appendChild(completeBtn);

        
        ul.appendChild(li);
    }

    
    function deleteTodo(e) {
        let todo = e.target.closest("li");
        if (!todo.classList.contains("completed")) { 
            ul.removeChild(todo);
        }
    }

   
    function editTodo(e) {
        let todo = e.target.closest("li");
        let newText = prompt("Redaktə etmək istədiyiniz mətni daxil edin:", todo.firstChild.textContent.trim());
        if (newText) {
            todo.firstChild.textContent = newText;
        }
    }

  
    function completeTodo(e) {
        let todo = e.target.closest("li");
        if (!todo.classList.contains("completed")) {
            todo.classList.add("completed");
            todo.style.textDecoration = "line-through"; 
            todo.style.color = "green"; 
        }
    }

   
    deleteAll.addEventListener("click", clearAllTodos);

    function clearAllTodos() {
        ul.innerHTML = "";
    }
});