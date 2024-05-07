import '../styles/WeatherIcon.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SnowIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FogIcon from '@mui/icons-material/Water';

interface WeatherIconProps {
    weatherDesc: string
}

export default function WeatherIcon({weatherDesc}: WeatherIconProps) {
    
    function getWeatherIcon(): JSX.Element {
        const weather = weatherDesc.toLowerCase();
        for (const [key, value] of Object.entries(iconLookup)) {
            if (weather.includes(key)) {
                return value();
            }
        }
        return <></>;
    }

    return (
        <div className='weather-icon'>
            {getWeatherIcon()}
        </div>
    )
}

const iconLookup = {
    "cloudy": () => <CloudIcon fontSize='inherit' />,
    "overcast": () => <CloudIcon fontSize='inherit' />,
    "clear": () => <WbSunnyIcon fontSize='inherit' />,
    "sunny": () => <WbSunnyIcon fontSize='inherit' />,
    "thunder": () => <ThunderstormIcon fontSize='inherit' />,
    "storm": () => <ThunderstormIcon fontSize='inherit' />,
    "snow": () => <SnowIcon fontSize='inherit' />,
    "blizzard": () => <SnowIcon fontSize='inherit' />,
    "rain": () => <WaterDropIcon fontSize='inherit' />,
    "drizzle": () => <WaterDropIcon fontSize='inherit' />,
    "mist": () => <FogIcon fontSize='inherit' />,
    "haze": () => <FogIcon fontSize='inherit' />,
    "fog": () => <FogIcon fontSize='inherit' />,
}