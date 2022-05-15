import throttle from 'lodash.throttle'

const storageKey = 'feedback-from-state';

const formData = {};
console.log(formData);


const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(evt) {
    evt.preventDefault();
    if (form.email.value === "" || form.message.value === "") {
        alert("Поля должны быть заполнены!");
        return false;
      }

    evt.currentTarget.reset();
    localStorage.removeItem(storageKey);
    console.log(formData);
}

function onFormInput(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(storageKey,JSON.stringify(formData));
}

function populateForm(){
    const savedMessage = JSON.parse(localStorage.getItem(storageKey));
    
    if(savedMessage){

        form.email.value = savedMessage.email;
        form.message.value = savedMessage.message;
        
    }
}