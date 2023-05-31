import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Space } from 'antd'
import React from 'react'

type Props = {}

function Profile({}: Props) {
  return (
    <section className='profile-page'>
      <div className='profile-content'>
        <Space className="profile-head-content">
          <div>
            <Avatar
              size={{ xs: 100, sm: 132, md: 140, lg: 164, xl: 180, xxl: 200 }}
              icon={<UserOutlined />}
            />
          </div>
          <div className="profile-name">
            <Space  wrap>
              <h1>Nguyễn Văn A</h1>
              <Space>
                <Button type="primary" >Follow</Button>
                <Button type="primary">Message</Button>
              </Space>
            </Space>
            <Space wrap className='profile-follow'>
              <p><span style={{fontSize: 16 }}>31</span> Post</p>
              <p><span style={{fontSize: 16 }}>668</span> Following</p>
              <p><span style={{fontSize: 16 }}>1478</span> Followers</p>
            </Space>
          </div>
        </Space>
      </div>
    </section>
  )
}

export default Profile