import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Aircrafts from "./components/Aircrafts";
import TDModel from "./components/TDModel";
import History from "./components/History";
import ActiveLinkProvider from "./components/Context/ActiveLink";

function App() {
	return (
		<ActiveLinkProvider>
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={Home} />
				<Route exact path="/aircrafts" component={Aircrafts} />
				<Route path="/aircrafts/:aircraftName" component={TDModel} />
				<Route path="/history" component={History} />
			</BrowserRouter>
		</ActiveLinkProvider>
	);
}

export default App;
