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
      
   }

})

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