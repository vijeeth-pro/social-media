import RegisterImage from '@/assets/png/register.png'
import FaceBook from '@/assets/svg/FaceBook'
import GoogleIcon from '@/assets/svg/Google'
import message from '@/socket'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'

type Props = {}  

export default function Register({}: Props) {

  const {setMess} = message()

  const handleFinish = (values: any) => {
    console.log(values)
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
            <Button block><i><GoogleIcon /></i>Login with Google</Button>
            <Button block><i><FaceBook /></i>Login with Github</Button>
            <div className="hr-sect">Or</div>
          </div>
          <Form name="basic" 
          onFinish={handleFinish} 
          className='Login__form'
          style={{width: '100%'}}
          initialValues={{ remember: true }}>
            
            <Form.Item

              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" onChange={(val) => setMess(val.currentTarget.value)}/>
            </Form.Item>

            <Form.Item

              name="name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item

              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">Submit</Button>
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