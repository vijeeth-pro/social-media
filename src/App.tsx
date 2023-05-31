import '@/style/App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { auth, home } from './router'
import { useAuth } from './redux/store/authSlice'
import { useReFreshTokenMutation } from './redux/service/auth'
import React from 'react'
import AuthLoad from '@/components/AuthLoad'

function App() {

  const {logedIn} = useAuth()
  const [reFreshToken, {isLoading}] = useReFreshTokenMutation()

  React.useEffect(() => {
    if(localStorage.getItem('refreshToken') || localStorage.getItem('googleToken')) reFreshToken({})
  }, [])  
  
  return isLoading ? <AuthLoad /> : <RouterProvider router={createBrowserRouter(logedIn ? home : auth)}/>
  
}

export default App
