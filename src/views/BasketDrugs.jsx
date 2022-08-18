const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({theUser, newUser}) {

  const pricesArr = theUser.map((a)=> a['Drugs.discountPrice'])
  const sum = pricesArr.reduce(function(a, b) {
     return a + b;
     }, 0)

  return (
       <Layout newUser = {newUser}>
        <script defer src="/js/orderBtn.js" />

          
      <h2>Корзина</h2>
      <div className="basketContainer">
         {theUser[0]['Drugs.name'] === null? (
          <p>Здесь пока пусто. <a defer href = "/main">к покупкам</a></p>
         ):(
          theUser.map((drug) => 

  <div className="card w-75" key={`${drug.id}`} id = {`${drug.id}`}>
    <div className="card-body">
      <h5 className="card-title">{`${drug['Drugs.name']}`}</h5>
      <p className="card-text">{`${drug['Drugs.discountPrice'] }руб.`}</p>
      <a href="#" className="btn btn-primary">Удалить товар</a>
    </div>
  </div>

      
      ))}

      </div>
    <div className = "basketSum">
      <h2>Итого к оплате:</h2>
      <p>{`${
       sum
      }`} руб.</p>
    </div>
    <button type = "button" className = "orderBtn btn btn-success" data-sum = {`${sum}`}>Оформить заказ</button>
    </Layout>
  );
};