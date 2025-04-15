document.addEventListener("DOMContentLoaded", () => {
    const productId = localStorage.getItem('currentProductId');
    const productContainer = document.querySelector('.product-container');

    // Məhsul məlumatlarını Promise vasitəsilə çəkmək
    fetchProductDetails(productId).then(product => {
        const productDetail = createProductDetail(product);
        productContainer.appendChild(productDetail);
    });

    // Məhsul məlumatlarını əldə etmək
    function fetchProductDetails(id) {
        return new Promise((resolve, reject) => {
            // Məhsul məlumatları (simulyasiya)
            const products = [
                { id: 1, title: "Product 1", category: "Category 1", price: "$100", img: "img/product1.jpg", description: "Description for Product 1" },
                { id: 2, title: "Product 2", category: "Category 2", price: "$150", img: "img/product2.jpg", description: "Description for Product 2" },
                { id: 3, title: "Product 3", category: "Category 3", price: "$200", img: "img/product3.jpg", description: "Description for Product 3" },
            ];
            const product = products.find(p => p.id === parseInt(id)); // İstədiyimiz məhsulu tapırıq
            resolve(product);
        });
    }

    // Məhsul detallarını yaratmaq
    function createProductDetail(product) {
        const productDetail = document.createElement('div');
        productDetail.classList.add('product-detail');

        productDetail.innerHTML = `
            <div class="product-image">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="product-details">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-category">${product.category}</p>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description}</p>
                <button id="remove-product" class="remove-product">Remove Product</button>
            </div>
        `;

        // Remove button event
        productDetail.querySelector('#remove-product').addEventListener('click', () => {
            localStorage.removeItem('currentProductId'); // Məhsulu silirik
            window.location.href = 'index.html'; // Ana səhifəyə yönləndiririk
        });

        return productDetail;
    }

    // Kart klikləyərək məhsul ID-nu saxla
    const productCards = document.querySelectorAll('.card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Məhsul ID-nu alırıq
            const productId = card.getAttribute('data-id');

            // ID-ni localStorage-a yazırıq
            localStorage.setItem('currentProductId', productId);

            // Məhsul detallarına yönləndiririk
            window.location.href = 'product-details.html';
        });
    });
});