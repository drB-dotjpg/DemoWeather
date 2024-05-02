import "../styles/Header.css";
import Search from "./Search";
import UnitToggle from "./UnitToggle";

interface HeaderProps {
    changeWeather: (query: string) => void;
    changeUnitToggle: () => void;
    isSearching: boolean;
}

export default function Header({changeWeather, changeUnitToggle, isSearching}: HeaderProps) {
    
    function getSearchBar() {
        if (isSearching) {
            return (<div><strong>Searching...</strong></div>);
        }
        return (
            <Search
                changeWeather={changeWeather}
            />
        );
    }

    return (
        <header className="header">
            <div>DemoWeather</div>
            <div className="search-bar">
                {getSearchBar()}
            </div>
            <UnitToggle
                onToggle={changeUnitToggle}
            />
        </header>
    )
}