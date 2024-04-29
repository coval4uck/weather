import { createAsyncThunk } from "@reduxjs/toolkit"

 const fetchWeather = createAsyncThunk(
    'current_weather/fetch_weather',
    async function(_,{rejectWithValue}){
        try{
            const response = await fetch('api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=594e986756df1a8ccc91e5b8a800bd1d')
            
            if(!response.ok){
                throw new Error('Server Error')
            }

            const data = await response.json()
            
            return data
        }
        catch(error){
            return(rejectWithValue(error.message))
        }
        
    }
)

export default fetchWeather