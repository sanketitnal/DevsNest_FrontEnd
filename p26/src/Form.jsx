import { changeName, changeEmail } from "./redux/actions/actions";
import { useDispatch } from "react-redux";

export default function Form() {
    const dispatch = useDispatch();
    
    return (
        <div className="form">
            <h1>Input</h1>
            <input type="text"
                placeholder="Name" 
                className="form-input"
                onChange={(event) => dispatch(changeName(event.target.value))}
            />
            <input type="email" 
                placeholder="Email" 
                className="form-input"
                onChange={(event) => dispatch(changeEmail(event.target.value))}
            />
        </div>
    );
}