import { Layout, Typography, theme } from 'antd'
import React from 'react'
import { Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, FileSearchOutlined, HomeOutlined, SearchOutlined, ExpandOutlined, NotificationOutlined, ProfileOutlined, ExperimentOutlined, MoreOutlined } from '@ant-design/icons'
import { Link, Outlet } from 'react-router-dom'

const { Content,  Sider } = Layout

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


export default function Index() {

  const {
    token: { colorBgContainer, colorBgContainerDisabled },
  } = theme.useToken();

  const [response, setResponse] = React.useState<boolean>(false)

  return (
    <Layout>
      <Sider
        style={{ background: colorBgContainer, height: '100vh' }}
        breakpoint="lg"
        collapsedWidth="60"
        onBreakpoint={(broken) => {
          setResponse(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
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
              onClick={() =>item.key=== "6" && console.log('click')} 
              icon={item.icon}>
                {item.path ? <Link to={item.path}>
                  <Typography>{item.label}</Typography>
                </Link> :
                  <Typography >{item.label}</Typography>
                }  
              </Menu.Item>
            )}
        </Menu>
      </Sider>
      <Layout>
        <Content >
          <div style={{ padding: 24, minHeight: '100vh', background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}