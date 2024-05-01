import { HourlyWeather } from "./HourlyWeather.type"
import { WeatherArea } from "./WeatherArea.type"
import { WeatherCurrentCondition } from "./WeatherCurrentCondition.type"

export type Weather = {
    current_condition: WeatherCurrentCondition[],
    nearest_area: WeatherArea[],
    request: [
        {
            query: string,
            type: string
        }
    ],
    weather: [
        {
            astronomy: [
                {
                    moon_illumination: string,
                    moon_phase: string,
                    moonrise: string,
                    moonset: string,
                    sunrise: string,
                    sunset: string
                }
            ],
            avgtempC: string,
            avgtempF: string,
            date: string,
            hourly: HourlyWeather[],
            maxtempC: string,
            maxtempF: string,
            mintempC: string,
            mintempF: string,
            sunHour: string,
            totalSnow_cm: string,
            uvIndex: string
        }
    
    ]
}