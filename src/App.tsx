import './styles/App.css'
import Header from './components/Header'
import Location from './components/Location'
import { Weather } from './types/Weather.type'
import { useState } from 'react'
import CurrentCondition from './components/CurrentCondition'
import HourlyCondition from './components/HourlyCondition'
import tempdata from '../tempdata.json';
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
                setWeather(data);
                setIsSearching(false);
            });
    }

    const changeUnitToggle = () => {
        setUnit(unit === 'f' ? 'c' : 'f');
    }

    function getPageContent() {
        if (isSearching) {
            return (<></>);
        }
        return (
            <div className='body-wrapper'>
                <div className="card-wrapper">
                    <div className='card'>
                        <Location
                            location={weather?.nearest_area[0]}
                        />
                    </div>
                    <div className='card'>
                        <CurrentCondition
                            condition={weather?.current_condition[0]}
                            dayStats={weather?.weather[0]}
                        />
                    </div>
                </div>
                <div className='card-wrapper'>
                {
                    weather?.weather.map((day) => (
                        day.hourly.map((hourWeather, key) => (
                            <div className="card">
                                <HourlyCondition
                                    key={key}
                                    date={day.date}
                                    hourlyWeather={hourWeather}
                                />
                            </div>
                        ))
                    ))
                }
                </div>
            </div>
        );
    }

    return (
        <>
            <UnitContext.Provider value={unit}>
                <Header 
                    changeWeather={handleNewQuery}
                    changeUnitToggle={changeUnitToggle}
                    isSearching={isSearching}
                />
                {getPageContent()}
            </UnitContext.Provider>
        </>
    )
}