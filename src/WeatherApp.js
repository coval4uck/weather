import { useDispatch, useSelector } from "react-redux"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import './WeatherApp.css'
import { useMemo } from "react"
import fetchWeather from "./store/thunks/fetchWeather"
import { useCustomDispatch } from "./hooks/useCustomDispatch"






const WeatherApp = () => {

 useCustomDispatch(fetchWeather)
 
    const state = useSelector(state => state)
   console.log(state);

    return(
        <div className="app">
            <div className="conteiner">
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default WeatherApp