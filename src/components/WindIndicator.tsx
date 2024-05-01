import SouthIcon from '@mui/icons-material/South';

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
                fontSize='large'    
            />
            </div>
        );
    }

    return (
        <div>
            <div>{getWindDirectionIcon()}</div>
            <div>{speed} mph</div>
        </div>
    )
}