import React, { useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import { GoogleOutlined, MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Login = () => {

  const [email, setEmail] = useState("niroshanikumari758@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const loginForm = () => {
    return(
      <form >
        <div className='form-group'>
          <input 
          type='email' 
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your email'
          autoFocus />
        </div>
      
        <div className='form-group'>
          <input 
          type='password' 
          className='form-control mt-3'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Your password'
          autoFocus />
        </div>

        <Button
        //onClick={handleSubmit}
        type='primary'
        className='mb-3'
        block
        shape='round'
        icon={<MailOutlined/>}
        size='large'
        disabled={!email || password.length < 6}>
          Login with Email/Password
        </Button>
      </form>
    )
    
  }
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-">
          {loading ? (
            <h4 className='text-danger'>Loading...</h4>
            ) : (
              <h4>Login</h4>
            )}
          {loginForm()}

          <Button
            //onClick={googleLogin}
            type='secondary'
            className='mb-3'
            block
            shape='round'
            icon={<GoogleOutlined/>}
            size='large'
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login

