let cartArray = JSON.parse(localStorage.getItem('cartArray'));

if (cartArray == null) {
    cartArray = [];
}
function loadB(){
    fetch('../js/b2s.json')
    .then(response => response.json())
    .then((data) => {
        products = data;
        addBooksToHTML();
    })
}

function loadFiction(){
    fetch('../js/fiction.json')
    .then(response => response.json())
    .then((data) => {
        products = data;
        addBooksToHTML();
})

}

function loadNonFiction(){
    fetch('../js/nonfiction.json')
    .then(response => response.json())
    .then((data) => {
        products = data;
        addBooksToHTML();
})

}

function addBooksToHTML(){
    let listNewHTML = document.querySelector('.newProducts');
    listNewHTML.innerHTML = '';
    //add the new books
    if(products != null)
    {
        products.new.forEach(books => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<span class="tooltip">${books.summary}</span>
            <img src="${books.image}" alt="${books.name} class="bIMG">
            <h3 class="bName">${books.name}</h3>
            <p class="author">By ${books.author}</p>
            <p class="bPrice">$${books.price}</p>
            <button type="button" onclick="addCart('${books.id}')" class="add"">Add To Cart</button>`;

            listNewHTML.appendChild(newProduct);
        });

        let listBestHTML = document.querySelector('.bestProducts');
        listBestHTML.innerHTML = '';
        //add the best sellers
        if(products != null)
        {
            products.best.forEach(books => {
                let bestProduct = document.createElement('div');
                bestProduct.classList.add('item');
                bestProduct.innerHTML = 
                `<span class="tooltip">${books.summary}</span>
                <img src="${books.image}" alt="${books.name} class="bIMG">
                <h3 class="bName">${books.name}</h3>
                <p class="author">By ${books.author}</p>
                <p class="bPrice">$${books.price}</p>
                <button type="button" onclick="addCart('${books.id}')" class="add"">Add To Cart</button>`;

                listBestHTML.appendChild(bestProduct);
            });
        }
    }
}



// let listCart = [];
function addCart(productID){

    if(products != null){
        products.new.forEach(books => {
            if (productID == books.id){
                //if doesnt exist add
                if(cartArray.includes(productID) == false){
                    books.quantity++;
                    cartArray.push(productID, books.name, books.quantity, books.image, books.price);
                    //alert(cartArray); //for debugging purposes
                } else { //if exist increse quantity
                    for (var i = 0; i < cartArray.length; i++) {
                        if(productID == cartArray[i]){
                            cartArray[i+2] = parseFloat(cartArray[i+2]) + 1;
                            //alert(cartArray); //for debugging purposes
                        }
                    }
                }
            }
        });
        products.best.forEach(books => {
            if (productID == books.id){
                
                //if doesnt exist add
                if(cartArray.includes(productID) == false){
                    books.quantity++;
                    cartArray.push(productID, books.name, books.quantity, books.image, books.price);
                    //alert(cartArray); //for debugging purposes
                } else { //if exist increse quantity
                    for (var i = 0; i < cartArray.length; i++) {
                        if(productID == cartArray[i]){
                            cartArray[i+2] = parseFloat(cartArray[i+2]) + 1;
                            //alert(cartArray); //for debugging purposes
                        }
                    }
                }
            }
        });
    }
    
    localStorage.setItem('cartArray', JSON.stringify(cartArray));
}