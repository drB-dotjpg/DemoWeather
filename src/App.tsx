import './styles/App.css'
import Header from './components/Header'
import Search from './components/Search'
import Location from './components/Location'
import { Weather } from './types/Weather.type'
import { useState } from 'react'
import CurrentCondition from './components/CurrentCondition'
import HourlyCondition from './components/HourlyCondition'
import tempdata from '../tempdata.json';
import UnitToggle from './components/UnitToggle'
import { UnitContext } from './context/UnitContext'

export default function App() {
    const [weather, setWeather] = useState<Weather>(tempdata as Weather);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [unit, setUnit] = useState<string>('f');

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

    const changeUnitToggle = () => {
        setUnit(unit === 'f' ? 'c' : 'f');
    }

    return (
        <>
            <UnitContext.Provider value={unit}>
                <UnitToggle
                    onToggle={changeUnitToggle}
                    unit={unit}
                />
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
                    dayStats={weather?.weather[0]}
                />
                {
                    weather?.weather.map((day) => (
                        day.hourly.map((hourWeather) => (
                            <HourlyCondition
                                date={day.date}
                                hourlyWeather={hourWeather}
                            />
                        ))
                    ))
                }
            </UnitContext.Provider>
        </>
    )
}