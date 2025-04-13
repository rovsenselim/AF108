document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"))
    let form = document.querySelector("form")

    form.addEventListener("submit", login)
    let username = document.querySelector("#username")
    let password = document.querySelector("#password")




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






    function login(e) {
        e.preventDefault()

        if (username.value.length < 3 || username.value.length > 20) {
            toast("Cannot register! Username must be between 3 and 20 characters!!!");
            return;
        }

        if (password.value.length < 8) {
            toast("Cannot register! Password must be at least 8 characters!!!");
            return;
        }


       
       
       
       
       
        if (!users) {
            toast("User not found")
        }

        let isLoginUser = users.find(
            (user) =>
                user.username == username.value && user.password == password.value);


        if (isLoginUser) {
            isLoginUser.isLogined = true;
            localStorage.setItem("users", JSON.stringify(users));
            toast("User login successfuly")
            setTimeout(() => {
                window.location.href = "index.html"
            }, 3000);
        } else {
            toast("Username or password incorrect");
            return;
        }
    }
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