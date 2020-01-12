var addTask = document.querySelector(".add");
var list = document.querySelector(".list");

addTask.addEventListener("submit", function (e) {
    e.preventDefault();

    var task = addTask.add.value.trim();
    task.replace(/\r?\n/g, "");
    if (task.length !== 0) {
        createTodoList(task);
        addTask.reset();
    }
}, false);

var createTodoList = function (task) {
    var html = `
<li>
  <i class="far fa-trash-alt delete"></i>
  <span>${task}</span>
</li>`;
    list.innerHTML += html;
};

list.addEventListener("click", function (e){
    if(e.target.classList.contains("delete")){
        e.target.parentNode.remove();
    }
}, false);