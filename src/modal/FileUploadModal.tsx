import { Modal, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/es/upload';

import type { UploadProps } from 'antd';
import { useUploadPostSeedMutation } from '@/redux/service/auth';

const { Dragger } = Upload;

type Props = {
    open: boolean;
    onClose: () => void;
    uploadPostSeed: (payload: FormData) => void;
}

const FileUploadModal = (props: Props) => {
    const {open, onClose, uploadPostSeed} = props
    
    

    const upload: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        maxCount: 1,
        onChange(info: any) {
          const { status } = info.file;
            console.log(info)
            const payload = new FormData()
            payload.append('file', info.file.originFileObj)
            uploadPostSeed(payload)
        },
        onDrop(e: React.DragEvent<HTMLDivElement>) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };

  return (
    <Modal open={open} onCancel={() => onClose()} footer={null} >
        <Dragger {...upload} >
            <p className="ant-upload-drag-icon">
            <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
            </p>
        </Dragger>
    </Modal>
  )
}

export default FileUploadModal