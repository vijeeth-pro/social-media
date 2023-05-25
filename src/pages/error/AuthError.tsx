import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

type Props = {}

export default function AuthError({}: Props) {
  return (
    <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary"><Link to='/'>Back Home</Link></Button>}
  />
  )
}