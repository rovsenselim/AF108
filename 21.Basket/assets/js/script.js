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

    let buttons = document.querySelectorAll(".add-basket");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (!currentUser) {
                toast("Please login to add to basket.");
                return;
            }

            let card = button.closest(".card");
            let img = card.querySelector("img").src;
            let title = card.querySelector(".card-title").innerText;
            let category = card.querySelector(".card-category").innerText;
            let description = card.querySelector(".card-description").innerText;
            let price = card.querySelector(".card-price").innerText;

            let basket = JSON.parse(localStorage.getItem("basket")) || [];
            let exist = basket.find(item => item.title === title);

            if (!exist) {
                basket.push({ img, title, category, description, price });
                localStorage.setItem("basket", JSON.stringify(basket));
                toast("Product added to basket!");
            } else {
                toast("Product already in basket!");
            }
        });
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