let home = Number(prompt("Please press any button!!!"));

let text = "*Select fuel type!!!\n1-Dizel ( dizel): litri 0,9 AZN.\n2-Adi ( benzin): litri 1 AZN.\n3-Premium ( premium): litri 1,5 AZN.";

let operation = Number(prompt(text));

switch (operation) {
    case 1:
        let budget = Number(prompt(`What is your budget (AZN)`));
        let fuelLitr = Number(prompt(`How much litr of fuel do you want (Litr)`));
        let totalPrice = fuelLitr * 0.9;


        if (budget >= totalPrice) {
            budget -= totalPrice;
            alert(`Thank you for choosing us.Your budget: ${budget} AZN`);

        } else {
            alert(`Your budget is not enough!!!\nYour budget is ${budget} AZN.\nYour missing money is ${totalPrice - budget} AZN.`);
        }
        break;

    case 2:
        let budget2 = Number(prompt(`What is your budget (AZN)`));
        let fuelLitr2 = Number(prompt(`How much litr of fuel do you want (Litr)`));
        let totalPrice2 = fuelLitr2 * 1;


        if (budget2 >= totalPrice2) {
            budget2 -= totalPrice2;
            alert(`Thank you for choosing us.Your budget: ${budget2} AZN`);

        } else {
            alert(`Your budget is not enough!!!\nYour budget is ${budget2} AZN.\nYour missing money is ${totalPrice2 - budget2} AZN.`);
        }
        break;

    case 3:
        let budget3 = Number(prompt(`What is your budget (AZN)`));
        let fuelLitr3 = Number(prompt(`How much litr of fuel do you want (Litr)`));
        let totalPrice3 = fuelLitr3 * 1.5;


        if (budget3 >= totalPrice3) {
            budget3 -= totalPrice3;
            alert(`Thank you for choosing us.Your budget: ${budget3} AZN`);

        } else {
            alert(`Your budget is not enough!!!\nYour budget is ${budget3} AZN.\nYour missing money is ${totalPrice3 - budget3} AZN.`);
        }
        break;
        default:
            alert("Wrong choice!!!\nPlease choose the correct number.")
        break;
}








let season = prompt("Mövsümü daxil edin: (yaz, yay, payız, qış)")
let months;

switch (season) {
    case "yaz":
        months = "Mart, Aprel, May";
        break;
    case "yay":
        months = "İyun, İyul, Avqust";
        break;
    case "payız":
        months = "Sentyabr, Oktyabr, Noyabr";
        break;
    case "qış":
        months = "Dekabr, Yanvar, Fevral";
        break;
    default:
        months = "Düzgün mövsüm daxil edin!";
}

alert(months);


