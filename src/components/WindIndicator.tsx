import SouthIcon from '@mui/icons-material/South';
import '../styles/WindIndicator.css';

interface WindIndicatorProps {
    direction: number,
    speed: number
}

export function WindIndicator({direction, speed}: WindIndicatorProps) {
    function getWindDirectionIcon(): JSX.Element {
        return (
            <div style={{
                transform: `rotate(${direction}deg)`,
                width: "1em",
                height: "1em"
            }}>
            <SouthIcon 
                fontSize='inherit'
            />
            </div>
        );
    }

    return (
        <div className='wind-indicator'>
            <div className="icon-wrapper">{getWindDirectionIcon()}</div>
            <div>Wind Speed:<br/><strong>{speed} mph</strong></div>
        </div>
    )
}