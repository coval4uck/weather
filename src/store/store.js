import{ combineReducers, configureStore } from '@reduxjs/toolkit'
import currentWeatherSlice from './slices/currentWeatherSlice'

const rootReducer = combineReducers({
    currentWeatherSliceReduser: currentWeatherSlice
})

export const store = configureStore({
    reducer: rootReducer
})

