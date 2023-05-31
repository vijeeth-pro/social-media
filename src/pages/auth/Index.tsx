import { setAuth, useAuth } from '@/redux/store/authSlice'
import { Layout, Menu, Skeleton } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout  

const Index = () => {  

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {logedIn} = useAuth()

  const useQuery = () => {
    const {search} = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
  }

  const query = useQuery()


  React.useEffect(() => {
    // console.log('Index');
    
    const token = query.get('google')
    const data = query.get('data')
    const success = query.get('success')
    
    if(success === 'true') {
      token && localStorage.setItem('googleToken', token)

      dispatch(setAuth(
        {
          token: token,
          user: data,
          logedIn: true
        }
      ))
      
    } 
    
  }, [])
  
  return (
    <>
         <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <div className="demo-logo" >Logo</div>
            <div className="demo-nav" />   
        </Header>
        <Content><Outlet /></Content>
        <Footer>Social Medai @{new Date().getFullYear()} Created by Vijeeth</Footer>
    </>
  )
}

export default Index