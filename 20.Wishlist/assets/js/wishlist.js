document.addEventListener("DOMContentLoaded", () => {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

    let wishlistContainer = document.getElementById("wishlist-items");

    if (wishlistItems.length > 0) {
        wishlistItems.forEach(item => {
            let card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <div class="card-content">
                    <h2 class="card-title">${item.title}</h2>
                    <p class="card-category">${item.category}</p>
                    <p class="card-description">${item.description}</p>
                </div>
                <div class="card-footer">
                    <span class="card-price">${item.price}</span>
                </div>
            `;
            wishlistContainer.appendChild(card);
        });
    } else {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    }

    let logoutBtn = document.getElementById("logout-btn");
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("wishlist");
        window.location.href = "index.html";
    });
});