/*
import { useDispatch } from "react-redux"
*/
import { useRef } from "react";

export default function TaskInput() {
    const /*dispatch = useDispatch(),*/
        taskTextRef = useRef(null),
        taskDueDateRef = useRef(null);

    return (
        <div className="task-adding-container">
            <input  ref={taskTextRef} id="task-text-input" type="text" placeholder="Type the task, add due-date, insert entry" />
            <input ref={taskDueDateRef} id="task-due-date" type="date" />
            <div id="task-add-btn"
                onClick = {() => {
                    let taskText = taskTextRef.current.value,
                        taskDueDate = taskDueDateRef.current.value;
                    if(taskText.trim() === "" || taskDueDate === "") {
                        alert("You need to fill task text and due date to add new entry");
                        return;
                    }
                    
                }}
            >
                +
                <div id="date-summary"></div>
            </div>
        </div>
    )
}