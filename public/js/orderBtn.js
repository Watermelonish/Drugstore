console.log('hi')

const buyBtn = document.querySelector('.orderBtn')

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
})

