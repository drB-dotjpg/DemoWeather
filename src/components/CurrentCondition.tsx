import { WeatherCurrentCondition } from "../types/WeatherCurrentCondition.type";

interface CurrentConditionProps {
    condition: WeatherCurrentCondition | undefined
}

export function CurrentCondition({condition}: CurrentConditionProps) {
    if (!condition) {
        return null
    }

    return (
        <fieldset>
            <legend>Current Condition</legend>
            <div>{condition.weatherDesc[0].value}</div>
            <div>{condition.temp_C}°C</div>
            <div>{condition.temp_F}°F</div>
            <div>Feels like {condition.FeelsLikeC}°C</div>
            <div>Feels like {condition.FeelsLikeF}°F</div>
            <div>Humidity: {condition.humidity}%</div>
            <div>Pressure: {condition.pressure}mb</div>
            <div>Visibility: {condition.visibilityMiles} miles</div>
            <div>Wind: {condition.winddir16Point} at {condition.windspeedMiles} mph</div>
        </fieldset>
    )
}