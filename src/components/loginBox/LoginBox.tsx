import * as React from 'react';
import { Button, Input, Space, Typography } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './loginbox.scss'
// import { get } from "../../../network/request";
// import { UPDATA_LOADING, LoadingContext } from "../../../store/Loading";
// import Aaa from '../../../aaa';
interface UserInfo {
  username: string
  password: string
  password1?: string
}

interface LoginBoxProps{
  loginClick: () => void,
  registerClick: () => void,
  bindUserInfo: (userInfo: UserInfo) => void
}

const { Title } = Typography

const LoginBox: React.FC<LoginBoxProps> = (props) => {
  // const { dispatch } = React.useContext(LoadingContext)

  // state
  const [isLogin, setIsLogin] = React.useState(true)
  const [userInfo,setUserInfo] = React.useState({
    username: '',
    password: '',
    password1: ''
  })
  
  // 登录点击
  // const bindLoginClick = async () => {
    // dispatch && dispatch({ type: UPDATA_LOADING, loading: true })
    // let res = await get('/api/img')
    // console.log(res);
    // setTimeout(() => { dispatch && dispatch({ type: UPDATA_LOADING, loading: false }) }, 3000);
    // props.history.push('/show')
  // }

  // 用户名、密码、重复密码输入
  const bindUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setUserInfo({...userInfo,username: e.target.value})
    props.bindUserInfo(userInfo)    // 传递数据给父组件
  }
  const bindPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setUserInfo({...userInfo,password: e.target.value})
    props.bindUserInfo(userInfo)    // 传递数据给父组件
  }
  const bindPassword1Change = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setUserInfo({...userInfo,password1: e.target.value})
    props.bindUserInfo(userInfo)    // 传递数据给父组件
  }


  // 保存 input 变量
  const usernameRef = React.useRef({
    userInfo: {
      username: '',
      password: '',
      password1: ''
    }
  })
  React.useEffect(() => { 
    usernameRef.current.userInfo = {
      username: userInfo.username,
      password: userInfo.password,
      password1: userInfo.password1
    }
  },[userInfo])
  
  // dom 元素
  const loginBtnDom = <Button className="login_btn" size="large" onClick={props.loginClick}>登录</Button>
  const registBtnDom = <Button className="login_btn" size="large" onClick={props.registerClick}>注册</Button>
  const surePwdDom = <Input.Password placeholder="请确认密码" size="large" prefix={<LockOutlined />} value={userInfo.password1} onChange={bindPassword1Change} />

  return (
    <div className="login_box">
      <div className="img">
        <img src="https://www.17sucai.com/preview/1673365/2019-06-02/dll/img/img-01.png" alt="图标" />
      </div>
      <Space className="login_box_space" direction="vertical" size="large">
        <Title level={3}>管理员{isLogin ? '登录' : '注册'}</Title>
        <Input placeholder="请输入用户名" size="large" prefix={<UserOutlined />} 
        value={userInfo.username} onChange={bindUsernameChange} />
        <Input.Password placeholder="请输入密码" size="large" prefix={<LockOutlined />} 
        value={userInfo.password} onChange={bindPasswordChange} />
        {isLogin ? null : surePwdDom}
        {isLogin ? loginBtnDom : registBtnDom}
        <Button type="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '没有账号？去注册' : '已有账号？，去登陆'}
        </Button>
      </Space>
    </div>
  )
}
export default LoginBox