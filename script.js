/* javascript code to sent details to google sheet*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbx8fBihjT7OJ3ZA1sX-k05K4vsIrmtdEZsfLwtfwzkbJwjcweowqMkXc7QNN_FtsTMLhg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})



function validate(){
    alert("Message Sent Succesfully")
}

/* Form Validation Script*/

var nameError=document.getElementById("name-error");
var numberError=document.getElementById("number-error");
var emailError=document.getElementById("email-error");
var subjectError=document.getElementById("subject-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");


// Javascript Function for validating name

function validateName(){
  var name=document.getElementById("name").value;
  if (name.length==0){
    nameError.innerHTML="Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Write Full name";
    return false;
  }
  nameError.innerHTML='<i class="bi bi-check-circle-fill"></i>';
  return true;
}

// Javascript Function for validating number

function validateNumber(){

  var number=document.getElementById("number").value;

  if(number.length==0){
    numberError.innerHTML="Mobile Number is required";
    return false;
  }
  if(number.length!=10){
    numberError.innerHTML="Mobile Number should be 10 digits";
    return false;
  }
  
  numberError.innerHTML='<i class="bi bi-check-circle-fill"></i>';
  return true;
}

//javascript function for validating email

function validateEmail(){

  var email=document.getElementById("email").value;

  if (email.length==0){
    emailError.innerHTML="Email is required";
    return false;
  }
  if (!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    emailError.innerHTML="Invalid Email";
    return false;
  }
  emailError.innerHTML='<i class="bi bi-check-circle-fill"></i>';
  return true;
}

//function for validating subject

function validateSubject(){
  var subject=document.getElementById("subject").value;
  if (subject.length==0){
    subjectError.innerHTML="Subject is required";
    return false;
  }
  if (subject.length<=3){
    subjectError.innerHTML="Minimum 3 characters required";
    return false;
  }
  subjectError.innerHTML='<i class="bi bi-check-circle-fill"></i>';
  return true;

}

//function for validating message

function validateMessage(){
  var message=document.getElementById("message").value;
  var required=10;
  var left=required - message.length;
  if(left>0){
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML='<i class="bi bi-check-circle-fill"></i>';
  return true;
}

//Function for validating form

function validateForm(){
  if (!validateName() || !validateNumber() || !validateEmail() || !validateSubject() || !validateMessage()){
    submitError.style.display ="block";
    submitError.innerHTML=" Please Fix Error to submit";
    setTimeout(function(){submitError.style.display ="none";}, 3000);
    return false;
  }
  alert("Message Sent Succesfully")
  return true;
}