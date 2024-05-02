import { WeatherArea } from "../types/WeatherArea.type"
import "../styles/Location.css"

interface LocationProps {
    location: WeatherArea | undefined
}

export default function Location({location}: LocationProps) {

    if (!location) {
        return null
    }

    return (
        <div className="location-wrapper">
            <div className="main">Weather in {location.areaName[0].value}, {location.region[0].value}</div>
            <div>{location.country[0].value}</div>
        </div>
    )
}