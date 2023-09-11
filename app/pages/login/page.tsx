import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './login.css';
import '@/app/globals.css';

export default function Page() {
  return (
    <div className="centered-container">
      <div className="tile">
        <p className='heading'>Login</p>
        <form>
          <div className="form-group">
            <div className="input-with-icon">
              <UserOutlined />
              <input type="text" id="username" name="username" placeholder="Username" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-with-icon">
              <LockOutlined />
              <input type="password" id="password" name="password" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <a href="#">Forgot password?</a>
          </div>
        </form>
        <div className='button'>
        <Button className='loginButton'>
          LOGIN
        </Button>
        </div>
        <div className='signup'>
            Not registerd yet?<a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
