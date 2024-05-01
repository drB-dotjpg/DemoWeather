import React from "react";
import "../styles/UnitToggle.css";
import { UnitContext } from "../context/UnitContext";

interface UnitToggleProps {
    onToggle: () => void;
    unit: string;
}

export default function UnitToggle({onToggle}: UnitToggleProps) {

    const unit = React.useContext(UnitContext);

    return (
        <div className='unit-toggle'>
            <div>F°</div>
            <button
                onClick={onToggle}
            >
                <div className="inner-circle"
                    style={{
                        marginLeft: unit === 'f' ? '0px' : 'auto'
                    }}
                ></div>
            </button>
            <div>C°</div>
        </div>
    )
}