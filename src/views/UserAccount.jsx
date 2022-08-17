const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ theUser }) {
  return (
    <Layout>
      <div className = "main d-flex flex-column justify-content-start userMain">
<h1>Личная информация</h1>
<div className="container text-right">
  <div className="row justify-content-start">
    <div className="col-3">
      <p>Логин</p>
      <p>Почта</p>
      <p>Пароль</p>

    </div>
    <div className="col-4">
     <p>{theUser.login}</p> 
      <p>{theUser.mail}</p>
      <p>{theUser.password}</p>
    </div>
  </div>
</div>
<div class="btn-group " role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Левая</button>
  <button type="button" class="btn btn-outline-primary">Средняя</button>
  <button type="button" class="btn btn-outline-primary">Правая</button>
</div>
<div>
<button type="button" class="btn btn-outline-primary">Удалить профиль</button>
</div>
</div>
    </Layout>
  );
};
