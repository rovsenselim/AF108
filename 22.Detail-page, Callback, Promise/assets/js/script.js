document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Məhsul məlumatlarını Promise ilə almaq
    getProducts().then(products => {
        products.forEach(product => {
            const card = createCard(product);
            productList.appendChild(card);
        });
    });

    function getProducts() {
        return new Promise((resolve) => {
            const products = [
                { id: 1, title: "Product 1", category: "Category 1", price: "$100", img: "img/product1.jpg", description: "Description for Product 1" },
                { id: 2, title: "Product 2", category: "Category 2", price: "$150", img: "img/product2.jpg", description: "Description for Product 2" },
                { id: 3, title: "Product 3", category: "Category 3", price: "$200", img: "img/product3.jpg", description: "Description for Product 3" }
            ];
            resolve(products);
        });
    }


    document.addEventListener('DOMContentLoaded', () => {
        // Navbar-dakı Product Details düyməsinə click event əlavə edirik
        const productDetailsBtn = document.getElementById('product-details-btn');
        if (productDetailsBtn) {
            productDetailsBtn.addEventListener('click', () => {
                window.location.href = 'product-details.html'; // Product Details səhifəsinə yönləndirir
            });
        }
    });

    function createCard(product) {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = product.id;

        card.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <div class="card-content">
                <h3 class="card-title">${product.title}</h3>
                <p class="card-category">${product.category}</p>
                <p class="card-description">${product.description}</p>
                <p class="card-price">${product.price}</p>
                <div class="card-footer">
                    <button class="heart">❤️</button>
                    <button class="add-basket">Add Basket</button>
                </div>
            </div>
        `;

        // Sadəcə kartın boş hissəsinə klik olunduqda detallara keç
        card.addEventListener("click", (e) => {
            if (
                e.target.classList.contains("heart") ||
                e.target.classList.contains("add-basket")
            ) {
                return;
            }
            localStorage.setItem("currentProductId", product.id);
            window.location.href = "product-details.html";
        });

        return card;
    }
});