const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({note}) {
  return (
       <Layout>
       
          
      <h2>Вход</h2>
      <form action="/login" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="mail" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <p>{note?(`${note}`):null}</p>
        <button type="submit" className="btn btn-primary">Вход</button>
        </form>
           <h2>Регистрация</h2>
      <form action="/user" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input name="login" type="username" className="form-control" id="exampleInputUserName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="mail" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary register">Регистрация</button>
      </form>
 
    </Layout>
  );
};