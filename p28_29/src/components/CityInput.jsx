import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAndUpdateWeather } from '../redux/actions'; 

export default function CityInput() {
    const [city, setCity] = React.useState('');
    const dispatch = useDispatch();

    useEffect(() => dispatch(getAndUpdateWeather("Delhi")), [dispatch]);

    return (
        <div className="city-input-box"> 
            <input className="city-input-box-cityname" 
                type="text" 
                placeholder="City Name"
                onChange={e => setCity(e.target.value)}
            />

            <button 
                className="city-input-box-button"
                onClick={() => {
                    if(city.trim() === "") {
                        alert("Please enter city name");
                        return;
                    }
                    dispatch(getAndUpdateWeather(city));
                }}
            > Go </button>
        </div>
    )
}