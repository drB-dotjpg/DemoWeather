import { Weather } from "../types/Weather.type";
import "../styles/FutureForecast.css";
import { useRef, useState } from "react";
import HourlyCondition from "./HourlyCondition";
import FutureForecastButton from "./FutureForecastButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface FutureForecastProps {
    weather: Weather['weather'];
}

export default function FutureForecast({ weather }: FutureForecastProps) {
    const [dayIndex, setDayIndex] = useState<number>(0);
    const [drawDayIndex, setDrawDayIndex] = useState<number>(0);
    const elementRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useGSAP(() => {
        if (dayIndex === drawDayIndex) return;
        const tl = gsap.timeline();
        tl.to(elementRef.current, {
            duration: .15,
            opacity: 0,
            ease: 'power2.out',
            onComplete: () => {
                setDrawDayIndex(dayIndex);
            }
        })
        .to(elementRef.current, {
            duration: .15,
            opacity: 1,
            ease: 'power2.out'
        }, '+=.07');
    }, {
        dependencies: [dayIndex],
        scope: elementRef.current
    })

    function getDayButtons() {
        const days = weather.map((day, index) => {
            const label = day.date;
            return (
                <FutureForecastButton
                    key={index}
                    onClick={() => setDayIndex(index)}
                    label={label}
                    active={index === drawDayIndex}
                />
            );
        });
        return days;

    }

    function getWeatherCards() {
        const day = weather[drawDayIndex];
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
            <div className="future-forecast card-wrapper" ref={elementRef}>
                <div className="day-selector-wrapper card">
                    <div className="label">Future Forecast</div>
                    <div>{getDayButtons()}</div>
                </div>
                {getWeatherCards()}
            </div>
        </>
    );
}