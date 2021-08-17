import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDisplay from "./pages/ProductDisplay";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/product-display/:id" component={ProductDisplay} />
		</BrowserRouter>
	);
}

export default App;
