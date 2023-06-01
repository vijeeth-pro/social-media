import { profileCategories } from '@/assets/data'
import Message from '@/socket'
import { Button, Form, Input, Select, Typography } from 'antd'
import React from 'react'


function EditProfile() {

    const {mess, setMess, response} = Message()

  return (
    <section className='edit-page'>
        {/* <div> */}
            <div className='edit-page-form'>
                <div className='page-heading'>
                    <Typography.Title level={4}>Edit Profile</Typography.Title>
                </div>
                <div className='profile-form'>
                    <Form>
                        <Form.Item name='userName'>
                            <Typography.Title level={5}>Uses Name</Typography.Title>
                            <Input placeholder='Enter UserName' />
                        </Form.Item>
                        <Form.Item name='name'>
                            <Typography.Title level={5}>Name</Typography.Title>
                            <Input placeholder='Enter your name' />
                        </Form.Item>
                        <Form.Item name='bio'>
                            <Typography.Title level={5}>Bio</Typography.Title>
                            <Input.TextArea placeholder='Enter your bio' />
                        </Form.Item>
                        
                        <Form.Item>
                            <Typography.Title level={5}>Categories</Typography.Title>
                            <Select placeholder='Categories'>
                                {profileCategories.sort().map(categorie => <Select.Option key={categorie}>{categorie}</Select.Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button type='primary' htmlType='submit'>Save</Button>
                        </Form.Item>

                        
                    </Form>
                </div>
            </div>
        {/* </div> */}
        
    </section>
  )
}

export default EditProfile