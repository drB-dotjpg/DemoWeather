import './styles/App.css'
import Header from './components/Header'
import Search from './components/Search'
import { Location } from './components/Location'
import { Weather } from './types/Weather.type'
import { useState } from 'react'
import { CurrentCondition } from './components/CurrentCondition'

export default function App() {
    const [weather, setWeather] = useState<Weather>();
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const handleNewQuery = (query: string) => {
        setIsSearching(true);
        fetch(`https://wttr.in/${query}?format=j1`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setWeather(data);
                setIsSearching(false);
            });
    }

    return (
        <>
            <Header />
            <Search
                changeWeather={handleNewQuery}
            />
            {isSearching && <div>Searching...</div>}
            <Location
                location={weather?.nearest_area[0]}
            />
            <CurrentCondition
                condition={weather?.current_condition[0]}
            />
        </>
    )
}