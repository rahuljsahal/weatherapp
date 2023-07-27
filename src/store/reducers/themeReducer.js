import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'white',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        SET_THEME_DARK: (state, action) => {
            return {
                ...state, 
                theme: action.payload
            }
        },
        
    },
})

export const { SET_THEME_DARK} = themeSlice.actions
export default themeSlice.reducer