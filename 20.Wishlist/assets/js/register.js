document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirm = document.querySelector("#confirm")

    form.addEventListener("submit", register);









    username.addEventListener("input", () => {
        if (username.value.length < 3 || username.value.length > 20) {
            username.style.color = "red";
            toast("Your username must be between 3 and 20 characters!!!");
        } else {
            username.style.color = "green";
        }
    });


    password.addEventListener("input", () => {
        if (password.value.length < 8) {
            password.style.color = "red";
            toast("Your password must be minimum 8 characters!!!");
        } else {
            password.style.color = "green";
        }
    });


    confirm.addEventListener("input", () => {
        if (confirm.value !== password.value) {
            confirm.style.color = "red";
            toast("Confirm password and password are not the same!!!");
        } else {
            confirm.style.color = "green";
        }
    });

    function register(e) {
        e.preventDefault();


        if (username.value.length < 3 || username.value.length > 20) {
            toast("Cannot register! Username must be between 3 and 20 characters!!!");
            return;
        }

        if (password.value.length < 8) {
            toast("Cannot register! Password must be at least 8 characters!!!");
            return;
        }


        if (confirm.value !== password.value) {
            toast("Cannot register! Confirm password and password are not the same!!!");
            return;
        }
    










    let uniqueUser = users.some((user) => user.username == username.value || user.email == email.value);

    if (!uniqueUser) {
        let newUser = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
            confirm: confirm.value,
            isLogined: false,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        toast("Register Successfully");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
    } else {
        toast("User already exists");
    }
}


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
}
});