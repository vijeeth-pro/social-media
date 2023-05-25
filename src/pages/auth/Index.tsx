import { Layout, Menu, Skeleton } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

const { Header, Content, Footer } = Layout

type Props = {}

const Index = (props: Props) => {
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