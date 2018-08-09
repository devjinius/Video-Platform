import React from 'react';
import { Grid, Alert, Button } from 'react-bootstrap';
import PageTemplate from 'components/PageTemplate/PageTemplate';

export default () => (
  <>
  <PageTemplate>
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title">
            Login
      </span>
          <div className="wrap-input100">
            <input className="input100 input-login" type="text" name="email" autoFocus={true} />
            <span className="focus-input100" data-placeholder="Email" ></span>
          </div>
          <div className="wrap-input100">
            <input className="input100 input-login" type="password" name="password" />
            <span className="focus-input100" data-placeholder="Password"></span>
          </div>
          <div className="container-login-form-btn">
            <div className="wrap-login-form-btn">
              <div className="login-form-bgbtn"></div>
              <button className="login-form-btn button-login">
                Login
          </button>
            </div>
          </div>

          <div className="login-bottom-text">
            <span className="login-bottom-span">
              Don’t have an account?
        </span>

            <a href="#">
              Sign Up
        </a>
          </div>
        </form>
      </div>
    </div>
  </PageTemplate>
  </>
);
