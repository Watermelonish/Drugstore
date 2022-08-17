const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ theUser }) {
  return (
    <Layout>
      <script defer src="/js/userAccount.js" />
      <div className = "main justify-content-start userMain">
<h1>Личная информация</h1>
<div className = "wrongPasswordMessage"></div>
<div className="container text-right">
  <div className="row justify-content-start">
    <div className="col-3">
      <p>Логин</p>
      <p>Почта</p>

    </div>
    <div className="col-4">
     <p>{theUser.login}</p> 
      <p>{theUser.mail}</p>
    </div>
    <div className="col-4">
      <div className = "collapseLogin">
  <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    изменить логин
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <form className = "changeLoginBtn">
      <p>Введите пароль</p>
    <input name = "passwordInput"           type="text">
      </input>
      <p>Введите новое имя</p>
      <input name = "loginInput"           type="text">
      </input>
      <button className = "btn btn-primary">
        Изменить Логин
      </button>
    </form>
  </div>
</div>
</div>

<div className = "collapseLogin">
  <div>
  <p>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMail" aria-expanded="false" aria-controls="collapseMail">
      изменить Email
    </button>
  </p>
  <div className="collapse" id="collapseMail">
    <div className="card card-body">
      <form className="changeMailBtn">
        <p>Введите пароль</p>
        <input name="passwordInput" type="text" />
        <p>Введите новый Email</p>
        <input name="mailInput" type="text" />
        <button className="btn btn-primary" type="submit">
          Изменить Email
        </button>
      </form>
    </div>
  </div>
</div>

</div>

<div className = "collapsePassword">
  <div>
  <p>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePassword" aria-expanded="false" aria-controls="collapsePassword">
      изменить пароль
    </button>
  </p>
  <div className="collapse" id="collapsePassword">
    <div className="card card-body">
      <form className="changePasswordBtn">
        <p>Введите старый пароль</p>
        <input name="passwordInput" type="text" />
        <p>Введите новый пароль</p>
        <input name="newPasswordInput" type="text" />
        <button className="btn btn-primary" type="submit">
          изменить пароль
        </button>
      </form>
    </div>
  </div>
</div>

</div>
    </div>
  </div>
</div>

<div className = "deleteModal">
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  удалить аккаунт
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Вы действительно хотите удалить свой аккаунт? </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">закрыть окно</button>
        <button type="button" class="btn deleteAccBtn btn-danger" data-id ={` ${theUser.id}`}>удалить</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    </Layout>
  );
};
