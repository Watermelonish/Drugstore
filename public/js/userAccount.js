const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
const deleteAccBtn = document.getElementsByClassName('deleteAccBtn')
const changeLoginForm = document.getElementsByClassName('changeLoginBtn')
const changeMailFrom = document.querySelector('.changeMailBtn')
const changePasswordForm = document.querySelector('.changePasswordBtn')
const wrongPassword = document.querySelector(".wrongPasswordMessage")

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })
deleteAccBtn[0].addEventListener('click',async (event) => {
   const idToDelete = event.target.dataset.id
   const response = await fetch(`user`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
       idToDelete
      }),
    });
   window.location.assign('/main')
})
console.log(changeLoginForm[0])

changeLoginForm[0].addEventListener('submit', async (event) => {
  event.preventDefault();
  const {passwordInput, loginInput} = event.target
  const password = passwordInput.value
  const newLogin = loginInput.value

  const response = await fetch(`/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newLogin, password
    }),
  });
  const responseJson = await response.json();
  if (responseJson.isChangeSuccessful){
    window.location.assign('/user')
}
if (responseJson.wrongPassword){
  wrongPassword.innerHTML = "<div class='alert alert-primary' role='alert'> Пароль неверный, логин не был изменён. </div>"
}
})


changeMailFrom.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {passwordInput, mailInput} = event.target
  const password = passwordInput.value
  const newMail = mailInput.value

  const response = await fetch(`/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newMail, password
    }),
  });
  const responseJson = await response.json();
  if (responseJson.isChangeSuccessful){
    window.location.assign('/user')
}
if (responseJson.wrongPassword){
  wrongPassword.innerHTML = "<div class='alert alert-primary' role='alert'> Пароль неверный, Email не был изменён. </div>"
}
})


changePasswordForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {passwordInput, newPasswordInput} = event.target
  const password = passwordInput.value
  const newPassword = newPasswordInput.value

  const response = await fetch(`/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password, newPassword
    }),
  });
  const responseJson = await response.json();
  if (responseJson.isChangeSuccessful){
    window.location.assign('/user')
}
if (responseJson.wrongPassword){
  wrongPassword.innerHTML = "<div class='alert alert-primary' role='alert'> Пароль неверный. Пароль не был изменён. </div>"
}
})