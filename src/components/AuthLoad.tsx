import { Space, Spin } from 'antd'

export default function AuthLoad() {
  return (
    <div className="AuthLoader">
        <Spin tip="Loading" size="large" >
            {/* <div className="content" /> */}
        </Spin>
    </div>
  )
}