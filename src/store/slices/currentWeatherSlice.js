import { createSlice } from "@reduxjs/toolkit"
import  fetchWeather  from "../thunks/fetchWeather"
// 594e986756df1a8ccc91e5b8a800bd1d

const initialState = {
    weather: {},
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }

}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrenWeather(state,action){
            
        },
        fetchCurrenWeatherSuccess(state,action){
           
        },
        fetchCurrenWeatherError(){
            
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeather.pending,(state) => {
            state.isLoading = true
        })
        builder.addCase(fetchWeather.fulfilled,(state,action) => {
            state.weather = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchWeather.rejected,(state,action) => {
            state.response.status = 'rejected'
            state.response.message = action.payload
        })
        
        
    },
})

export const {actions} = currentWeatherSlice
export default currentWeatherSlice.reducer