import * as React from 'react';
import { Typography, Space } from "antd";
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './Home.scss'
import LoginBox from '../../components/loginBox/LoginBox';

const { Title } = Typography

export interface HomeProps extends RouteComponentProps {
  
}
 
export interface HomeState {
  userInfo: UserInfo
}

interface UserInfo {
  username: string
  password: string
  password1?: string
}
 
class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      userInfo: {
        username: '',
        password: '',
        password1: ''
      }
    };
  }

  // 登录点击事件
  bindLoginClick = () => {
    this.props.history.push('/show')
  }

  // 注册点击事件
  bindRegisterClick = () => {
    this.props.history.push('/show')
  }

  // 接收子组件数据userInfo
  bindUserInfo = (userInfo: UserInfo) => {
    this.setState({ userInfo })
  }

  render() { 
    return ( 
      <div className='home'>
        <Space direction="vertical" size={50}>
          <Title className="title">家校通后台管理</Title>
          <div className="login_box_nav">
            <LoginBox
            loginClick={this.bindLoginClick}
            registerClick={this.bindRegisterClick}
            bindUserInfo={this.bindUserInfo} />
          </div>
        </Space>
      </div>
     );
  }
}
 
export default withRouter(Home as any);