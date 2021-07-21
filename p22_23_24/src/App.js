import "./App.css";
import React from "react";
import MemePage from "./components/MemePage";
import Header from "./components/Header";
import { loginState, setLoginState } from "./components/LoginContext";

function App() {
	let [login, setLogin] = React.useState(false);

	return (
		<loginState.Provider value={login}>
			<setLoginState.Provider value={setLogin}>
				<div className="App">
					<Header />
					<MemePage />
				</div>
			</setLoginState.Provider>
		</loginState.Provider>
	);
}

export default App;
