import "../styles/Header.css";
import Search from "./Search";
import UnitToggle from "./UnitToggle";

interface HeaderProps {
    changeWeather: (query: string) => void;
    changeUnitToggle: () => void;
    isSearching: boolean;
}

export default function Header({changeWeather, changeUnitToggle, isSearching}: HeaderProps) {
    return (
        <header className="header">
            <div>DemoWeather</div>
            <div className="search-bar">
                <Search
                    changeWeather={changeWeather}
                    loading={isSearching}
                />
            </div>
            <UnitToggle
                onToggle={changeUnitToggle}
            />
        </header>
    )
}