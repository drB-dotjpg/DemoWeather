import React from "react";
import { UnitContext } from "../context/UnitContext";

interface TemperatureProps {
    tempC: number;
    tempF: number;
}

export default function Temperature({tempC, tempF}: TemperatureProps) {
    const unit = React.useContext(UnitContext);
    
    return (
        <span>
            {unit === "f" ? tempF : tempC}°{unit.toUpperCase()}
        </span>
    )
}