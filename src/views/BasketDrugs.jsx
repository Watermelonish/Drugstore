const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({theUser}) {
   // console.log(basketDrugs)
  return (
       <Layout>
       
          
      <h2>Корзина</h2>
      <div className="basketContainer">
         {theUser.map((drug) => 

  <div className="card w-75" key="drug.id">
    <div className="card-body">
      <h5 className="card-title">{`${drug['Drugs.name']}`}</h5>
      <p className="card-text">{`${drug['Drugs.discountPrice'] }руб.`}</p>
      <a href="#" className="btn btn-primary">Удалить товар</a>
    </div>
  </div>


         )}
      </div>
 
    </Layout>
  );
};