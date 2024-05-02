import { WeatherArea } from "../types/WeatherArea.type"

interface LocationProps {
    location: WeatherArea | undefined
}

export default function Location({location}: LocationProps) {

    if (!location) {
        return null
    }

    return (
        <>
            <div>{location.areaName[0].value}</div>
            <div>{location.region[0].value}</div>
            <div>{location.country[0].value}</div>
        </>
    )
}