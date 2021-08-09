import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, prettyDate } from './dateFuncs';
import { changeTheme } from '../redux/actions'

export default function WeatherDisplay() {
    const weather = useSelector(state => state.weather);
    const theme = useSelector(state => state.theme);
    const error = weather.error === null ? null : weather.error.message;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(weather);
        if(weather.error === null) {
            let currentTheme = getTheme(
                weather.forecast.forecastday[0].date,
                weather.forecast.forecastday[0].astro.sunrise,
                weather.forecast.forecastday[0].astro.sunset,
                new Date(weather.location.localtime)
            );
            dispatch(changeTheme(currentTheme));
        }
    }, [weather, dispatch, error]);

    return (
        <div className="weather-display-card">
            { error !== null ?
                <div>{error}</div>
                :
                <>
            <div className={`weather-display-city-heading ` + (theme === 'dark' ? 'whitesmokefont': '')}>
                {weather.location.name}, {weather.location.region}, {weather.location.country}
            </div>

            <div className={`weather-display-city-heading ` + (theme === 'dark' ? 'whitesmokefont': '')}>
                {prettyDate(weather.location.localtime)}
            </div>

            <div className="weather-display-main">
                <div className={"weather-main-card " + (theme === 'dark' ? 'dark-main-card': '')}>
                    <img src={weather.current.condition.icon} 
                        alt="weather icon"
                        style={{width: '50%'}} 
                    />
                    <div className={`text-display-basic ` + (theme === 'dark' ? 'whitesmokefont': '')}> {weather.current.condition.text} </div>
                </div>
                
                <div className={"weather-main-card " + (theme === 'dark' ? 'dark-main-card': '')}>
                    <div className={`text-display-large ` + (theme === 'dark' ? 'whitesmokefont': '')}> {weather.current.temp_c}&deg; C </div>
                </div>

                <div className={"weather-main-card " + (theme === 'dark' ? 'dark-main-card': '')}>
                    <div className={`text-display-small ` + (theme === 'dark' ? 'whitesmokefont': '')}> Wind: {weather.current.wind_kph} kmph </div>
                    <div className={`text-display-small ` + (theme === 'dark' ? 'whitesmokefont': '')}> Precip: {weather.current.precip_mm} mm </div>
                    <div className={`text-display-small ` + (theme === 'dark' ? 'whitesmokefont': '')}> Press: {weather.current.pressure_mb} mb </div>
                </div>
            </div>

            <div className="infinite-row">
                {weather.forecast.forecastday[0].hour.map((item, index) => (
                    <WeatherHourCard key={String(Date.now()+index)}
                        time={Number((new Date(item.time)).getHours())}
                        temp={Number(item.temp_c)}
                        icon={item.condition.icon}
                        theme={theme}
                    />
                ))}
            </div>
            </>
            }
        </div>
    )
}

function WeatherHourCard({time, temp, icon, theme}) {
    const currentTime = (function() {
        if(time === 0) {
            return '12 AM';
        } else if(time > 12) {
            return `${time - 12} PM`;
        }
        return `${time} AM`;
    })();

    return (
        <div className={`weather-hour-card ` + (theme === 'dark' ? 'dark-main-card' : '')}>
            <div className={`text-display-xs ` + (theme === 'dark' ? 'whitesmokefont': '')}>{currentTime} </div>
            <img src={icon} alt="weather icon" />
            <div className={`text-display-xs ` + (theme === 'dark' ? 'whitesmokefont': '')}> {temp}&deg; C </div>
        </div>
    )
}