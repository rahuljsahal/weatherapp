import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { SET_QUERY, SET_WEATHER_DATA } from "../store/reducers/weatherReducer";
import axios from "axios";
import logo from '../logo.png'
import Register from "./Register";
import { SET_THEME_DARK } from "../store/reducers/themeReducer";

const Navbar = () => {

  const dispatch = useDispatch()
  const {query}  = useSelector((state) => state.weather)
  const weatherData = useSelector((state) => state.weather)
 
  const {userName} = useSelector((state) => state.auth)
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: query},
    headers: {
      'X-RapidAPI-Key': '734b37553cmsh3ebadde28211cb6p18e7edjsn451a3172498d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  console.log(query)
  const [isCelsius, setIsCelsius] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const {theme} = useSelector(state => state.theme)

  const handleCelsiusToggle = () => {
    setIsCelsius(!isCelsius);
  };

  const handleThemeToggle = () => {
    dispatch({
      type: SET_THEME_DARK,
      payload: theme==='white'?'dark':'white'
    })
  };




  useEffect(() => {
    handleGetData()
  },[])

  const handleGetData = async () => {

    try {
      const response = await axios.request(options);
      console.log(response)
      dispatch({
        type: SET_WEATHER_DATA,
        payload: {
                logoSrc: response.data.current.condition.icon,
                temp: response.data.current.feelslike_c,
                weatherType: response.data.current.condition.text,
                place: response.data.location.name,
                humidity: response.data.current.humidity,
                windDegree: response.data.current.wind_degree,
                windSpeed: response.data.current.wind_kph,
                location_d: response.data.location.region
        }
      })
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div>
      <div className="flex px-12 justify-between items-center font-mono-300">
        <div className="flex items-center space-x-4">
          <img width={50} src={logo}/>
          <button className={`${theme==='dark'?'text-white':''}`} onClick={handleThemeToggle}>{theme==='dark'?'Light Mode':'Dark Mode'}</button>
        </div>
        <div className="flex space-x-4">
          <input onChange={(e) => {
            dispatch({
              type: SET_QUERY,
              payload: e.target.value
            })
          }} className="border p-2 rounded-md"/>
          <button onClick={handleGetData} className="p-2 px-4 border rounded-md bg-purple-800 text-white">Search</button>
          {!userName && <Register/>}
            {userName?<p className="border px-3 py-2 rounded-md">{userName}</p>:<Login/>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
