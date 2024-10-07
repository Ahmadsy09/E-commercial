var Email = document.getElementById('email');
var pass = document.getElementById('password');
var emailStoreg = localStorage.getItem('Email');
var passStoreg = localStorage.getItem('pass');
var btn = document.getElementById('btn');


btn.onclick = send
function send (){
if(pass.value === passStoreg  & Email.value === emailStoreg){
 setTimeout(() => {
   location = 'index.html'
 }, 10);
}else{

}

    }

