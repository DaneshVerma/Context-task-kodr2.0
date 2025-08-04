import React, { useContext, useState } from 'react'
import Register from './components/register'
import Login from './components/Login'
import Usercard from './components/Usercard'
import { Mystore } from './Context/UserContext'

const App = () => {
  const {userData, toggle, isDark, setIsDark} = useContext(Mystore)
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>
            User Management
          </h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 
              ${isDark 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
              }`}
          >
            {isDark ? (
              <>
                <span>🌞</span> Light Mode
              </>
            ) : (
              <>
                <span>🌙</span> Dark Mode
              </>
            )}
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            {toggle 
              ? <Login />
              : <Register /> 
            }
          </div>
          <Usercard />
        </div> 
      </div>
    </div>
   
  )
}

export default App