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
                width: 'fit-content'
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
            <div>{speed} mph</div>
        </div>
    )
}