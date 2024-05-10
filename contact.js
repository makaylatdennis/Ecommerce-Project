

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const message = document.getElementById('Message');
const email = document.getElementById('email');

form.addEventListener('submit', e =>{
e.preventDefault()
console.log("here")
validateInput();
});

document.getElementById("Submit").addEventListener("click", function(){
    console.log("here")
    validateInput();
})


const setError = (element,message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error')


errorDisplay.innerText = message;
inputControl.classList.add('error');
}








const validateInput = ()=>{
const firstNameValue = firstName.value.trim();
const lastNameValue = lastName.value.trim();
const messageValue = message.value.trim();
const emailValue = email.value.trim();


if(firstNameValue === '') {
    setError(firstName, 'First name is required');
}

if(lastNameValue === '') {
    setError(lastName, 'Last name is required');
}

if(messageValue === '') {
    setError(message, 'Enter a message');
}

if(emailValue === ''){
    setError(email, 'Email is required')
}

};