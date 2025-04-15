document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let currentUser = users ? users.find(user => user.isLogined) : null;
    let dropdown = document.getElementById("dropdown");
    let logout = document.getElementById("logout");
    let basketLink = document.getElementById("my-basket");
    let logoutBtn = document.getElementById("logout-btn");

    if (currentUser) {
        dropdown.style.display = "none";
        logout.style.display = "flex";
        basketLink.style.display = "inline";
    } else {
        dropdown.style.display = "flex";
        logout.style.display = "none";
        basketLink.style.display = "none";
        toast("Please login to view your basket.");
        window.location.href = "login.html";
        return;
    }

    logoutBtn.addEventListener("click", () => {
        if (currentUser) {
            currentUser.isLogined = false;
            localStorage.setItem("users", JSON.stringify(users));
            dropdown.style.display = "flex";
            logout.style.display = "none";
            basketLink.style.display = "none";
            localStorage.removeItem("wishlist");
            localStorage.removeItem("basket");
            toast("You have logged out successfully.");
            window.location.href = "login.html";
        }
    });

    let basketContainer = document.querySelector(".basket-container");
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    if (basket.length === 0) {
        basketContainer.innerHTML = "<p>Your basket is empty.</p>";
    } else {
        basketContainer.innerHTML = "";
        basket.forEach((product, index) => {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
                <img src="${product.img}" alt="">
                <h3>${product.title}</h3>
                <p>${product.category}</p>
                <p>${product.description}</p>
                <span>${product.price}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            basketContainer.appendChild(div);
        });
    }

    basketContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            let index = e.target.dataset.index;
            basket.splice(index, 1);
            localStorage.setItem("basket", JSON.stringify(basket));
            location.reload();
        }
    });
});

let toast = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { }
    }).showToast();
};
