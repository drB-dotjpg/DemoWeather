import { useRef, useState } from "react";
import { HourlyWeather } from "../types/HourlyWeather.type";
import { HumidityIndicator } from "./HumidityIndicator";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import { WindIndicator } from "./WindIndicator";
import "../styles/HourlyCondition.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HourlyConditionProps {
    hourlyWeather: HourlyWeather;
    date: string
}

export default function HourlyCondition({ hourlyWeather, date }: HourlyConditionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [drawExpanded, setDrawExpanded] = useState(false);
    const card = useRef() as React.MutableRefObject<HTMLDivElement>;

    useGSAP(() => {
        if (isExpanded) {
            const tl = gsap.timeline();
            tl.to(card.current, {
                duration: 0.1,
                height: card.current.scrollHeight + "px",
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => {
                    setDrawExpanded(true);
                }
            })
            .to(card.current, {
                duration: 0.35,
                height: 'auto',
                opacity: 1,
                ease: 'power2.inOut'
            }, "+=.1")
        } else if (!isExpanded && drawExpanded) {
            const tl = gsap.timeline();
            tl.to(card.current, {
                duration: 0.1,
                height: card.current.scrollHeight + "px",
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => {
                    setDrawExpanded(false);
                }
            })
            .to(card.current, {
                duration: 0.35,
                height: 'auto',
                opacity: 1,
                ease: 'power2.inOut'
            }, "+=.1")
        }
    }, {
        dependencies: [isExpanded]
    })

    function getTime(): string {
        let time = hourlyWeather.time;
        if (hourlyWeather.time === "0") {
            time = '0000';
        }
        if (hourlyWeather.time.length < 4) {
            time = '0' + hourlyWeather.time;
        }
        time = time.slice(0, 2) + ':' + time.slice(2);
        const dateObj = new Date(`${date} ${time}`);
        return dateObj.toLocaleTimeString([], {
            hour12: true,
            hour: '2-digit',
            minute: "2-digit"
        });
    }

    if (!hourlyWeather) {
        return null
    }

    if (!drawExpanded) {
        return (
            <div className="hourly-condition" ref={card}>
                <div className="boxed-row-wrapper">
                    <div className="time flex-center">
                        {getTime()}
                    </div>
                    <div className="temp flex-center">
                        <Temperature
                            tempC={parseInt(hourlyWeather.tempC)}
                            tempF={parseInt(hourlyWeather.tempF)}
                        />
                    </div>
                    <div className="weather-icon flex-center">
                        <WeatherIcon
                            weatherDesc={hourlyWeather.weatherDesc[0].value}
                        />
                        <div>{hourlyWeather.weatherDesc[0].value}</div>
                    </div>
                    <button className="expand-button" onClick={() => setIsExpanded(true)}>▼</button>
                </div>
            </div>
        )
    }

    return (
        <div className="hourly-condition" ref={card}>
            <div className="boxed-row-wrapper expanded">
                <div className="time flex-center">
                    {getTime()}
                </div>
                <div className="temp flex-center">
                    <Temperature
                        tempC={parseInt(hourlyWeather.tempC)}
                        tempF={parseInt(hourlyWeather.tempF)}
                    />
                </div>
                <div className="weather-icon flex-center">
                    <WeatherIcon
                        weatherDesc={hourlyWeather.weatherDesc[0].value}
                    />
                    <div>{hourlyWeather.weatherDesc[0].value}</div>
                </div>
            </div>
            <div className="boxed-row-wrapper expanded">
                <div className="flex-center">
                    <HumidityIndicator
                        humidity={parseInt(hourlyWeather.humidity)}
                    />
                </div>
                <div className="flex-center">
                    <WindIndicator
                        direction={parseInt(hourlyWeather.winddirDegree)}
                        speed={parseInt(hourlyWeather.windspeedMiles)}
                    />
                </div>
            </div>
            <button className="expand-button" onClick={() => setIsExpanded(false)}>▲</button>
        </div >
    )
}