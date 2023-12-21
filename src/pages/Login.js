import React, { useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import { GoogleOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {

  const inputStyle = {
    border: '1px solid #ccc',
    outline: 'none',
    padding: '8px',
    // Add any other styles as needed
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginForm = () => {
    return(
      <form >
        <div className='form-group'>
          <label>Email</label>
          <input 
          type='email' 
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your email'
          autoFocus />
        </div>
      
        <div className='form-group mt-3'>
          <label>Password</label>
          <input 
          type='password' 
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Your password'
          autoFocus />
        </div>

        <Button
          //onClick={handleSubmit}
          className='mb-3 mt-3'
          block
          size='large'
          disabled={!email || password.length < 6}
          style={{ backgroundColor: 'red', borderColor: 'red', color: 'white' }}
        >
          Log in
        </Button>
      </form>
    )
    
  }
  return (
    <Card className="col-md-4 offset-md-3 mx-auto p-5">
      {loading ? (
        <h4 className='text-danger text-center'>Loading...</h4>
        ) : (
          <>
            <h4 className='text-bold text-center'>OrelBuy</h4>
            <p className='text-bold text-center'>Hello, Welcome to OrelBuy</p>
          </>
        )}
      {loginForm()}
      <div className='text-center mb-3'>
        <p>
          Don't have and account?{' '}
          <span>
            <Link>Sign up</Link>
          </span>
        </p>
        <p>
          Forgot your password?{' '}
          <span>
            <Link>Reset it</Link>
          </span>
        </p>
      </div>
    </Card>
  );
}

export default Login

