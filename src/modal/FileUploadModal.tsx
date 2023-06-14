import { Button, Modal, Upload } from 'antd'
import { InboxOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react'

import type { UploadProps } from 'antd';
import { useAuth } from '@/redux/store/authSlice';
import TextArea from 'antd/es/input/TextArea';
import { useUploadPostSeedMutation } from '@/redux/service/auth';

const { Dragger } = Upload;

type Props = {
    open: boolean;
    setFileModal: (open: boolean) => void;
}



const FileUploadModal = (props: Props) => {
    const {open, setFileModal } = props
    const {token} = useAuth()
    const [uploadPostSeed] = useUploadPostSeedMutation()

    const [loading, setLoading] = React.useState(false);
    const [response, setResponse] = React.useState({});
    const [caption, setCaption] = React.useState('')

    const onClose = () => {
      setFileModal(false)
      setCaption('')
    }

    
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    const upload: UploadProps = {
        name: 'file',
        listType: 'picture-card',
        action: import.meta.env.VITE_BASE_URL + '/auth/uploadVideo',
        headers: {
          'authorization' : `bearer ${localStorage.key(0)} ${token}`
        },
        showUploadList: true,
        maxCount: 1,
        onChange: (info) => {
          
          console.log(info);
          if(info.file.response?.success) setResponse(info.file.response?.data.imageUrl)

          if(info.file.status === 'done'){
            setLoading(false)
          } else if (info.file.status === 'uploading'){
            setLoading(true)
          } 
        },  
      };

      async function handlePost() {
        const payload = {
          caption,
          postUrl: response
        }
        const res = await uploadPostSeed(payload).unwrap()
        
        if(res.success) {
          setFileModal(false)
          setCaption('')
        }
      }

  return (
    <Modal open={open} onCancel={() => onClose()} footer={null} title="Upload Post">
        <Upload {...upload} >
          {!loading && uploadButton}
        </Upload>
        <TextArea autoSize={{minRows: 4, maxRows: 15}} rows={4} placeholder='Description' value={caption} onChange={(e) => setCaption((e.target.value).replace(/\r?\n/g, '\n'))} maxLength={200}/>
        <Button type='primary' block style={{marginTop: 4}} onClick={() => handlePost()}>Upload</Button>
    </Modal>
  )
}

export default FileUploadModal