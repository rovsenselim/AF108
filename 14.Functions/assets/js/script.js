// 1.Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.

// function toplama(a, b) {
//     return a + b;

// }


// function çixma(a, b) {
//     return a - b;

// }

// function vurma(a, b) {
//     return a * b;

// }
// function bölmə(a, b) {
//     return a / b

// }

// console.log(toplama(5,10));
// console.log(çixma(10,5));
// console.log(vurma(5,5));
// console.log(bölmə(9,3));








// 2.Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100).

// let num = (...numbers) => {
//     let tək = []
//     let cüt = []

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             cüt.push(numbers[i])

//         } else {
//             tək.push(numbers[i])

//         }
//         console.log("Cüt", cüt);
//         console.log("Tək", tək);

//     }
//     return { tək, cüt }


// }

// console.log(num(14, 20, 35, 40, 57, 60, 100));







// 3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100].

// function toplama (array) {
//     let sum = 0; 
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] % 4 === 0 && array[i] % 5 === 0) {
//         sum += array[i]; 
//       }
//     }
//     return sum;
//   }


//   let array = [14, 20, 35, 40, 57, 60, 100];
//   console.log(toplama(array)); 








// 4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.

// -----------------------------------------------------------------------------------------------------


// 5.Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.
// (Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir.
// Eks halda Deficient eded olur. 12 - Aboundant, 13 - Deficient).


// ------------------------------------------------------------------------------------------------------------



// 6.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.


// function kvadrat(array) {

    
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             array[i] = array[i] ** 2;
//         }
        
//     }
//     return array;
    
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(kvadrat(array));





// 7.İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. 
// Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın.
//  Məsələn - [13,67,54].


function ages(arr) {
    let minAge = arr[0].age; 
    let maxAge = arr[0].age; 

   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].age < minAge) {
            minAge = arr[i].age; 
        }
        if (arr[i].age > maxAge) {
            maxAge = arr[i].age; 
        }
    }

    let fərq = maxAge - minAge; 
    return [minAge, maxAge, fərq]; 
}

let ageList = [
    { name: 'Emil', age: 15 },
    { name: 'Elnur', age: 21 },
    { name: 'Emin', age: 41 }
    
];

console.log(ages(ageList));