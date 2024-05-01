import { HourlyWeather } from "../types/HourlyWeather.type";
import { HumidityIndicator } from "./HumidityIndicator";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import { WindIndicator } from "./WindIndicator";

interface HourlyConditionProps {
    date: string;
    hourlyWeather: HourlyWeather;
}

export default function HourlyCondition({ hourlyWeather, date }: HourlyConditionProps) {
    if (!hourlyWeather) {
        return null
    }

    if (!date) {
        date = 'Unknown Date';
    }

    return (
        <fieldset>
            <legend>Weather at {date}, {hourlyWeather.time}</legend>
            <WeatherIcon
                weatherDesc={hourlyWeather.weatherDesc[0].value}
            />
            <div>{hourlyWeather.weatherDesc[0].value}</div>
            <h1>
                <Temperature
                    tempC={parseInt(hourlyWeather.tempC)}
                    tempF={parseInt(hourlyWeather.tempF)}
                />
            </h1>
            <HumidityIndicator
                humidity={parseInt(hourlyWeather.humidity)}
            />
            <WindIndicator
                direction={parseInt(hourlyWeather.winddirDegree)}
                speed={parseInt(hourlyWeather.windspeedMiles)}
            />
        </fieldset>
    )
}