var content = document.getElementById('content');
var product = [{ id: 1, h2: "product 1", img: "clothes3.jpeg", detail: "describtion of product 1", price: "25$" },
{ id: 2, img: "clothes.jpg", h2: "product 2", detail: "describtion of product 2", price: "22$" },
{ id: 3, img: "makeup2.jpeg", h2: "product 3", detail: "describtion of product 3", price: "21$" },
{ id: 4, img: "clothes1.jpeg", h2: "product 4", detail: "describtion of product 4", price: "29$" },
{ id: 4, img: "electronic5.webp", h2: "product 5", detail: "describtion of product 5", price: "35$" },
{ id: 4, img: "kitchen.jpg", h2: "product 6", detail: "describtion of product 6", price: "19$" },
{ id: 4, img: "office.webp", h2: "product 7", detail: "describtion of product 7", price: "32$" },
{ id: 4, img: "kitchen1.jpg", h2: "product 8", detail: "describtion of product 8", price: "15.99$" }


];
var btnAdd = document.getElementById('add');
var imgSrc = document.getElementById('imgsrc');
var details = document.getElementById('ditailes');
var Iprice = document.getElementById('price');
var title = document.getElementById('title');

var alertAdd = document.getElementById('alert');
var notsinged = document.getElementById('notsinged');
var userName = document.getElementById('username');
var divsigned = document.getElementById('signed');
var logout = document.getElementById('logout');
var divImgProduct = document.getElementById('div-img-product');
var imgProduct = [{ name: "clothes3.jpeg", id: 1, type: 'clothes' }, { name: "clothes2.webp", id: 2, type: 'clothes' }, { name: "clothes1.jpeg", id: 3, type: 'clothes' }, { name: "clothes.jpg", id: 4, type: 'clothes' }, { name: "clothes4.webp", id: 5, type: 'clothes' },
{ name: "electronic.webp", id: 6, type: 'electronic' }, { name: "electronic1.webp", id: 7, type: 'electronic' }, { name: "electronic2.webp", id: 8, type: 'electronic' }, { name: "electronic3.jpeg", id: 9, type: 'electronic' }, { name: "electronic4.webp", id: 10, type: 'electronic' }, { name: "electronic5.webp", id: 11, type: 'electronic' },
{ name: "kitchen.jpg", id: 12, type: 'kitchen' }, { name: "kitchen1.jpg", id: 13, type: 'kitchen' }, { name: "kitchen2.webp", id: 14, type: 'kitchen' }, { name: "kitchen3.webp", id: 15, type: 'kitchen' },
{ name: "makeup.webp", id: 16, type: 'makeup' }, { name: "makeup1.webp", id: 17, type: 'makeup' }, { name: "makeup2.jpeg", id: 18, type: 'makeup' }, { name: "makeup3.webp", id: 19, type: 'makeup' },
{ name: "office.webp", id: 20, type: 'office' }, { name: "office1.jpg", id: 21, type: 'office' }, { name: "office2.webp", id: 22, type: 'office' }, { name: "office3.webp", id: 23, type: 'office' }
];
var Fkitchen = document.getElementById('kitchen');
var Felectronic = document.getElementById('electronic');
var Fclothes = document.getElementById('clothes');
var Foffice = document.getElementById('office');
var Fmakeup = document.getElementById('makeup');
var DrawAll = document.getElementById('all')    
var indexq;
var divAddItem = document.getElementById('add-item');




// this function to draw the products from arry in container div of products
function Draw() {

    content.innerHTML = ''
    product.map((e) => {
        content.innerHTML += `        <div class=" col-11 col-sm-9 col-md-5 col-lg-3 mx-3 mt-5 div-cart h-100 p-0">
        <h5 class="card-title font-weight-bold my-3"><span style="margin:0 75px;font-size:x-large;">${e.h2}</span></h5>
    <img src="./img/${e.img}" class="card-img-top " width="387" height="300" style="border-radius:5%">
      <p class="card-text font-weight-bold text-light text-center">${e.detail}</p>
      <p class="card-text font-weight-bold text-light text-center"> price : <span class="s-price">${e.price}</span> </p>
     <button class="cart-button btn-cart ml-4 mb-2" onclick="addToCArt(${e.id})">
        <span class="add-to-cart">Add to cart</span>
        <span class="added"> <i class="fa-solid fa-circle-check"></i> Done </span>
        <i class="fa-solid fa-cart-shopping"></i>   
        <i class="fas fa-box"></i>
    </button>

<div id="pButtonDelet"><button class="btn-delet cart-button ml-4" onclick="Delete(${e.id})" >delete card</button></div>
    
    </div>`

    })
};
Draw()


//this function is when maneger press button add add to create neew product 

btnAdd.onclick = function () {

    if (Iprice.value == '' || details.value == '' || title.value == '') {

        alertAdd.style.display = 'block'
    } else {
        var lastid;
        if (product.length == 0) {
            lastid = 0
        } else {
            lastid = product[product.length - 1].id
        }
        product.push({ id: lastid + 1, h2: title.value, img: imgProduct[indexq].name, detail: details.value, price: Iprice.value })


    }

    Draw()

    Iprice.value = '';
    details.value = '';
    title.value = '';
}

// this function uesd to delete product when manger press delete
function Delete(id) {
    const index = product.map((item) => {
        return item.id
    }).indexOf(id)
    product.splice(index, 1)
    Draw()

}


// this function used for animation button of add to cart

const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
});

function cartClick() {
    let button = this;
    button.classList.add('clicked');

    // Reset button position after 3 seconds
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 2000); // 3000 milliseconds = 3 seconds
}






// this used for appear if you signed or not
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


// delete product from page

logout.onclick = () => { localStorage.clear() }




//this function to draw the image product in the section products
function draw() {
    divImgProduct.innerHTML = ''


    imgProduct.map((e) => {

        divImgProduct.innerHTML += `<img src="img/${e.name}" alt="" width="230" height="330" class="my-2 mx-2 rounded">  `


    })

}
draw()

// this function redraw the main arry of products
DrawAll.onclick = draw

// this function draw the arry of filter main arry
function draww(data) {
    divImgProduct.innerHTML = ''


    data.map((e) => {

        divImgProduct.innerHTML += `<div class="div-draw" onclick="chose(${e.id})">
  <input type="checkbox" id="input" style="display: inline;">
  <img src="img/${e.name}" alt="" id="photo" style="display: inline;" width="230" height="330" class="my-2 mx-2 rounded">
</div> `


    }
    )
    var divdraw = document.querySelectorAll(".div-div")
    divdraw.forEach = () => {

    }

}


// this function for filtter image product kitchen
Fkitchen.onclick = function () {

    let filtered = imgProduct.filter((imgProduct) => imgProduct.type.startsWith("kitchen"));

    draww(filtered)


}

// this function for filtter image product electronic
Felectronic.onclick = function () {

    let filtered = imgProduct.filter((imgProduct) => imgProduct.type.startsWith("electronic"));

    draww(filtered)
}


// this function for filtter image product  clothes
Fclothes.onclick = function () {

    let filtered = imgProduct.filter((imgProduct) => imgProduct.type.startsWith("clothes"));

    draww(filtered)


}

// this function for filtter image product office
Foffice.onclick = function () {

    let filtered = imgProduct.filter((imgProduct) => imgProduct.type.startsWith("office"));

    draww(filtered)


}

// this function for filtter image products makeup
Fmakeup.onclick = function () {

    let filtered = imgProduct.filter((imgProduct) => imgProduct.type.startsWith("makeup"));

    draww(filtered)


}





function chose(id) {
    var closModel = document.getElementById('closeModel');
    indexq = imgProduct.map((item) => {
        return item.id;
    }).indexOf(id);
    closModel.click()

}
var btnDelet = document.querySelectorAll('.div-cart div');
if (localStorage.getItem('pass') === 'admin123' && localStorage.getItem('fullName') === 'admin') {

} else {

    divAddItem.style.display = 'none';
    btnDelet.forEach((e) => {
        e.style.display = 'none'

    })
}


//////////////////////////////////////
//     cart     // 
var divCArt = document.getElementById('div-cart');
var listCArt = document.getElementById('list-cart');
var cartTitle = document.getElementById('cart-title');
var counterCArt = 0;
var productCart = document.getElementById('product-cart');
var numCArt = document.getElementById('numCArt')
var numberCArt = 0;
var pCArt=[]


if(localStorage.getItem('productCart')){
     pCArt = JSON.parse(localStorage.getItem('productCart'))
}
else{
     pCArt = []
}


cartTitle.onclick = () => {
    counterCArt++
    if (counterCArt % 2 === 1)
        divCArt.style.display = 'block';
    else {
        divCArt.style.display = 'none';
        
    }
}

numCArt.innerHTML = pCArt.length
pCArt.map((e) => {
    listCArt.innerHTML += `<p style="color: white; margin-left: 15px;" id="product-cart" onclick="deletFromCArt(${e.id})">${e.h2}  <span style="color:red; cursor:pointer; font-size:x-larg;   font-weight: bolder;">X</span></p>`
    
})

function addToCArt(id) {
    
    const index = product.map((item) => {
        return item.id;
    }).indexOf(id)
    
    const x = pCArt.find(existID)
    function existID(data) {
        return data.id == product[id - 1].id
    }
    if(x){}else{
        pCArt = [...pCArt, product[id - 1]]
    }


  
        
    
    localStorage.setItem('productCart',JSON.stringify(pCArt))
    DrawCart()
    
}


function DrawCart() {
    
    
    listCArt.innerHTML = ''
  pCArt.map((e) => {
    listCArt.innerHTML += `<p style="color: white; margin-left: 15px;" id="product-cart" onclick="deletFromCArt(${e.id})">${e.h2}  <span style="color:red; cursor:pointer; font-size:x-larg;   font-weight: bolder;">X</span></p>`
    numCArt.innerHTML = pCArt.length
    
})  
}
    
    
    function deletFromCArt(id) {
        const index = pCArt.map((item) => {
            return item.id;
    }).indexOf(id)
    pCArt.splice(index, 1)
    DrawCart()
    localStorage.setItem('productCart',JSON.stringify(pCArt))
    

}   

