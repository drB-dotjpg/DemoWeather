import "../styles/TempStats.css";
import Temperature from "./Temperature";

interface TempStatsProps {
    maxTempF: string;
    maxTempC: string;
    minTempF: string;
    minTempC: string;
    feelsLikeF: string;
    feelsLikeC: string;
    tempF: string;
    tempC: string;
}

export default function TempStats({ maxTempF, maxTempC, minTempF, minTempC, feelsLikeF, feelsLikeC, tempF, tempC }: TempStatsProps) {

    function getMeterOffset() {
        const maxTemp = parseInt(maxTempF);
        const minTemp = parseInt(minTempF);
        const temp = parseInt(tempF);
        const offset = (temp - minTemp) / (maxTemp - minTemp) * 3.3 + 0.1;
        return Math.max(0.1, Math.min(3.4, offset));
    }

    return (
        <div className="temp-stats">
            <div className="meter-wrapper">
                <div className="meter">
                    <div className="indicator"
                        style={{
                            marginBottom: `${getMeterOffset()}em`
                        }}></div>
                </div>
            </div>
            <div className="num-wrapper">
                <span>
                    Max Temp: <strong><Temperature
                        tempC={parseInt(maxTempC)}
                        tempF={parseInt(maxTempF)}
                    /></strong>
                </span>
                <span>
                    Min Temp: <strong><Temperature
                        tempC={parseInt(minTempC)}
                        tempF={parseInt(minTempF)}
                    /></strong>
                </span>
                <span>
                    Feels Like: <strong><Temperature
                        tempC={parseInt(feelsLikeC)}
                        tempF={parseInt(feelsLikeF)}
                    /></strong>
                </span>
            </div>
        </div>
    )

}