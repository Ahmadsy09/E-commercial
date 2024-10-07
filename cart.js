var divsigned = document.getElementById('signed');
var notsinged = document.getElementById('notsinged');
var userName = document.getElementById('username');
var pcart = JSON.parse(localStorage.getItem('productCart'))
var addCountOrder = document.getElementById('addCountOrder')





const x = function () {
    if (localStorage.getItem('Email')) {
        divsigned.style.display = 'block';
        notsinged.style.display = 'none'
        userName.innerHTML = localStorage.getItem('fullName');

    }
    else {

        notsinged.style.display = 'block';

        divsigned.style.display = 'none';


    }
}
x();
logout.onclick = () => { localStorage.clear() }


function Draw() {

    content.innerHTML = ''
    pcart.map((e) => {
        content.innerHTML += `        <div class=" col-11 col-sm-9 col-md-5 col-lg-3 mx-3 mt-3 div-cart h-100 p-0">
        <h5 class="card-title font-weight-bold ml-2 my-2"><span style="margin-left:75px;font-size:x-large;">${e.h2}</span></h5>
    <img src="./img/${e.img}" class="card-img-top " width="387" height="300" style="border-radius: 3%;">
    <p class="card-text font-weight-bold text-light text-center">${e.detail}</p>
    <p class="card-text font-weight-bold text-light text-center"> price : <span class="s-price">${e.price}</span> </p>
<div id="pButtonDelet"><button class="btn-delet cart-button ml-5" onclick="Delete(${e.id})" >delete card</button></div>
    
    </div>`

    })
};
Draw()

// this function uesd to delete product when manger press delete
function Delete(id) {
    const index = pcart.map((item) => {
        return item.id
    }).indexOf(id)
    pcart.splice(index, 1)
    Draw()

}
