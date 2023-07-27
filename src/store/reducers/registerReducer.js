import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    password: '',
    retypePassword: ''
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        SET_REGISTER_USERNAME: (state, action) => {
            return {
                ...state, 
                username: action.payload
            }
        },
        SET_REGISTER_PASSWORD: (state, action) => {
            return {
                ...state, 
                password: action.payload
            }
        }, 
        SET_REGISTER_RETYPE_PASSWORD: (state, action) => {
            return {
                ...state,
                retypePassword: action.payload
            }
        }
    },
})

export const { SET_REGISTER_PASSWORD, SET_REGISTER_USERNAME, SET_REGISTER_RETYPE_PASSWORD} = registerSlice.actions
export default registerSlice.reducer