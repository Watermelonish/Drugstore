const React = require('react');
const Layout = require('./Layout');
const Home = require('./Home');


module.exports = function Login({  }) {
  return (
    <Layout>
<div className="wrapper">
  <div className="title-text">
    <div className="title login">
      Login Form
    </div>
    <div className="title signup">
      Signup Form
    </div>
  </div>
  <div className="form-container">
    <div className="slide-controls">
      <input type="radio" name="slide" id="login" defaultChecked />
      <input type="radio" name="slide" id="signup" />
      <label htmlFor="login" className="slide login">Login</label>
      <label htmlFor="signup" className="slide signup">Signup</label>
      <div className="slider-tab" />
    </div>
    <div className="form-inner">
      <form action="/login" method="POST" className="login">
        <div className="field">
          <input name="mail" type="text" placeholder="Email Address" required />
        </div>
        <div className="field">
          <input name="login" type="text" placeholder="Login" required />
        </div>

        <div className="field">
          <input name="password" type="password" placeholder="Password" required />
        </div>
        <div className="pass-link">
          
          <a href="#">Forgot password?</a>
        </div>
        <div className="field btn">
          <div className="btn-layer" />
          <input type="submit" defaultValue="Login" />
        </div>
        <div className="signup-link">
          Not a member? <a href ="#">Signup now</a>  
        </div>
      </form>
      <form action="#" className="signup">
        <div className="field">
          <input name="mail" type="text" placeholder="Email Address" required />
        </div>

        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Confirm password" required />
        </div>
        <div className="field btn">
          <div className="btn-layer" />
          <input type="submit" defaultValue="Signup" />
        </div>
      </form>
    </div>
  </div>
</div>

    </Layout>
  );
};
