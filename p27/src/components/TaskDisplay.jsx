import { useSelector, useDispatch } from "react-redux";
import { removeTask, updateChecked } from "../redux/actions";

export default function TaskDisplay() {
    let taskList = useSelector(state => state.taskList);

    return (
        <div id="tasks-list">
            {taskList.map((task, index) => (
                <TaskCard taskText={task.taskText}
                    taskId={task.taskId} 
                    dueDate={task.taskDueDate} 
                    isChecked={task.isChecked}
                    key={String(Date.now() + index)} />
            ))}
        </div>
    )
}

function TaskCard({taskId, taskText, dueDate, isChecked}) {
    const dispatch = useDispatch();

    return (
        <div className="task-list-item">
            <div className="task-complete-checkbox">
                <input type="checkbox" 
                    id="checkbox"
                    onClick={() => dispatch(updateChecked(taskId, !isChecked))}
                    defaultChecked={isChecked}
                 />
            </div>

            <div className="task-details">
                <div className="task-detail-text" style={{textDecoration: `${isChecked ? "line-through": "none"}`}}>
                    {taskText}
                </div>
                <div className="task-detail-duedate" style={{textDecoration: `${isChecked ? "line-through": "none"}`}}>
                    Due Date: {dueDate}
                </div>
            </div>

            <div className="task-delete-option" 
                id="del"
                onClick={() => dispatch(removeTask(taskId))}
            >
                <img src="images/delete.png" id="del" alt="del"/>
            </div>
        </div>
    )
}