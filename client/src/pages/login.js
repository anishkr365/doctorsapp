import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import React from 'react'
function Login() {
  const onfinish = (values)=>{
    console.log("Received values from form",values);
  }
  return (
    <div className='authentication'>
      <div className='authentication-form card p-3'>
        <h1 className='card-title'>Hello</h1>
        <Form layout="vertical" onFinish={onfinish}>
          
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button className="Primary-button my-3" htmlType="submit">Login</Button>

          <Link to='/Register' className="anchor mt-2">CLICK HERE TO REGISTER</Link>
          </Form>
      </div>
    </div>
  )
}

export default Login;