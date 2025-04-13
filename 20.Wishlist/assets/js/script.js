document.addEventListener("DOMContentLoaded", () => {
    let dropdown = document.getElementById("dropdown");
    let logout = document.getElementById("logout");
    let dropdownBtn = document.getElementById("dropdown-btn");
    let logoutBtn = document.getElementById("logout-btn");
    let heartIcons = document.querySelectorAll(".heart-icon");


    let users = JSON.parse(localStorage.getItem("users"));
    let currentUser = users ? users.find(user => user.isLogined) : null;

    if (currentUser) {
        dropdown.style.display = "none";
        logout.style.display = "flex";
    } else {
        dropdown.style.display = "flex";
        logout.style.display = "none";
    }

    logoutBtn.addEventListener("click", () => {
        currentUser.isLogined = false;
        localStorage.setItem("users", JSON.stringify(users));
        dropdown.style.display = "flex";
        logout.style.display = "none";
        localStorage.removeItem("wishlist");
        toast("You have logged out successfully.");
        window.location.href = "login.html";
    });


    heartIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let card = icon.closest(".card");
            let img = card.querySelector("img").src;
            let title = card.querySelector(".card-title").innerText;
            let category = card.querySelector(".card-category").innerText;
            let description = card.querySelector(".card-description").innerText;
            let price = card.querySelector(".card-price").innerText;

            let item = { img, title, category, description, price };
            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            let isAlreadyAdded = wishlist.some(wishlistItem => wishlistItem.title === title);

            if (!isAlreadyAdded) {
                wishlist.push(item);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                icon.style.color = "red";
                toast("Added to your wishlist");
            } else {
                wishlist = wishlist.filter(wishlistItem => wishlistItem.title !== title);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                icon.style.color = "#ccc";
                toast("Removed from your wishlist");
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