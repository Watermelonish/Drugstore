console.log('hi')
const OrderDelivering = document.querySelector('.OrderDelivering')
const buyBtn = document.querySelector('.orderBtn')
const basketContainer = document.querySelector('.basketContainer')
const sumToShow = document.querySelector('.sumToShow')
buyBtn.addEventListener('click', async (event) => {
  const sum = event.target.dataset.sum
  const response = fetch(`order`, {
   method: 'POST',
   headers: {
     'Content-type': 'application/json',
   },
   body: JSON.stringify({
    sum
   }),
 })
 const resp = await (await response).text()
 if (resp){
  OrderDelivering.innerHTML = `Покупка на ${sum} руб. `
  const toast = new bootstrap.Toast(toastLiveExample)
  sumToShow.remove()
  toast.show()
  basketContainer.remove()
 }
 
}

)

basketContainer.addEventListener('click',async (event) => {
  event.preventDefault();
  const idToDelete = event.target.id
  // console.log('idTO---->', idToDelete);
  const response = await fetch('/drug', {
     method: 'DELETE',
     headers: {
       'Content-type': 'application/json',
     },
     body: JSON.stringify({
      idToDelete
     }),
   });
   window.location.assign('/drug')
  // let drugs = basketContainer.children
  // console.log(drugs[0].getAttribute('id'))
  // for (let i = 0; i < drugs.length; i++){
  //   if (drugs[i].getAttribute('id') == idToDelete){
  //     drugs[i].remove()
  //     break;
  //   }
  // }
})



