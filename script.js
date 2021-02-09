const form = document.getElementById("form");

const input = document.getElementById("input");

const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
    todos.forEach(todo => {
        addTodo(todo);
    })
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();


    
});
function addTodo(todo) {
    
  let todoText = input.value;
    if (todo) {
        todoText = todo.text;
    }
 if (todoText) {
     const todoE1 = document.createElement("li");
     if (todo&& todo.completed) {
         todoE1.classList.add('completed');
     }
   todoE1.innerText = todoText;
   updateLocalStorage();

   todoE1.addEventListener("click", () => {
     todoE1.classList.toggle("completed");
     updateLocalStorage();
   });
   todoE1.addEventListener("contextmenu", (e) => {
     e.preventDefault();
     todoE1.remove();
   });

   todosUl.appendChild(todoE1);
   input.value = "";
   updateLocalStorage();
 }


}


function updateLocalStorage() {
    const todosEl = document.querySelectorAll("li");
    const todos = [];

    todosEl.forEach((e) => {
        todos.push({
            text: e.innerText,
            completed: e.classList.contains("completed")
        })
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}