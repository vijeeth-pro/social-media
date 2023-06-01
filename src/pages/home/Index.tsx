import { Button, Dropdown, Layout, MenuProps, Typography, theme } from 'antd'
import React, { useEffect, useRef } from 'react'
import { Menu } from 'antd'
import { HomeOutlined, SearchOutlined, NotificationOutlined, ProfileOutlined, MoreOutlined } from '@ant-design/icons'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/redux/store/authSlice'
import UserWindow from '@/hooks/useWindow'

const { Content,  Sider, Footer } = Layout

const menuItem = [

  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Home',
    path: '/'
  },
  {
    key: '2',
    icon: <SearchOutlined />,
    label: 'Search',
    path: '/search'
  },
  {
    key: '4',
    icon: <NotificationOutlined />,
    label: 'Notification',
    path: '/notification'
  },
  {
    key: '5',
    icon: <ProfileOutlined />,
    label: 'Profile',
    path: '/profile'
  },
  {

    key: '6',
    icon: <MoreOutlined />,
    label: 'More'
  },

]

const mobileMenuItem = [

  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Home',
    path: '/'
  },
  {
    key: '2',
    icon: <SearchOutlined />,
    label: 'Search',
    path: '/search'
  },
  {
    key: '4',
    icon: <NotificationOutlined />,
    label: 'Notification',
    path: '/notification'
  },
  {
    key: '5',
    icon: <ProfileOutlined />,
    label: 'Profile',
    path: '/profile'
  },
]




export default function Index() {

  const {
    token: { colorBgContainer, colorBgContainerDisabled },
  } = theme.useToken();
  
  const disPatch = useDispatch()
  const naviation = useNavigate()
  const {dynamicWidth} = UserWindow()
 
  const [response, setResponse] = React.useState<boolean>(false)
  
  function handleLogout() {
    disPatch(setAuth({
      logedIn: false,
      token: null,
      user: null,
    }))
    
    naviation('/')

    localStorage.removeItem('refreshToken');
    localStorage.removeItem('googleToken');
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a onClick={() => handleLogout()}>
          Log out
        </a>
      ),
    },
  ];

  return (
    <Layout>
      {dynamicWidth > 588 && <Sider
        style={{ background: colorBgContainer, height: '100vh' }}
        breakpoint="lg"
        collapsedWidth="60"
        defaultCollapsed={false}
        onBreakpoint={(broken) => {
          setResponse(broken);          
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div style={{ height: 32, margin: 16, background: colorBgContainerDisabled, textAlign: 'center' }} >{response ? 'L' : <Typography>Logo</Typography> }</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[...(menuItem.map(item => item.path === window.location.pathname && item.key.toString())).toString()]}
        >
            {menuItem.map(item => 
              <Menu.Item key={item.key} style={{
                position: item.key=== "6" ? 'absolute': 'relative', 
                bottom:  item.key=== "6" ? 20 : 'auto',
              }}
              icon={item.icon}>
                {item.path ? <Link to={item.path}>
                  <Typography>{item.label}</Typography>
                </Link> :
                  <Dropdown placement='topRight' menu={{ items }} trigger={['click']}>
                    <Typography >{item.label}</Typography>
                  </Dropdown>
                }  
              </Menu.Item>
            )}
        </Menu>
      </Sider>}
      
      <Layout>
        <Content style={{background: colorBgContainer, height: '95vh'}}>
            <Outlet />
        </Content>
        {dynamicWidth < 588 &&
        <Footer style={{padding: 0, position: 'sticky'}}>
            <Menu
              mode="horizontal"
              
              style={{  alignItems: 'center', justifyContent: 'center'}}
              defaultSelectedKeys={[...(menuItem.map(item => item.path === window.location.pathname && item.key.toString())).toString()]}
            >
                {mobileMenuItem.map(item => 
                  <Menu.Item key={item.key}>
                    <Link to={item.path} >{item.icon}</Link>
                  </Menu.Item>
                )}
            </Menu>
        </Footer>
        }
      </Layout>
    </Layout>
  )
}