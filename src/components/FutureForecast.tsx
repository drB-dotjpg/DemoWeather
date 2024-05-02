import { Weather } from "../types/Weather.type";
import "../styles/FutureForecast.css";
import { useState } from "react";
import HourlyCondition from "./HourlyCondition";
import FutureForecastButton from "./FutureForecastButton";

interface FutureForecastProps {
    weather: Weather['weather'];
}

export default function FutureForecast({ weather }: FutureForecastProps) {
    const [dayIndex, setDayIndex] = useState<number>(0);

    function getDayButtons() {
        const days = weather.map((day, index) => {
            const label = day.date;
            return (
                <FutureForecastButton
                    key={index}
                    onClick={() => setDayIndex(index)}
                    label={label}
                    active={index === dayIndex}
                />
            );
        });
        return days;

    }

    function getWeatherCards() {
        const day = weather[dayIndex];
        const cards = day.hourly.map((hour, index) => {
            return (
                <div className="card" key={index}>
                    <HourlyCondition
                        hourlyWeather={hour}
                        date={day.date}
                    />
                </div>
            );
        });
        return cards;

    }

    return (
        <>
            <div className="day-selector-wrapper card">
                <div className="label">Future Forecast</div>
                {getDayButtons()}
            </div>
            <div className="future-forecast">
                <div className="card-wrapper">
                    {getWeatherCards()}
                </div>
            </div>
        </>
    );
}