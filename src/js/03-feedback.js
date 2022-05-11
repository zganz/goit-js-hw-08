import _ from 'lodash';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let data = {email:"", message:""};
let saveData = _.throttle(function (key,value){
    data[key] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
console.log(data);
},500);
email.addEventListener('input',function(){
    saveData('email', this.value);
});
message.addEventListener('input',function(){
    saveData('message', this.value);
});
const formData = JSON.parse(localStorage.getItem("feedback-form-state"));
if(formData){
    email.value = formData.email;
    message.textContent = formData.message;
}
console.log(formData);

form.addEventListener('submit',function(){
    data = {email:"", message:""};
    localStorage.setItem("feedback-form-state", JSON.stringify(data));

})
