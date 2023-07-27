import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import registerReducer from './reducers/registerReducer'
import loginReducer from './reducers/loginReducer'
import weatherReducer from './reducers/weatherReducer'
import favReducer from './reducers/favReducer'
import themeReducer from './reducers/themeReducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    login: loginReducer,
    weather: weatherReducer,
    fav: favReducer,
    theme: themeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
