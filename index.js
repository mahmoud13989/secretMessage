// const {hash} = window.location;
// const message = atob(hash.replace('#',''));
// if (message){
//   document.querySelector('#form-card').classList.add('hide');
//   document.querySelector('#message-show').classList.remove('hide');
//   document.querySelector('h1').innerHTML = message;
// }
// document.querySelector('form').addEventListener('submit',event=>{
// event.preventDefault();
//   document.querySelector('#form-card').classList.add('hide');
//   document.querySelector('#secret-card').classList.remove('hide');
//   const messageInput = document.querySelector('#message-input');
//   const linkInput= document.querySelector('#link-input')
//   linkInput.value = `${window.location}#${btoa(messageInput.value)}`;
//   linkInput.select();
// })
const {hash} = window.location;
const message = atob(hash.replace('#',''));
if (message){
    document.querySelector('.message-show').classList.remove('hide');
    document.querySelector('#ordinary-card').classList.add('hide');
    document.querySelector('h1').innerHTML = message;
}

const mainForm = document.querySelector('#main-form');
mainForm.addEventListener('submit', event=> {
    event.preventDefault();
    const ordinaryCard = document.querySelector('#ordinary-card');
    const encryptedCard = document.querySelector('#encrypted-card');
    const ordinaryInput = document.querySelector('#ordinary-input');
    const encryptedInput = document.querySelector('#encrypted-input');

    encryptedInput.value = `${window.location}#${btoa(ordinaryInput.value)}`;
    ordinaryCard.classList.add('hide');
    encryptedCard.classList.remove('hide'); 
    encryptedInput.select();
})