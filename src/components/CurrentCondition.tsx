import { Weather } from "../types/Weather.type";
import { WeatherCurrentCondition } from "../types/WeatherCurrentCondition.type";
import { HumidityIndicator } from "./HumidityIndicator";
import Temperature from "./Temperature";
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
            <Temperature
                tempC={parseInt(condition.temp_C)}
                tempF={parseInt(condition.temp_F)}
            />
            <div>Feels like <Temperature
                    tempC={parseInt(condition.FeelsLikeC)}
                    tempF={parseInt(condition.FeelsLikeF)}
                />
            </div>
            <div>Max Temp: <Temperature
                tempC={parseInt(dayStats.maxtempC)}
                tempF={parseInt(dayStats.maxtempF)}
            /></div>
            <div>Min Temp: <Temperature
                    tempC={parseInt(dayStats.mintempC)}
                    tempF={parseInt(dayStats.mintempF)}
                />
            </div>
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