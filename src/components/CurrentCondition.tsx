import { WeatherCurrentCondition } from "../types/WeatherCurrentCondition.type";
import { HumidityIndicator } from "./HumidityIndicator";
import { WindIndicator } from "./WindIndicator";

interface CurrentConditionProps {
    condition: WeatherCurrentCondition | undefined
}

export function CurrentCondition({condition}: CurrentConditionProps) {
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
            <div>{condition.weatherDesc[0].value}</div>
            <div>{condition.temp_C}°C</div>
            <div>{condition.temp_F}°F</div>
            <div>Feels like {condition.FeelsLikeC}°C</div>
            <div>Feels like {condition.FeelsLikeF}°F</div>
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