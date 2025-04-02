let arr = [203, 19, 2, 13, 196, 86, 35, 77, 7, 145];

let birRəqəm = 0, ikiRəqəm = 0, üçRəqəm = 0;

arr.forEach(num => {
    let length = num.toString().length;
    if (length === 1) birRəqəm++;
    else if (length === 2) ikiRəqəm++;
    else if (length === 3) üçRəqəm++;
});

console.log(`Bir rəqəmli: ${birRəqəm}`);
console.log(`İki rəqəmli: ${ikiRəqəm}`);
console.log(`Üç rəqəmli: ${üçRəqəm}`);