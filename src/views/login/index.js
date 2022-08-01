import React from "react";
import { Input } from 'antd';
import '../../styles/index.less';
class Index extends React.Component{
render(){
    return (
        <div className="app-container">
         <div className="login">
            <h5>密码登录</h5>
        
         <Input placeholder="请输入手机号" />
         <Input placeholder="请输入密码" />
         </div>
        </div>
    )
}

 }
 
 export default Index;
 