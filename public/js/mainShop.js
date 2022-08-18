const main = document.querySelector('main');
const priceChecked = document.querySelector('#flexCheckPrice');
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
      const response = await fetch(`/main`, {
         method: 'POST',
         headers: {
           'Content-type': 'application/json',
         },
         body: JSON.stringify({
          sort
         }),
       });
      const resp = await response.text()
      console.log(resp)
      document.write(resp)
      }
   if (event.target.unchecked){
         console.log(event.target.unchecked)
   window.location.assign('/main')


}})

drugsCollection.addEventListener('click', async (event) =>{
   if (event.target.dataset.id){
      const id = event.target.dataset.id
      const response = fetch(`drug`, {
         method: 'POST',
         headers: {
           'Content-type': 'application/json',
         },
         body: JSON.stringify({
          id
         }),
       });
      //  const responseJson = await response.json();
//   if (responseJson.goRegisterMessage){
    
// }
//    if (responseJson.goRegisterMessage){
//       const newMess = Main.appendChild(document.createElement('div'))
// }
   }   
})


avalilabilityChecked.addEventListener('click', async (event) =>{
   if (event.target.checked){
      console.log(event.target.checked)
      const cards = drugsCollection.children
      
      for (let i = cards.length-1; i>0 ;  i--){
        if (cards[i].getAttribute('data-quantity') == 0){
         cards[i].remove()
        }
      }
      


}else{
   window.location.assign('/main')

}
})
