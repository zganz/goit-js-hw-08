import throttle from 'lodash.throttle'

const storageKey = 'feedback-from-state';



let formData = {};
const storage = localStorage.getItem(storageKey);
if(storage){
    formData = JSON.parse(storage);
}


const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(evt) {
    evt.preventDefault();
    if (form.email.value === "" || form.message.value === "") {
        alert("Поля должны быть заполнены!");
        return;
      }
      console.log(formData);
    formData = {};
    evt.currentTarget.reset();
    localStorage.removeItem(storageKey);
}

function onFormInput(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(storageKey,JSON.stringify(formData));
}


function populateForm(){
    const savedMessage = JSON.parse(localStorage.getItem(storageKey));
    if (!savedMessage)
        return;
    if(savedMessage.email){

        form.email.value = savedMessage.email;   
    }
    if (savedMessage.message){
        form.message.value = savedMessage.message;
    }
}
