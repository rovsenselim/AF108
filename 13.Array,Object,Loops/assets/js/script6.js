let arr = [203, 19, 2, 13, 196, 86, 35, 77,]


let big = arr[0]; 

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
        big = arr[i];
    }
}

console.log(big);