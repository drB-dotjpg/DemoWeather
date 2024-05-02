import { Weather } from "../types/Weather.type";
import { WeatherCurrentCondition } from "../types/WeatherCurrentCondition.type";
import { HumidityIndicator } from "./HumidityIndicator";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import { WindIndicator } from "./WindIndicator";
import "../styles/CurrentCondition.css";

interface CurrentConditionProps {
    condition: WeatherCurrentCondition | undefined,
    dayStats: Weather['weather'][0];
}

export default function CurrentCondition({ condition, dayStats }: CurrentConditionProps) {
    if (!condition) {
        return null
    }

    return (
        <div className="current-condition">
            <h1>
                <Temperature
                    tempC={parseInt(condition.temp_C)}
                    tempF={parseInt(condition.temp_F)}
                />
            </h1>
            <div>
                <WeatherIcon
                    weatherDesc={condition.weatherDesc[0].value}
                />
                <div>{condition.weatherDesc[0].value}</div>
            </div>
            <div>
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
            </div>
            <HumidityIndicator
                humidity={parseInt(condition.humidity)}
            />
            <WindIndicator
                direction={parseInt(condition.winddirDegree)}
                speed={parseInt(condition.windspeedMiles)}
            />
        </div>
    )
}