import "../styles/FutureForecastButton.css";

interface FutureForecastButtonProps {
    onClick: () => void;
    label: string;
    active: boolean;
}

export default function FutureForecastButton({ onClick, label, active }: FutureForecastButtonProps) {
    function getFormatedDate() {
        const date = new Date(label);
        date.setDate(date.getDate() + 1);
        return date.toDateString().slice(0, -4);
    }

    return (
        <button className={"future-forecast-button " + (active ? "active" : "")} onClick={onClick}>
            {getFormatedDate()}
        </button>
    );
}