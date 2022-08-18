const React = require('react');

const Layout = require('./Layout');

module.exports = function DrugsCards({ drugs}) {

  return (
   <div className = "drugs-cards ">
   {drugs.map((drug) => 
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
  );
};