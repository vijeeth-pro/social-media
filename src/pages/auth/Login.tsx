import LoginSide from '@/assets/png/loginside.png'
import FaceBook from '@/assets/svg/FaceBook'
import GoogleIcon from '@/assets/svg/Google'
import { useLoginMutation } from '@/redux/service/auth'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { Button, Form, Input, Typography, message } from 'antd'
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Login() {

  const [login, { isLoading, error}] = useLoginMutation<FetchBaseQueryError | any>()

  const handleFinish = (values: any) => {
    console.log(values)
    login(values)
  }
  

  return (
    <section className="Login">
      <div className="Login__logo">
        <img src={LoginSide} alt="logo" />
        <div className='login-form-box'>
          <div className='form-head'>
            <h4>Welcome to <br/> <span>
            Social media Login
              </span> </h4>
          </div>
          <div className='oath-section'>
            <Button block onClick={() => window.location.replace(`${import.meta.env.VITE_LOCAL_URL}/auth/oauth/google`)}><i><GoogleIcon /></i>Login with Google</Button>
            <Button block onClick={() => message.info('Coming Soon')}><i><FaceBook /></i>Login with Github</Button>
            <div className="hr-sect">Or</div>
          </div>
          <Form name="basic" 
          onFinish={handleFinish} 
          className='Login__form'
          style={{width: '100%'}}
          initialValues={{ remember: true }}>
            <Form.Item

              name="name"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Email / Username" />
            </Form.Item>

            <Form.Item

              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {error && <Form.Item>
              <Typography.Text type='danger'>! {error.data.message || 'Make sure your email and password is correct'}</Typography.Text>
              </Form.Item>}

            <Form.Item>
              <Button block loading={isLoading} disabled={isLoading} type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
            
          
            <Form.Item>
              <p>Don’t have an account? <Link to='/register'>Register</Link></p>
            </Form.Item>
          </Form>
        </div>
      </div>

    </section>
  )
}