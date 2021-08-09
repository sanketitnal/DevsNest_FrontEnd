import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
	const theme = useSelector((store) => store.theme);
	useEffect(() => {
		document.body.style.backgroundColor =
			theme === "dark" ? "rgba(0, 0, 0, 0.9)" : "whitesmoke";
	}, [theme]);
	return (
		<div className="App">
			<div
				className="container"
				style={{
					backgroundImage: `url("/images/${
						theme === "dark" ? "night" : "morning"
					}.jpg")`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="inner-container">
					<CityInput />
					<WeatherDisplay />
				</div>
			</div>
		</div>
	);
}

export default App;
