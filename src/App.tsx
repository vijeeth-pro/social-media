import '@/style/App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { auth, home } from './router'
import { ConfigProvider, ThemeConfig } from 'antd'
import { useAuth } from './redux/store/authSlice'
import { useReFreshTokenMutation } from './redux/service/auth'
import React from 'react'
import AuthLoad from '@/components/AuthLoad'

function App() {

  const {logedIn} = useAuth()
  const [reFreshToken, {isLoading}] = useReFreshTokenMutation()

  React.useEffect(() => {
    reFreshToken({})
  }, [])

  const theme: ThemeConfig = {
    token: {
      fontFamily: 'Poppins',
      colorPrimary: '#6358DC',
    },
  }
  

  return (
    <ConfigProvider theme={theme}>
      {isLoading ? <AuthLoad /> : <RouterProvider router={createBrowserRouter(logedIn ? home : auth)}/>}      
    </ConfigProvider>
  )
}

export default App
