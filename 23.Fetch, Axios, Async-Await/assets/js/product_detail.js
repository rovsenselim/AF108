document.addEventListener("DOMContentLoaded", async () => {
    let productDetailContainer = document.querySelector('.product-detail-container');
    let productId = localStorage.getItem('currentProductId');

    if (!productId) {

        window.location.href = 'index.html';
        return;
    }

    let product = await fetchProductDetails(productId);
    let productDetail = createProductDetail(product);
    productDetailContainer.appendChild(productDetail);


    async function fetchProductDetails(id) {
        let response = await fetch(`http://localhost:3000/products/${id}`);
        let product = await response.json();
        return product;
    }


    function createProductDetail(product) {
        let detail = document.createElement('div');
        detail.classList.add('product-detail');
        detail.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button id="back-to-home">Back to Home</button>
        `;


        document.getElementById('back-to-home').addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        return detail;
    }
});