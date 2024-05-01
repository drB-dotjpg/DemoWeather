export type HourlyWeather = {
    DewPointC: string,
    DewPointF: string,
    FeelsLikeC: string,
    FeelsLikeF: string,
    HeatIndexC: string,
    HeatIndexF: string,
    WindChillC: string,
    WindChillF: string,
    WindGustKmph: string,
    WindGustMiles: string,
    chanceoffog: string,
    chanceoffrost: string,
    chanceofhightemp: string,
    chanceofovercast: string,
    chanceofrain: string,
    chanceofremdry: string,
    chanceofsnow: string,
    chanceofsunshine: string,
    chanceofthunder: string,
    chanceofwindy: string,
    cloudcover: string,
    diffRad: string,
    humidity: string,
    precipInches: string,
    precipMM: string,
    pressure: string,
    pressureInches: string,
    shortRad: string,
    tempC: string,
    tempF: string,
    time: string,
    uvIndex: string,
    visibility: string,
    visibilityMiles: string,
    weatherCode: string,
    weatherDesc: [
        {
            value: string
        }
    ],
    weatherIconUrl: [
        {
            value: string
        }
    ],
    winddir16Point: string,
    winddirDegree: string,
    windspeedKmph: string,
    windspeedMiles: string
};