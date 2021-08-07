import { useDispatch } from "react-redux"
import { useRef, useState } from "react";
import { addTask } from "../redux/actions";

export default function TaskInput() {
    const dispatch = useDispatch(),
        taskTextRef = useRef(null),
        taskDueDateRef = useRef(null);

    let [dateSummary, setDateSummary] = useState("");

    const getPrettyDate = (date) => {
        let d = new Date(date);
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${da}-${mo}-${ye}`;
    }

    return (
        <div className="task-adding-container">
            <input  ref={taskTextRef} id="task-text-input" type="text" placeholder="Type the task, add due-date, insert entry" />
            <input ref={taskDueDateRef} id="task-due-date" type="date" onChange={() => setDateSummary(getPrettyDate(taskDueDateRef.current.value))}/>
            <div id="task-add-btn"
                onClick = {() => {
                    let taskText = taskTextRef.current.value,
                        taskDueDate = taskDueDateRef.current.value;
                    if(taskText.trim() === "" || taskDueDate === "") {
                        alert("You need to fill task text and due date to add new entry");
                        return;
                    }
                    taskDueDate = getPrettyDate(taskDueDate);
                    dispatch(addTask({taskText, taskDueDate, isChecked: false}));
                    setDateSummary("");
                    taskTextRef.current.value = "";
                }}
            >
                +
                <div id="date-summary" style={{display: `${dateSummary==="" ? "none": "block"}`}}>{dateSummary}</div>
            </div>
        </div>
    )
}