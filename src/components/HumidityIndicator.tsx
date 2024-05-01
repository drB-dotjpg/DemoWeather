interface HumidityIndicatorProps {
    humidity: number
}

export function HumidityIndicator({humidity}: HumidityIndicatorProps) {
    return (
        <div>
            <div style={{
                width: "100%",
                height: "1em",
                outline: "1px solid black",
            }}>
                <div style={{
                    width: `${humidity}%`,
                    height: "100%",
                    backgroundColor: "black"
                }}/>
            </div>
            <div>Humidity: {humidity}%</div>
        </div>
    )
}