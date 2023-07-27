import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN_PASSWORD, SET_LOGIN_USERNAME } from '../store/reducers/loginReducer';
import axios from 'axios';
import { SET_AUTH } from '../store/reducers/authReducer';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.login)
  console.log(auth)
  
  const handleLogin = async() => {
    await axios.post('http://localhost:5000/api/user/login', auth).then((res) => {
      console.log(res)
      if (res.data) {
        dispatch({
          type: SET_AUTH,
          payload: res.data
        })
      }
    })
  };

  return (
    <div>
      {/* Button to open the login modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-300  hover:bg-blue-400 text-white py-2 px-4 rounded-md"
      >
        Login
      </button>

      {/* The modal overlay */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* The modal dialog */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div
              className="inline-block align-bottom p-4 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Login
                    </h3>
                    <div className="mt-2">
                      <div className="mb-4 mt-4">
                        <input
                          type="text"
                          id="username"
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter your username"
                          
                          onChange={(e) => {
                            dispatch({
                              type: SET_LOGIN_USERNAME,
                              payload: (e.target.value)
                            })
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          id="password"
                          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter your password"
                          onChange={(e) => {
                            dispatch({
                              type: SET_LOGIN_PASSWORD,
                              payload: (e.target.value)
                            })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleLogin}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Log in
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
