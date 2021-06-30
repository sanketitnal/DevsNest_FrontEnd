let task_text_input,date_input, date_summary, task_add_btn, tasks_list, localStorageObj;
function createNewTaskNode(task_text, task_due_date, completed, id = null) {
    let unique_id = Date.now();
    return {
        innerHTML: `<div class="task-list-item" id=${id != null ? id : unique_id}>
                        <div class="task-complete-checkbox">
                            <input type="checkbox" id="checkbox">
                        </div>
                        <div class="task-details">
                            <div class="task-detail-text">
                                ${task_text}
                            </div>
                            <div class="task-detail-duedate">
                                Due Date: ${task_due_date}
                            </div>
                        </div>
                        <div class="task-delete-option" id="del">
                            <img src="./images/delete.png" id="del">
                        </div>
                    </div>`,
        nodeId: unique_id,
        text: task_text,
        dueDate: task_due_date,
        completed
    }
}
function addNewTask(newNode, page = false) {
    let temp = document.createElement('template');
    temp.innerHTML = newNode.innerHTML;
    temp = temp.content.childNodes[0];
    temp.querySelector(".task-details").style.textDecoration = newNode.completed === true ? "line-through": "none";
    temp.querySelector("#checkbox").checked = newNode.completed === true ? true: false;
    tasks_list.prepend(temp);
    if(page === true)
        localStorageObj.addNewTaskToLocalStorage({id: newNode.nodeId, text: newNode.text, dueDate: newNode.dueDate, completed: newNode.completed})
};
class LocalStorageOperations {
    constructor() {
        this.tasks = window.localStorage.getItem("tasks");
        this.tasks = (this.tasks == null ? [] : JSON.parse(this.tasks));
        this.tasks.sort((item1, item2)=>Number(item1.id)-Number(item2.id));
        // every element is prepended so sorted in ascending order
    }
    dumpTasksToPage() {
        // t = {id: ---, text: ---, dueDate: ---, completed: ---}
        for(let t of this.tasks) {
            addNewTask(createNewTaskNode(t.text, t.dueDate, t.completed, t.id));
        }
    }
    updateLocalStorage() {
        window.localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    updateCompleted(id, completed) {
        for(let i in this.tasks) {
            if(Number(this.tasks[i].id) === Number(id)) this.tasks[i].completed = completed;
        }
        this.updateLocalStorage();
        console.log(this.tasks)
    }
    deleteTask(id) {
        console.log(id)
        let index = null
        for(let i in this.tasks) {
            if(Number(this.tasks[i].id) === Number(id)) {
                index = i;
                break;
            }
        }
        if(index !== null) {
            this.tasks.splice(index,1)
            this.updateLocalStorage()
        }
    }
    addNewTaskToLocalStorage(newNode) {
        this.tasks.unshift(newNode);
        this.updateLocalStorage();
    }
}
window.addEventListener("load", () => {
    task_text_input = document.getElementById("task-text-input"),
    date_input = document.getElementById("task-due-date"),
    date_summary = document.getElementById("date-summary"),
    task_add_btn = document.getElementById("task-add-btn"),
    tasks_list = document.getElementById("tasks-list");
    localStorageObj = new LocalStorageOperations();
    localStorageObj.dumpTasksToPage();

    document.getElementById("tasks-list").addEventListener("click", (event) => {
        let element = event.target;
        if(element.id == "checkbox") {
            element.parentNode.parentNode.querySelector(".task-details").style.textDecoration = (element.checked === true ? "line-through": "none");
            localStorageObj.updateCompleted(element.parentNode.parentNode.id, element.checked);
            console.log(element, element.checked);
        } else if(element.id === "del") {
            let parent = element.parentNode;
            if(parent.id === "del") parent = parent.parentNode;
            parent.remove();
            localStorageObj.deleteTask(parent.id);
        }
    }, true)

    date_input.value = "";
    date_input.addEventListener("change", () => {
        date_input.blur();
        if(date_input.value != "") {
            let d = new Date(date_input.value);
            let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            date_summary.innerHTML = `${da}-${mo}-${ye}`;
        }
        date_summary.style.display = (date_input.value==="null"?"none":"block");
    })

    task_add_btn.addEventListener("click", () => {
        if(date_input.value == "" || task_text_input.value.trim() == "") {
            alert("You need to fill task text and due date to add new entry");
            return;
        }
        let newNode = createNewTaskNode(task_text_input.value, date_summary.innerHTML, completed = false);
        addNewTask(newNode, true);
        date_summary.style.display = "none", date_input.value = "", task_text_input.value = "";
    });
})