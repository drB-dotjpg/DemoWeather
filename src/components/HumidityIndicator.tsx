import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import '../styles/HumidityIndicator.css'

interface HumidityIndicatorProps {
    humidity: number
}

export function HumidityIndicator({humidity}: HumidityIndicatorProps) {
    return (
        <div className='humidity-indicator'>
            <div className='icon-wrapper'>
                <WaterDropOutlinedIcon
                    className='primary white'
                    fontSize='inherit'
                    style={{
                        clipPath: `polygon(0 ${100 - humidity}%, 100% ${100 - humidity}%, 100% 100%, 0 100%)`
                    }}
                />
                <WaterDropIcon
                    className='primary'
                    fontSize='inherit'
                    style={{
                        clipPath: `polygon(0 ${100 - humidity}%, 100% ${100 - humidity}%, 100% 100%, 0 100%)`
                    }}
                />
                <WaterDropOutlinedIcon
                    fontSize='inherit'       
                />
            </div>
            <div>Humidity:<br/><strong>{humidity}%</strong></div>
        </div>
    )
}