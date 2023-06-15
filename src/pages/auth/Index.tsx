import { setAuth, useAuth } from '@/redux/store/authSlice'
import { Layout, Menu, Skeleton } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const { Header, Content, Footer } = Layout  

const Index = () => {  

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  
  const token:any = searchParams.get('google')
  const data:any = searchParams.get('data')
  const success = searchParams.get('success')

  console.log(typeof data, data )

  React.useEffect(() => {
    // console.log('Index');
    
    if(success == 'true') {
      // console.log(success)

      const newData = JSON.parse(data)
      // console.log(newData);
      token && localStorage.setItem('googleToken', token)

      dispatch(setAuth(
        {
          token: token,
          user: JSON.parse(data),
          logedIn: true
        }
      ))
    } 
    
  }, [success])
  
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