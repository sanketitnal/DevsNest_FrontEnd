import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskDisplay from "./components/TaskDisplay";

function App() {
	return (
		<div className="App">
			<div className="heading"> Tasks to complete </div>
			<TaskInput />
			<TaskDisplay />
		</div>
	);
}

export default App;
