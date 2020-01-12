var addTask = document.querySelector(".add");
var list = document.querySelector(".list");

addTask.addEventListener("submit", function (e) {
    e.preventDefault();

    var task = addTask.add.value.trim();
    task.replace(/\r?\n/g, "");
    if (task.length !== 0) {
        createTodoList(task);
    }
}, false);

var createTodoList = function (task) {
    var html = "<li><span>" + task;
    list.innerHTML += html;
};