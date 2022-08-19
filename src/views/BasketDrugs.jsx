const React = require('react');

const Layout = require('./Layout');

module.exports = function Login({theUser, newUser}) {

  const pricesArr = theUser.map((a)=> a['Drugs.discountPrice'])
  const sum = pricesArr.reduce(function(a, b) {
     return a + b;
     }, 0)

  return (
       <Layout newUser = {newUser}>
                
        <script defer src="/js/basketDelete.js" />

        <script defer src="/js/orderBtn.js" />


          
      <h2>Корзина</h2>
      <div className="basketContr">
         {theUser[0]['Drugs.name'] === null? (
          <p>Здесь пока пусто. <a defer href = "/main">к покупкам</a></p>
         ):(
          theUser.map((drug) => 
          <div className="basketContainer">
  <div className="card w-75" key={`${drug.id}`} id = {`${drug.id}`}>
    <div className="card-body">
      <h5 className="card-title">{`${drug['Drugs.name']}`}</h5>
      <p className="card-text">{`${drug['Drugs.discountPrice'] }руб.`}</p>
      <a href="#" id={`${drug['Drugs.id']}`} className="btn btn-primary deleteBasket">Удалить товар</a>
    </div>
    </div>
  </div>

      
      ))}

      </div>
    <div className = "basketSum">
      <h2>Итого к оплате:</h2>
      <p className = "sumToShow">{`${
       sum
      }`} руб.</p>
    </div>
    <button type = "button" className = "orderBtn btn btn-success" data-sum = {`${sum}`}>Оформить заказ</button>
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="toast-header">
      <strong className="me-auto OrderDelivering"></strong>
      <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div className="toast-body">
      Товары уже едут к вам
    </div>
  </div>
</div>
    </Layout>
  );
};