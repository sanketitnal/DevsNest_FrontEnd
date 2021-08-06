import { useSelector } from "react-redux";

export default function Data() {
    const state = useSelector(state => state);
    return (
        <div className="data-display">
            <h1> Data Display </h1>
            <h3><b>Name: </b> {state.name} </h3>
            <h3><b>Email: </b> {state.email} </h3>
        </div>
    );
}