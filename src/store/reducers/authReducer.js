import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: false,
    username: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_AUTH: (state, action) => {
            return {
                ...state, 
                userName: action.payload,
                login: true
            }
        },
        SET_LOGOUT: (state) => {
            return {
                ...state, 
                login: false,
                username: '',
            }
        },
    },
})

export const { SET_AUTH, SET_LOGOUT} = authSlice.actions
export default authSlice.reducer