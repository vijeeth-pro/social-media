import { profileCategories } from '@/assets/data'
import { useUpdateProfileMutation } from '@/redux/service/auth'
import Message from '@/socket'
import { Button, Form, Input, Select, Typography } from 'antd'
import React from 'react'


function EditProfile() {
    const {mess, setMess, response} = Message()
    const [updateProfile, {isLoading}] = useUpdateProfileMutation()

    const handleFinish = (values: object) => {
        // console.log(values)
        const updateObj = Object.entries(values).filter(([key, value]) => value !== undefined  && value !== '') 
        const updateData = Object.fromEntries(updateObj)
        console.log('updateData',updateData);
        updateProfile(updateData)
    }

    
  const normalizeTextArea = (value:string) => {
    if (value) {
      return value.replace(/\r?\n/g, '\n');
    }
    return value;
  };
    

  return (
    <section className='edit-page'>
            <div className='edit-page-form'>
                <div className='page-heading'>
                    <Typography.Title level={4}>Edit Profile</Typography.Title>
                </div>
                <div className='profile-form'>
                    <Form 
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={handleFinish} 
                        >
                        <Form.Item name='userId' label='Uses Name' 
                        help={mess ? response?.message : ""}
                        validateStatus={response?.status ? "success" : "error"}>
                            {/* <Typography.Title level={5}>Uses Name</Typography.Title> */}
                            <Input placeholder='Enter UserName' onChange={(e) => setMess(e.target.value)}/>
                        </Form.Item>
                        <Form.Item name='name' label='Name'>
                            {/* <Typography.Title level={5}>Name</Typography.Title> */}
                            <Input placeholder='Enter your name' />
                        </Form.Item>
                        
                        <Form.Item name='category' label='Categories'>   
                            {/* <Typography.Title level={5}>Categories</Typography.Title> */}
                            <Select placeholder='Categories'>
                                {profileCategories.sort().map(categorie => <Select.Option key={categorie}>{categorie}</Select.Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item name='bio' label='Bio' normalize={normalizeTextArea}>
                            {/* <Typography.Title level={5}>Bio</Typography.Title> */}
                            <Input.TextArea placeholder='Enter your bio' autoSize showCount maxLength={100} />
                        </Form.Item>
                        <Form.Item style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button type='primary' htmlType='submit'>Save</Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        
    </section>
  )
}

export default EditProfile