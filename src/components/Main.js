import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import wind from '../wind.png'
import location from '../location.png'
import Favourite from './Favourite';
import { ADD_FAV } from '../store/reducers/favReducer';
import { Plus } from 'react-feather';

const Main = () => {

  const wd = useSelector(state => state.weather)
  const dispatch = useDispatch()
  const [active, setactive] = useState(true)

  return (
    <div className=" h-screen p-12 w-full rounded-md">
        <div className='flex space-x-2'>
            <div className='h-28 bg-slate-100 border shadow-xl w-1/3 flex items-center justify-around rounded-md'>
              
              <div className='flex items-center justify-around'>
                <img src={wd.logoSrc}/>
                <h1 className='text-3xl text-gray-500'>{wd.temp}&deg;C</h1>
              </div>
              <div className='flex space-x-3 items-center bg-gray-200 py-2 px-5 rounded-lg'>
                <img className='border p-2 bg-gray-50 rounded-full' src={wind} width={50} height={50}/>
                <div>
                  <p className='text-sm font-mono-400'>Wind Speed</p>
                  <p className='text-sm font-mono-300'>{wd.windSpeed}kmph</p>
                </div>
              </div>

            </div>



            <div className='h-28 relative w-2/3 rounded-md flex space-x-3 py-2 px-4'>
              <div className='w-2/4 flex items-center shadow-xl bg-white border rounded-md pl-6'>
                <div>
                  <h1 className='text-3xl font-mono-300 text-gray-700'>{wd.weatherType}</h1>
                  <h1 className='font-mono-400 text-md text-gray-500 mt-3'>Feels Like: 28&deg;</h1>
                </div>
              </div>
            
              <div className='flex w-2/4 items-center space-x-4 bg-gray-50 shadow-xl px-6 py- rounded-lg'>

                <div>
                    <img className='p-3' src={location} width={60}/>
                </div>

                <div onClick={() => {
                  dispatch({
                    type: ADD_FAV,
                    payload: wd
                  })
                }} className='absolute cursor-pointer w-14 h-14 border rounded-full bg-white shadow-xl -bottom-6 -right-6 flex items-center justify-center text-2xl'><Plus color='gray'/></div>


                <div>
                  <h1 className='font-mono-400 tracking-wide text-gray-800'>{wd.palce}</h1>
                <h1 className='font-mono-300 text-sm mt-2'>{wd.location_d}</h1>
                </div>
              </div>
            </div>
        </div>
        <Favourite/>
    </div>
  );
};

export default Main;
