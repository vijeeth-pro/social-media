import UserWindow from '@/hooks/useWindow';
import { useAuth } from '@/redux/store/authSlice';
import { CommentOutlined, EditFilled, EditOutlined, LikeFilled, LikeOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Space, Typography, theme } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}



function Profile({}: Props) {

  const {dynamicWidth} = UserWindow()
  const navigate = useNavigate()
  const {user}:any = useAuth()
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const dynamicText = user.bio;

  const lines = dynamicText.split("\n");

  return (
    <section className='profile-page'>
      <div className='profile-content'>
        <Space className="profile-head-content">
          <div>
            <Avatar
              size={{ xs: 100, sm: 132, md: 140, lg: 164, xl: 180, xxl: 200 }}
              // icon={<UserOutlined />}
              src={user?.profile}
              alt='profile'
            />
          </div>
          <div className="profile-name">
            <Space  wrap>
              <Typography>
                <Typography.Title level={4}>{user?.userId}</Typography.Title>
              </Typography>
              <Space>
                <Button type="primary" >Follow</Button>
                <Button type="primary">Message</Button>
              </Space>
            </Space>
              {dynamicWidth > 588 && 
                <>
                <Space wrap className='profile-follow'>
                    <p><span style={{ fontSize: 16 }}>{user.postCount.post}</span> Post</p>
                    <p><span style={{ fontSize: 16 }}>{user.postCount.follower}</span> Following</p>
                    <p><span style={{ fontSize: 16 }}>{user.postCount.following}</span> Followers</p>
                  </Space>
                  <Space size='large'>
                  <Typography>
                    <Typography.Title level={5} style={{marginTop: 6, marginBottom: 6}}>{user.name}<EditOutlined onClick={() => navigate('/editProfile')} style={{cursor: 'pointer', marginLeft: 10}}/></Typography.Title>
                    <Typography.Title level={5} className='bio-category' style={{margin: 0}}>Frontend Developer</Typography.Title>
                    {lines.map((line:string, index:number) => (
                      <Typography.Paragraph style={{ marginBottom: 0 }} key={index}>{line}</Typography.Paragraph>
                    ))}
                  </Typography>
                </Space>
                </>
              }
          </div>
        </Space>
        <Space.Compact direction='vertical' style={{width: '100%'}}>
          <Space.Compact size='large' className='bio-data'>
            {dynamicWidth < 588 && 
              <Space direction='vertical'>
                <Typography.Title level={5}>{user.name}<EditOutlined onClick={() => navigate('/editProfile')} style={{cursor: 'pointer', marginLeft: 10}}/></Typography.Title>
                <Typography.Title level={5} className='bio-category'>{user.category}</Typography.Title>
                {lines?.map((line:string, index:number) => (
                  <Typography.Paragraph style={{marginBottom: 0}} key={index}>{line}</Typography.Paragraph>
                ))}
              </Space>
            }
          </Space.Compact>
          <Space.Compact size='large' className='profile-follow' >
            {dynamicWidth < 588 &&
              <Space.Compact className="follow-list" style={{borderTopWidth: 2, borderColor: colorPrimary}}> 
                <p><span style={{ fontSize: 16 }}>{user.postCount.post}</span> Post</p>
                <p><span style={{ fontSize: 16 }}>{user.postCount.follower}</span> Following</p>
                <p><span style={{ fontSize: 16 }}>{user.postCount.following}</span> Followers</p>
              </Space.Compact>
            }
          </Space.Compact>
        </Space.Compact>
        <Space.Compact className='post-grid'>
          {[1,2,3,4,5].map((_, i) => {
            return(
              <a key={i} href="" className="post">
                <div className="post-image">
                  <img src="https://picsum.photos/300?image=600" alt="asdfa" />
                </div>
                <span className="post-overlay">
                  <p>
                    <span className="post-likes">150<LikeFilled /></span>
                    <span className="post-comments">10 <CommentOutlined/></span>
                  </p>
                </span>
              </a>
            )
          })}
        </Space.Compact>
      </div>
    </section>
  )
}

export default Profile