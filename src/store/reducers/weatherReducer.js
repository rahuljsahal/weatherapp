import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    query: 'London',
    logoSrc: '',
    temp: 0,
    weatherType: '',
    place: '',
    date: '',
    windSpeed: 0,
    humidity: 0,
    windDegree: 0,
    location_d: ''
}

export const weatherSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_QUERY: (state, action) => {
            return {
                ...state,
                query: action.payload
            }
        },
        SET_WEATHER_DATA: (state, action) => {
            return {
                ...state, 
                logoSrc: action.payload.logoSrc,
                temp: action.payload.temp,
                weatherType: action.payload.weatherType,
                palce: action.payload.place,
                windDegree:action.payload.windDegree,
                windSpeed: action.payload.windSpeed,
                location_d: action.payload.location_d,
                date: (() => {
                    const date = new Date()
                    return {
                        date
                    }
                })() 
            }
        },
    }
})

export const { SET_WEATHER_DATA, SET_QUERY} = weatherSlice.actions
export default weatherSlice.reducer