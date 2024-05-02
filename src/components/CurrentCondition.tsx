import { Weather } from "../types/Weather.type";
import { WeatherCurrentCondition } from "../types/WeatherCurrentCondition.type";
import { HumidityIndicator } from "./HumidityIndicator";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import { WindIndicator } from "./WindIndicator";
import "../styles/CurrentCondition.css";
import TempStats from "./TempStats";

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
            <div className="boxed-row-wrapper">
                <div className="temp flex-center">
                    <Temperature
                        tempC={parseInt(condition.temp_C)}
                        tempF={parseInt(condition.temp_F)}
                    />
                </div>
                <div className="flex-center">
                    <WeatherIcon
                        weatherDesc={condition.weatherDesc[0].value}
                    />
                    <div>{condition.weatherDesc[0].value}</div>
                </div>
            </div>
            <div className="boxed-row-wrapper">
                <TempStats
                    maxTempF={dayStats.maxtempF}
                    maxTempC={dayStats.maxtempC}
                    minTempF={dayStats.mintempF}
                    minTempC={dayStats.mintempC}
                    feelsLikeF={condition.FeelsLikeF}
                    feelsLikeC={condition.FeelsLikeC}
                    tempF={condition.temp_F}
                />
                <div className="flex-center">
                    <HumidityIndicator
                        humidity={parseInt(condition.humidity)}
                    />
                </div>
                <div className="flex-center">
                    <WindIndicator
                        direction={parseInt(condition.winddirDegree)}
                        speed={parseInt(condition.windspeedMiles)}
                    />
                </div>
            </div>
        </div>
    )
}