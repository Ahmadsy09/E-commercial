var Name = document.getElementById('name');
var Email = document.getElementById('email');
var pass = document.getElementById('password');
var signup = document.getElementById('sign_up');


signup.addEventListener('click' ,send);

function send (){ 
if(Name.value === '' || Email.value === '' || pass.value === ''){
}else{
    localStorage.setItem('fullName' , Name.value);
localStorage.setItem('Email' , Email.value);
localStorage.setItem('pass' , pass.value);
setTimeout(() => {
    location = 'sign.html'
},10);
}
    
}
