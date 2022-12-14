import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from 'react-hot-toast'
import React from 'react'
function Login() {
  const navigate = useNavigate();
  const onFinish = async(values)=>{
   try{
   const response = await axios.post('/api/user/login',values);
   if(response.data.success){
    toast.success(response.data.message);
    
    localStorage.setItem("token",response.data.data);
    navigate("/");
   }else{
    toast.error(response.data.message)
   }
   }
   catch(error){
    toast.error("something went wrong")
    console.log(error)
   }
  }
  return (
    <div className='authentication'>
      <div className='authentication-form card p-3'>
        <h1 className='card-title'>Hello</h1>
        <Form layout="vertical" onFinish={onFinish}>
          
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