

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const message = document.getElementById('Message');
const email = document.getElementById('email');

form.addEventListener('submit', e =>{ //this portion of code stops the form from being submitted as normal 
e.preventDefault()
console.log("here")
validateInput();
});

document.getElementById("Submit").addEventListener("click", function(){
    console.log("here") // listens for click then runs validateInput function
    validateInput();
})


const setError = (element,message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error') // selecting where error message will be displayed


errorDisplay.innerText = message;
inputControl.classList.add('error');
}








const validateInput = ()=>{
const firstNameValue = firstName.value.trim(); // trim method is used to remove white space
const lastNameValue = lastName.value.trim(); //when validating the form we must get rid of whitespace to prevent the possibility of the form accepting white space as a valid entry
const messageValue = message.value.trim();
const emailValue = email.value.trim();


if(firstNameValue === '') {
    setError(firstName, 'First name is required'); // if fields are empty error message will appear
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