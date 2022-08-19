const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ drugs, newUser, drugsWeek }) {
  const drugsWeek1 = [drugsWeek[0], drugsWeek[1], drugsWeek[2]]
  const drugsWeek2 = [drugsWeek[3], drugsWeek[4], drugsWeek[5]]
  console.log(drugsWeek, 'aaADAAAAAAAAAAA')
  return (
    <Layout newUser = {newUser}>

      <div className = "main d-flex flex-column justify-content-start">
<div>
  <div className="form-check ">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckPrice" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Сначала дешевые
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckAvailability"  />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Только товары в наличии
    </label>
  </div>
</div>

<div class = "mainContainer"></div>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Предложения недели!
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <div className = "drugs-cards-Week ">
   {drugsWeek1.map((drug) => 
      <div className="card mb-2" style={{maxWidth: 700, minWidth: 400}} key={`${drug.id}`} data-quantity = {`${drug.quantity}`} data-price = {`${drug.discountPrice}`}>
  <div className="row g-12 ">
    <div className="col-md-2">
      <img src={`/img/${drug.image}`} style = {{maxHeight: 200}} className="img-fluid rounded-start" alt="{`${drug.name}`}" /><img/>
    </div>
    <div className="col-md-4">
      
      <div className="card-body ">
         <div>
            <h5 className="card-title">{`${drug.name}`}</h5>
            <p className="card-text"><s>{`${drug.price}`}</s>           <b>{`${drug.discountPrice}`} руб.</b></p>
            <p className="card-text"><small className="text-muted">Осталось {`${drug.quantity}`} ед.</small></p>

        </div>
        <div className="d-grid gap-2 d-md-flex ">
               <button type="button" class="btn btn-success" data-id = {`${drug.id}`}>купить</button>
        </div>
      </div>
      
    </div>
    
  </div>
  
</div>

   )
   
   }
</div>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Предложения следующей недели!
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <div className = "drugs-cards-Week2 ">
   {drugsWeek2.map((drug) => 
      <div className="card mb-2" style={{maxWidth: 700, minWidth: 400}} key={`lol`} data-quantity = {`${drug.quantity}`} data-price = {`${drug.discountPrice}`} id='lol'>
  <div className="row g-12 ">
    <div className="col-md-2">
      <img src={`/img/${drug.image}`} style = {{maxHeight: 200}} className="img-fluid rounded-start" alt="{`${drug.name}`}" /><img/>
    </div>
    <div className="col-md-4">
      
      <div className="card-body ">
         <div>
            <h5 className="card-title">{`${drug.name}`}</h5>
            <p className="card-text"><s>{`${drug.price}`}</s>           <b>{`${drug.discountPrice}`} руб.</b></p>
            <p className="card-text"><small className="text-muted">Осталось {`${drug.quantity}`} ед.</small></p>

        </div>
        <div className="d-grid gap-2 d-md-flex ">
               <button type="button" class="btn btn-success" data-id = {`${drug.id}`}>купить</button>
        </div>
      </div>
      
    </div>
    
  </div>
  
</div>

   )
   
   }
</div>
      </div>
    </div>
  </div>
  </div>

  
<div className = "drugs-cards ">
   {drugs.map((drug) => 
      <div className="card mb-2" style={{maxWidth: 800, minWidth: 400}} key={`${drug.id}`} data-quantity = {`${drug.quantity}`} data-price = {`${drug.discountPrice}`}>
  <div className="row g-10 ">
    <div className="lglglg">
    <div className="col-md-2">
      <img src={`/img/${drug.image}`} style = {{maxHeight: 200}} className="img-fluid rounded-start" alt="{`${drug.name}`}" /><img/>
    </div>
    <div className="col-md-4">
      
        <div className="textiki">
       
            <h5 className="card-title">{`${drug.name}`}</h5>
            <p className="card-text"><s>{`${drug.price}`}</s>           <b>{`${drug.discountPrice}`} руб.</b></p>
            <p className="card-text"><small className="text-muted">Осталось {`${drug.quantity}`} ед.</small></p>
            </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card-body ">
        <div className="d-grid gap-2 d-md-flex ">
               <button type="button" class="btn btn-success" data-name = {`${drug.name}`} data-id = {`${drug.id}`}>купить</button>
        </div>
        </div>
      
    </div>
  </div>
  
</div>

   )
   
   }
</div>
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto productToBuy"></strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Товар был добавлен в корзину
    </div>
  </div>
</div>
</div>

    </Layout>
  );
};
