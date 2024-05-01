import React from 'react'
import { Route } from 'react-router-dom'
import Registration from './Register'
import Login from './Login'
import Employee from './Employe'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route element={<Registration/>} path='/'/>
         <Route element={<Login/>} path='/login'/>
         <Route element={<Employee/>} path='/employee'/> 
     
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App