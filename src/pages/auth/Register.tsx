import RegisterImage from '@/assets/png/register.png'
import FaceBook from '@/assets/svg/FaceBook'
import GoogleIcon from '@/assets/svg/Google'
import Message from '@/socket'
import { Button, Form, Input, Typography, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useRegisterMutation } from '@/redux/service/auth'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'

type Props = {}  

export default function Register({}: Props) {

  const {mess, setMess, response} = Message()
  const [register, {isLoading, isError, error}] = useRegisterMutation<FetchBaseQueryError | any>()
  
  const navigation = useNavigate()


  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

           

  const handleFinish = async(values: any) => {
    console.log(values)
    const res = await register(values).unwrap() as any

    res.success && navigation('/')  
    
  }

  return (
    <section className="Login">
      <div className="Login__logo">
        <img src={RegisterImage} alt="logo" />
        <div className='login-form-box'>
          <div className='form-head'>
            <h4>Welcome to <br/> <span>
            Social media Register
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
          disabled={isLoading}
          initialValues={{ remember: true }}>
            
            <Form.Item

              name="userId"
              rules={[{ required: true, message: 'Please input your username!' }]}
              help={mess ? response?.message : ""}
              validateStatus={response?.value ? "success" : "error"}
            >
              <Input placeholder="Username" onChange={(val) => setMess(val.currentTarget.value)} />
            </Form.Item>

            <Form.Item

              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item

              name="email"
              rules={[{ required: true, message: 'Please input your Name!', type: 'email' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item

              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)}/>
            </Form.Item>

            <Form.Item

              name="confirmPassword"
              rules={[{ required: true, message: 'Please input your password!' }]}
              validateStatus={password === confirmPassword ? "success" : "error"}
            >
              <Input.Password placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.currentTarget.value)}/>
            </Form.Item>
            
            {isError && <Typography.Text type="danger">{error?.data.message}</Typography.Text>}

            <Form.Item>
              <Button block type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>Submit</Button>
            </Form.Item>
            
            
            <Form.Item>
              <p>Do you have an account? <Link to='/'>Login</Link></p>
            </Form.Item>
          </Form>
        </div>
      </div>

    </section>
  )
}