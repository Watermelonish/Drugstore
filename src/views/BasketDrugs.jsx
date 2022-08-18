const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({theUser, newUser}) {
  const pricesArr = theUser.map((a)=> a['Drugs.discountPrice'])
  const sum = pricesArr.reduce(function(a, b) {
     return a + b;
     }, 0)
  return (
       <Layout newUser = {newUser}>
       
          
      <h2>Корзина</h2>
      <div className="basketContainer">
         {theUser.map((drug) => 

  <div className="card w-75" key={`${drug.id}`} id = {`${drug.id}`}>
    <div className="card-body">
      <h5 className="card-title">{`${drug['Drugs.name']}`}</h5>
      <p className="card-text">{`${drug['Drugs.discountPrice'] }руб.`}</p>
      <a href="#" className="btn btn-primary">Удалить товар</a>
    </div>
  </div>

      
      )}

      </div>
    <div className = "basketSum">
      <h2>Итого к оплате:</h2>
      <p>{`${
       sum
      }`} руб.</p>
    </div>
    </Layout>
  );
};