import { useRef, useState } from "react";
import './style.css';

export default function ToDo() {
    let [tasks, setTasks] = useState([]);
    let taskInputText = useRef();
    const handleAdd = () => {
        if(taskInputText.current.value.trim() === "") {
            alert("Input field can't be empty")
            taskInputText.current.value = "";
            return;
        }
        setTasks([...tasks, {text: taskInputText.current.value.trim(), key: Date.now()}]);
        taskInputText.current.value = "";
    }

    return (
        <div className="container">
            <div className="task-input">
                <input type="text" ref={taskInputText} placeholder="write new task here"/>
                <button onClick={handleAdd}> Add </button>
            </div>

            {tasks.map((item, index) => {
                return (
                    <div className="task" key={item.key}>
                        {item.text}
                        <input type="image" src="delete.png" alt="delete" style={{float: "right" }} onClick={(e) => {
                            setTasks(tasks.filter((item, i) => index !== i));
                        }}/>
                    </div>
                )
            })}

        </div>
    )
}