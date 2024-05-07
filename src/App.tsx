import './styles/App.css'
import Header from './components/Header'
import Location from './components/Location'
import { Weather } from './types/Weather.type'
import { useRef, useState } from 'react'
import CurrentCondition from './components/CurrentCondition'
// import tempdata from '../tempdata.json';
import { UnitContext } from './context/UnitContext'
import Background from './components/Background'
import FutureForecast from './components/FutureForecast'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function App() {
    // const [weather, setWeather] = useState<Weather | Error>(tempdata as Weather);
    const [weather, setWeather] = useState<Weather | Error>();
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [unit, setUnit] = useState<string>('f');

    const bodyRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const { contextSafe } = useGSAP()

    function handleNewQuery(query: string) {
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

    const fadeCardsOut = contextSafe(() => {
        gsap.to('.card', {
            duration: .2,
            opacity: 0,
            y: 50,
            ease: 'power2.out'
        })
    });

    const fadeCardsIn = contextSafe(() => {
        gsap.fromTo('.card', {
            opacity: 0,
            y: 100
        }, {
            duration: .5,
            opacity: 1,
            y: 0,
            stagger: .07,
            ease: 'power2.out'
        })
    });

    function changeUnitToggle() {
        setUnit(unit === 'f' ? 'c' : 'f');
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
                <div className="card-wrapper current-weather">
                    <div className='card'>
                        <Location
                            location={weather?.nearest_area[0]}
                        />
                    </div>
                    <div className='card fill-height'>
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
            <div className="content-body" ref={bodyRef}>
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
                    <div>DemoWeather: Basic weather app to practice UI development</div>
                    <div>Created By Derek Bond</div>
                    <div>Created with React and Vite</div>
                    <div>Weather data from <a href="https://wttr.in/">wttr.in</a></div>
                </footer>
            </div>
            {getBackground()}
        </>
    )
}