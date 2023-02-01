const taskAdd = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

let taskListArray = [];
if (localStorage.getItem("taskListArray")) {
        taskListArray = Array.from(JSON.parse(localStorage.getItem("taskListArray")));
        taskList.insertAdjacentHTML("afterBegin", taskListArray.map((taskItem) => `<div class="task" data-id="${taskItem.id}">
                                                                <div class="task__title">
                                                                    ${taskItem.value}
                                                                </div>
                                                                <a href="#" class="task__remove">&times;</a>
                                                            </div>`).join(""));
}

taskAdd.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = taskInput.value;
    if (inputValue !== "") {
        let taskItem = {
            id: Date.now(), 
            value: inputValue
        };
        taskListArray.push(taskItem);
        taskList.innerHTML += `<div class="task" data-id="${taskItem.id}">
                                    <div class="task__title">
                                        ${taskItem.value}
                                    </div>
                                    <a href="#" class="task__remove">&times;</a>
                                </div>`;
    }
    localStorage.setItem("taskListArray", JSON.stringify(taskListArray));
    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("task__remove")) {
      const id = Number(event.target.closest(".task").dataset.id);
      taskListArray = taskListArray.filter(item => item.id !== id);
      taskList.querySelector(`.task[data-id="${id}"]`).remove();
      localStorage.setItem("taskListArray", JSON.stringify(taskListArray));
    }
});

