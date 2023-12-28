var nameError = document.getElementById('name-error');
var phoneError  = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function onvalidateName(){
  var name=document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML='Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML='Write Full Name';
    return false;

  }
  nameError.innerHTML='valid';
  return true;
}

function onvalidateNumber(){
  var phone =document.getElementById('phone-number').value;
  if(phone.length == 0){
    phoneError.innerHTML='Phone Number is Required';
    return false;
  }
  if(phone.length !== 10){
    phoneError.innerHTML = 'It Required 10 Digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Only  Digits';
    return false;
  }
  phoneError.innerHTML = 'Move To the Next Step';
  return true;


}




function onvalidateMail(){
  var mail = document.getElementById('email').value;
  
  if(mail.length == 0){
    emailError.innerHTML='Email is Required';
    return false;
  }
  if(mail.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-a]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Email is Invalid';
    return false;
  }
  emailError.innerHTML = 'Move to the Next Step';
  return true;
 
}



function onvalidateMessage(){
  var text = document.getElementById('Text').value;
  var required = 30;
  var left = required - text.length;
  if(left > 0){
    messageError.innerHTML = left + 'more characters required';
    return false;
  }

  messageError.innerHTML = 'Move to the next step '
  return true;

}


function validateForm(){
  if(!onvalidateMail() || !onvalidateName() || !onvalidateNumber() || !onvalidateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix the error';
    setTimeout(function(){
      submitError.style.display = 'none'
    },3000);
    return false;
  }
  
}