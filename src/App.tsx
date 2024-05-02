import './styles/App.css'
import Header from './components/Header'
import Location from './components/Location'
import { Weather } from './types/Weather.type'
import { useState } from 'react'
import CurrentCondition from './components/CurrentCondition'
// import tempdata from '../tempdata.json';
import { UnitContext } from './context/UnitContext'
import Background from './components/Background'
import FutureForecast from './components/FutureForecast'

export default function App() {
    // const [weather, setWeather] = useState<Weather | Error>(tempdata as Weather);
    const [weather, setWeather] = useState<Weather | Error>();
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [unit, setUnit] = useState<string>('f');

    const handleNewQuery = (query: string) => {
        setIsSearching(true);
        fadeCardsOut();
        fetch(`https://wttr.in/${query}?format=j1`)
            .then(res => {
                if (!res.ok) {
                    const e = new Error(res.statusText);
                    setWeather(e);
                    setIsSearching(false);
                    fadeCardsIn();
                    throw e;
                }
                return res.json();
            })
            .then(data => {
                setWeather(data);
                setIsSearching(false);
                fadeCardsIn();
            })
    }

    const changeUnitToggle = () => {
        setUnit(unit === 'f' ? 'c' : 'f');
    }

    const fadeCardsOut = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.classList.remove('fade-in');
            card.classList.add('fade-out');
        });
    }

    const fadeCardsIn = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.classList.remove('fade-out');
            card.classList.add('fade-in');
        });
    }

    function getPageContent() {
        if (!weather) {
            return (<></>);
        }
        if (weather instanceof Error) {
            return (
                <div className='card-wrapper'>
                    <div className='card'>
                        Failed to fetch weather data
                    </div>
                </div>
            );
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
                <FutureForecast
                    weather={weather?.weather}
                />
            </div>
        );
    }

    function getBackground() {
        if (!weather || weather instanceof Error) {
            return <Background weatherDesc='clear' />
        }

        return (
            <Background weatherDesc={weather?.current_condition[0].weatherDesc[0].value} />
        )
    }

    return (
        <>
            <div className="content-body">
                <UnitContext.Provider value={unit}>
                    <div className={'header-sizer ' + (!weather ? 'no-weather' : '')}>
                        <Header
                            changeWeather={handleNewQuery}
                            changeUnitToggle={changeUnitToggle}
                            isSearching={isSearching}
                        />
                    </div>
                    {getPageContent()}
                </UnitContext.Provider>
                <footer className='footer'>
                    <div>Created By Derek Bond</div>
                    <div>Site created with React and Vite</div>
                    <div>Weather data from <a href="https://wttr.in/">wttr.in</a></div>
                </footer>
            </div>
            {getBackground()}
        </>
    )
}