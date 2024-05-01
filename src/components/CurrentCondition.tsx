import { Weather } from "../types/Weather.type";
import { WeatherCurrentCondition } from "../types/WeatherCurrentCondition.type";
import { HumidityIndicator } from "./HumidityIndicator";
import WeatherIcon from "./WeatherIcon";
import { WindIndicator } from "./WindIndicator";

interface CurrentConditionProps {
    condition: WeatherCurrentCondition | undefined,
    dayStats: Weather['weather'][0];
}

export default function CurrentCondition({condition, dayStats}: CurrentConditionProps) {
    if (!condition) {
        return null
    }

    return (
        <fieldset style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em'
        }}>
            <legend>Current Condition</legend>
            <WeatherIcon
                weatherDesc={condition.weatherDesc[0].value}
            />
            <div>{condition.weatherDesc[0].value}</div>
            <div>{condition.temp_C}°C</div>
            <div>{condition.temp_F}°F</div>
            <div>Feels like {condition.FeelsLikeC}°C</div>
            <div>Feels like {condition.FeelsLikeF}°F</div>
            <div>Max Temp: {dayStats.maxtempF}°F</div>
            <div>Min Temp: {dayStats.mintempF}°F</div>
            <HumidityIndicator 
                humidity={parseInt(condition.humidity)}
            />
            <WindIndicator
                direction={parseInt(condition.winddirDegree)}
                speed={parseInt(condition.windspeedMiles)}
            />
        </fieldset>
    )
}