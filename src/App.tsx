import '@/style/App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { auth, home } from './router'
import { useAuth } from './redux/store/authSlice'
import { useReFreshTokenQuery } from './redux/service/auth'
import AuthLoad from '@/components/AuthLoad'

function App() {

  const {logedIn} = useAuth()
  const {isLoading} =  useReFreshTokenQuery({})
  
  
  return isLoading ? <AuthLoad /> : <RouterProvider router={createBrowserRouter(logedIn ? home : auth)}/>
  
}

export default App
