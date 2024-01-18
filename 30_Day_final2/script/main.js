function validButton(){
    const nameRegex = /^[a-zA-Z]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const teliphoneReges = /^\d{11}$/;

const firstName=document.getElementById('firstName').value
const lastName=document.getElementById('lastName').value
const password=document.getElementById('password').value
const email=document.getElementById('email').value
const telephone=document.getElementById('telephone').value
const bio=document.getElementById('bio').value

errorMessage('firstNameError', !nameRegex.test(firstName), 'First name ust be alphabetic and contain 3-16 characters')
errorMessage('lastNameError', !nameRegex.test(lastName), 'Last name ust be alphabetic and contain 3-16 characters')
errorMessage('emailError', !emailRegex.test(email), 'Email must be a valid address,e.g.example@xmaple.com')
errorMessage('passwordError', !passwordRegex.test(password), 'Password must be alphabetic (@_and-are also allowed) and between 6-20 charecter')
errorMessage('telephoneError', !teliphoneReges.test(telephone), 'A valid telephone number(11 digits and  333-333-3334')
errorMessage('bioError', !bio.trim(), 'Bio must contain only lowercase letters,underscores,hyperns.')


function errorMessage(id,condition,msg){
    const errrorMessageP=document.getElementById(id)
    errrorMessageP.textContent=condition? msg:''
}
}
function valid(){
    const errors=document.querySelectorAll('.error-message')
    for(const error of errors){
        if(error.textContent !=="")
        return false
    }
    return true
}


