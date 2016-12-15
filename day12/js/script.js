if(!localStorage.getItem('firstname')|| !localStorage.getItem('lastname')){
  localStorage.setItem('firstname', prompt('What is your first name?'));
  localStorage.setItem('lastname', prompt('What is your last name?'));
  sessionStorage.setItem('password', prompt('What is your password?'));
}else{
  var firstname = localStorage.getItem('firstname');
  var lastname = localStorage.getItem('lastname');
  alert('Thank you, '+ firstname+' '+lastname);
}


//localStorage.removeItem('firstname'); removes key/value associated with
