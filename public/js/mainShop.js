const main = document.querySelector('main');
const priceChecked = document.querySelector('#flexCheckPrice');
const toastLiveExample = document.getElementById('liveToast')
const productToBuy = document.querySelector('.productToBuy')
const avalilabilityChecked = document.querySelector('#flexCheckAvailability');
const drugsCollection = document.querySelector('.drugs-cards')
let width = window.innerWidth


window.addEventListener('resize', async (event)=> {
   width = window.innerWidth
   console.log(width)
   
   })
   const response = fetch(`setWidth`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
       width
      }),
    });


priceChecked.addEventListener('click', async (event) =>{
   if (event.target.checked){
      const sort = true
      const response = await fetch(`/sortedMain`, {
         method: 'GET',

         // headers: {
         //   'Content-type': 'application/json',
         // },
         // body: JSON.stringify({
         //  sort
         // }),
       });
      const resp = await response.json()
      console.log(resp)
      drugsCollection.innerHTML = ''
       if (resp){
         for (let drug of resp){
            let tag = document.createElement("div");
           let newDiv =  drugsCollection.appendChild(tag)
           tag.innerHTML = `      <div className="card mb-2" style={{maxWidth: 800, minWidth: 400}} key='${drug.id}' data-quantity = '${drug.quantity}' data-price = '${drug.discountPrice}'>
           <div className="row g-10 ">
             <div className="lglglg">
             <div className="col-md-2">
               <img src='/img/${drug.image}' style = {{maxHeight: 200}} className="img-fluid rounded-start" alt='${drug.name}' /><img/>
             </div>
             <div className="col-md-4">
               
                 <div className="textiki">
                
                     <h5 className="card-title">${drug.name}</h5>
                     <p className="card-text"><s>${drug.price}</s>           <b>${drug.discountPrice} руб.</b></p>
                     <p className="card-text"><small className="text-muted">Осталось ${drug.quantity} ед.</small></p>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div className="card-body ">
                 <div className="d-grid gap-2 d-md-flex ">
                        <button type="button" class="btn btn-success" data-name = '${drug.name}' data-id = '${drug.id}'>купить</button>
                 </div>
                 </div>
               
             </div>
           </div>
           
         </div>`
         }
       }
      }
   if (event.target.unchecked){
        
   window.location.assign('/main')


}})

drugsCollection.addEventListener('click', async (event) =>{
   if (event.target.dataset.id){
      const id = event.target.dataset.id
      const name = event.target.dataset.name
      const response = fetch(`drug`, {
         method: 'POST',
         headers: {
           'Content-type': 'application/json',
         },
         body: JSON.stringify({
          id
         }),
       });
       const toast = new bootstrap.Toast(toastLiveExample)

       toast.show()
      //  const responseJson = await response.json();
//   if (responseJson.goRegisterMessage){
    
// }
//    if (responseJson.goRegisterMessage){
//       const newMess = Main.appendChild(document.createElement('div'))
// }
   productToBuy.innerHTML = name
   }   
})


avalilabilityChecked.addEventListener('click', async (event) =>{
   if (event.target.checked){
      console.log(event.target.checked)
      const cards = drugsCollection.children
      
      for (let i = cards.length-1; i>=0 ;  i--){
        if (cards[i].getAttribute('data-quantity') == 0){
         cards[i].remove()
        }
      }
      


}else{
   window.location.assign('/main')

}
})
