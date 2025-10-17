import { useState,useEffect } from "react";


function WeatherApp(){
    const [city , setCity]  = useState("Vancouver");
    const [loading , setLoading] = useState(false);
    const [weather , setWeather] = useState(null);
    const [inputCity, setInputCity] = useState("");

      useEffect(() => {
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d4dc421eeb4d7b4e8ee1b07de23e837&units=metric`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [city]);



        return (
        <div>
            <h2>Weather App</h2>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city" 
            />
            {loading && <p>Loading...</p>}
            {weather && (
                <div>
                    <h3>{weather.name}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
            <input 
            type="text" 
            value={inputCity} 
            onChange={(e) => setInputCity(e.target.value)} 
            placeholder="Enter city" 
            />
             <button onClick={() => setCity(inputCity)}>Search</button>

        </div>  
    );



}
export default WeatherApp;