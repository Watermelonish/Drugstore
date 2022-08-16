const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ drugs }) {
   drugs.map((drug) => console.log(drug.dicountPrice, 'AAAAAAAAAAAAAA'))
  return (
    <Layout>
      <div className = "main d-flex flex-column justify-content-start">
<div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Сначала дешевые
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Только товары в наличии
    </label>
  </div>
</div>


<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Предложения недели!
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Предложения следующей недели!
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  </div>
<div className = "drugs-cards ">
   {drugs.map((drug) => 
      <div className="card mb-2" style={{maxWidth: 2000,}} key={`${drug.id}`}>
  <div className="row g-0 ">
    <div className="col-md-2">
      <img src={`/img/${drug.image}`} style = {{maxHeight: 110}} className="img-fluid rounded-start" alt="{`${drug.name}`}" /><img/>
    </div>
    <div className="col-md-7">
      
      <div className="card-body d-flex justify-content-evenly">
         <div>
            <h5 className="card-title ">{`${drug.name}`}</h5>
            <p className="card-text"><s>{`${drug.price}`}</s>           <b>{`${drug.discountPrice}`} руб.</b></p>
            <p className="card-text"><small className="text-muted">Осталось {`${drug.quantity}`} ед.</small></p>

        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
               <button type="button" class="btn ">купить</button>
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
