import React from "react";
import useLogin from "../hooks/useLogin";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";

function Login() {
    const {error , loading , loginUser } = useLogin()
    const handleLogin = async (values) => {
        await loginUser(values)
    }
  return (
    <Card className='form-container'>
        <div  className="flex-container">
    {/**form */}
    <Flex gap='large' align='center'>


{/***image */}
<Flex flex={1} >
<img 
className='auth-image'
src='https://th.bing.com/th/id/R.f3849fca66d143332683fa74ccbc3413?rik=T6IwDsVacjpoEw&pid=ImgRaw&r=0'/>
</Flex>


<Flex vertical flex={1} >


 <h1 className="authtitle font-primary text-[45px]"> Sign In </h1>


<Typography.Title type='secondary' strong className='slogan' >
  Unlock you world
</Typography.Title>


<Form layout='vertical'
onFinish={handleLogin} 
autoComplete='off'
className="form"
>
      


      <Form.Item label="Email"
      name="email" rules={[{
          required : true,
          message : "please input your  Email"
      },
  {
      type: 'email' , 
      message: 'The input is not valid Email'
  }
  ]}
      >
      <Input className="authinput" size='large' placeholder='Enter your  email' />
      </Form.Item>




      <Form.Item label="Password"
      name="password" rules={[{
          required : true,
          message : "please input your password"
      }]}
      >
      <Input.Password size='large'  placeholder='Enter your password' />
      </Form.Item>



  
{error && (<Alert description={error} 
type='error'
showIcon closable className='alert' />) 

}
<div  className="button-container">
<Form.Item>
<Button
type={loading ? '' : 'primary'}  
htmlType='submit'
size='large'
className='btnL'
>
{loading ? <Spin /> : 'Sign In'} 
</Button>
</Form.Item>



      
      <Form.Item>
          <Link to="/register">
          <Button 
          size='large'
          className='btnL'
          >Created Account</Button>
          </Link>
         
      </Form.Item>
</div>

</Form>

</Flex>


</Flex>

        </div>
    
    </Card>
  )
}

export default Login