export type WeatherCurrentCondition = {
    FeelsLikeC: string,
    FeelsLikeF: string,
    cloudcover: string,
    humidity: string,
    localObsDateTime: string,
    observation_time: string,
    precipInches: string,
    precipMM: string,
    pressure: string,
    pressureInches: string,
    temp_C: string,
    temp_F: string,
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
}