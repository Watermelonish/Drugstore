// const basketContainer = document.querySelector('.basketContainer')
// // console.log('basketContainer', basketContainer);
// // const deleteBasket = document.getElementsByClassName('deleteBasket')
// // console.log('deleteBasket--->', deleteBasket);

// basketContainer.addEventListener('click',async (event) => {
//     event.preventDefault();
//     const idToDelete = event.target.id
//     // console.log('idTO---->', idToDelete);
//     const response = await fetch('/drug', {
//        method: 'DELETE',
//        headers: {
//          'Content-type': 'application/json',
//        },
//        body: JSON.stringify({
//         idToDelete
//        }),
//      });
//     let drugs = basketContainer.children
//     console.log(drugs[0].getAttribute('id'))
//     for (let i = 0; i < drugs.length; i++){
//       if (drugs[i].getAttribute('id') == idToDelete){
//         drugs[i].remove()
//         break;
//       }
//     }
//  })

