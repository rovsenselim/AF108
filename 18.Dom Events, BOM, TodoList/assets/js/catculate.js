let first = document.querySelector(".first");
let second = document.querySelector(".second");
let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".sub");
let mulBtn = document.querySelector(".mul");
let divBtn = document.querySelector(".div");
let result = document.querySelector(".result");

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", sub);
mulBtn.addEventListener("click", mul);
divBtn.addEventListener("click", div);

function add() {
    let add = Number(first.value) + Number(second.value);
    result.value = add;

    first.value = "";
    second.value = "";
}

function sub() {
    let sub = Number(first.value) - Number(second.value);
    result.value = sub;

    first.value = "";
    second.value = "";
}


function mul() {
    let mul = Number(first.value) * Number(second.value);
    result.value = mul;

    first.value = "";
    second.value = "";
}


function div() {
    let div = Number(first.value) / Number(second.value);
    result.value = div;

    first.value = "";
    second.value = "";
}




