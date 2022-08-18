const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ drugs, newUser }) {
   drugs.map((drug) => console.log(drug.dicountPrice, 'AAAAAAAAAAAAAA'))
  return (
    <Layout newUser = {newUser}>
      <script defer src="/js/mainShop.js" />

      <div className = "main d-flex flex-column justify-content-start">
<div>
  <div className="form-check ">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckPrice" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Сначала дешевые
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckAvailability" defaultChecked />
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
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  </div>

  
<div className = "drugs-cards ">
   {drugs.map((drug) => 
      <div className="card mb-2" style={{maxWidth: 700, minWidth: 400}} key={`${drug.id}`}>
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

    </Layout>
  );
};
