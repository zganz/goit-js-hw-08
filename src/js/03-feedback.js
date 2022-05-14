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

    evt.currentTarget.reset();
    localStorage.removeItem(storageKey);
}

function onFormInput(evt){
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(storageKey,JSON.stringify(formData));
}

function populateForm(){
    const savedMessage = JSON.parse(localStorage.getItem(formData));
    if(savedMessage){
        form.value = savedMessage;
    }
}