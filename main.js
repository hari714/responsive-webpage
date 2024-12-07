
const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'bat.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'ball.jpg' },
    { id: 3, name: 'Product 3', price: 40, image: 'gloves.jpg' },
    { id: 4, name: 'Product 3', price: 40, image: 'gloves.jpg' },
    { id: 5, name: 'Product 1', price: 20, image: 'bat.jpg' },
    { id: 6, name: 'Product 2', price: 30, image: 'ball.jpg' },
    { id: 7, name: 'Product 1', price: 20, image: 'bat.jpg' },
    { id: 8, name: 'Product 2', price: 30, image: 'ball.jpg' },
    { id: 9, name: 'Product 3', price: 40, image: 'gloves.jpg' },
    { id: 10, name: 'Product 3', price: 40, image: 'gloves.jpg' },
    { id: 11, name: 'Product 1', price: 20, image: 'bat.jpg' },
    { id: 12, name: 'Product 2', price: 30, image: 'ball.jpg' },


];

let cart = [];
displayProducts();

function displayProducts(filteredProduct=products ) {
    const productContainer = document.querySelector('.product-list');
   
    filteredProduct.forEach(product=>
         {

        const productDiv= document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML= ` <img src="${product.image}">
                                <h3>${product.name} </h3>
                                 <p>Price: $${product.price}</p>
                                 <button onclick =" addToCart(${product.id})"> Add to Cart</button>`;
       
         productContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
    
}

document.getElementById('search').addEventListener('input', handleSearch);
function handleSearch(event) {
    
    let search_val = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(search_val.toLowerCase()) 
    );
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';
     displayProducts(filteredProducts)
}



function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button></p>
        `;
        cartContainer.appendChild(cartItem);
    });

    document.getElementById('total-price').textContent = totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

const Checkout= document.getElementById("checkout-btn")
Checkout.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        displayCart();
    } else {
        alert('Your cart is empty!');
    }
});




