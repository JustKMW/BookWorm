var cartArray = JSON.parse(localStorage.getItem('cartArray'));
var currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

if (cartArray == null) {
    cartArray = [];
}

let totalPrice = 0;

function addCartToHTML(){
    //clear default
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';

    if (cartArray != null) {
        for (var i = 0; i < cartArray.length; i++) {
            
            let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${cartArray[i+3]}">
                    <div class="content">
                        <div class="name">${cartArray[i+1]}</div>
                        <div class="price">$${cartArray[i+4]} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQuantity(${cartArray[i]}, '-')">-</button>
                        <span class="value">${cartArray[i+2]}</span>
                        <button onclick="changeQuantity(${cartArray[i]}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                
            totalPrice = totalPrice + (parseFloat(cartArray[i+4]) * parseFloat(cartArray[i+2]));
            i= i+4;
        }
    }
    
    document.getElementById("total").innerHTML = totalPrice.toFixed(2)
}

function checkout(){
    alert("Thank You For Your Patronage " + currentUser);
    cartArray = [];
    localStorage.setItem('cartArray', JSON.stringify(cartArray));
}

function cancel(){
    alert("Cart Cleared")
    cartArray = [];
    localStorage.setItem('cartArray', JSON.stringify(cartArray));
    window.location.reload();
}