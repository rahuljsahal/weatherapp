import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        SET_LOGIN_USERNAME: (state, action) => {
            return {
                ...state, 
                userName: action.payload
            }
        },
        SET_LOGIN_PASSWORD: (state, action) => {
            return {
                ...state, 
                password: action.payload
            }
        },
    },
})

export const { SET_LOGIN_USERNAME,SET_LOGIN_PASSWORD} = loginSlice.actions
export default loginSlice.reducer