document.addEventListener("DOMContentLoaded", async () => {
    let productContainer = document.querySelector('.product-container');
    let products = await fetchProducts(); 

    products.forEach(product => {
        let productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });

    
    async function fetchProducts() {
        let response = await fetch('http://localhost:3000/products'); 
        let products = await response.json();
        return products;
    }

    
    function createProductCard(product) {
        let card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
        `;

        
        card.addEventListener('click', () => {
            localStorage.setItem('currentProductId', product.id);
            window.location.href = 'product-details.html';
        });

        return card;
    }
});