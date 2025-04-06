

// String Methods:

// 1.Verilmis string-de sait herflewrin tapilmasi.


// function saitTap(str) {

//     let sait = "aoueiAOUEI";

//     let find = "";


//     for (let i = 0; i < str.length; i++) {

//         if (sait.includes(str[i])) {

//             find = find + str[i]
//         }
//     }
//     return find;
// }

// let str = "I am frontend DEVELOPER I LEARN Javascript";

// console.log(saitTap(str));





// 2.Verilmish string-de sozlerin bosluga gore sayi.

// function word(str) {

//     str = str.split(" ");

//     return str.length;
// }
// let str = "I am frontend DEVELOPER I LEARN Javascript";

// console.log(word(str));




// 3.Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın.

// function uzunSöz(str) {
//     let söz = str.split(" ");

//     let uzun = "";

//     for (let i = 0; i < söz.length; i++) {
//         if (söz[i].length > uzun.length) {
//             uzun = söz[i];
//         }

//     }
//     return uzun;

// }
// let str = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(uzunSöz(str));



// 4.Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// function bigSöz(str) {
//     let söz = str.split(" ");

//     let big = [];

//     for (let i = 0; i < söz.length; i++) {

//         if (söz[i] === söz[i].toUpperCase()) {
//             big.push({ söz: söz[i], index: i })
//         }
//     }
//     return big;
// }
// let str = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(bigSöz(str));




// 5. Verilmiş string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın.

// function twoBig(str) {
//     let söz = str.split(" ");

//     let big = [];

//     for (let i = 0; i < söz.length; i++) {
//         if (söz[i].includes("DELE")) {
//             big.push({ big: söz[i] });
//         }

//     }
//     return big;
// }
// let str = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(twoBig(str));



// 6. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.Məsələn:  My name is Jhon - MniJ.

// function başBirləşdir(str) {

//     let söz = str.split(" ")
//         .map(söz => söz[0])
//         .join("");



//     return söz;
// }

// let str = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(başBirləşdir(str));





// 7. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. 
// Əgər söz 4 hərfdən azdırsa o qısaldılmır. 
// İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. 
// Cümlədə heç bir durğu işarəsi olmayacaq. 
// Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t.

// function qisa(str) {

//     let söz = str.split(" ");
//     let ixtisar = []

//     for (let i = 0; i < söz.length; i++) {
//         if (söz.length < 4) {
//             ixtisar.push(söz);
//         } else {
//             ixtisar.push(söz[0] + söz[söz.length - 1]);
//         }


//     }
//     return ixtisar;
// }
// let str = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(qisa(str));




// Array Methods:

// 1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.

// function tekrarReqem(arr) {

//     let tekrar = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!tekrar.includes(arr[i])) {
//             tekrar.push(arr[i]);
//         }

//     }

//     return tekrar;
// }

// let arr = [12,23,54,12,47,61,54,98,47,75];
// console.log(tekrarReqem(arr));




// 2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.
// ----------------------------------------------------------------------





// 3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.

// function kiçik(arr) {

//     let number = 50;
//     for (let i = 0; i < arr.length; i++) {
//         if (number < arr[i]) {
//             console.log(arr[i]);
//         }
//     }
//     return number;

// }
// let arr = [12, 23, 54, 18, 47, 61, 56, 98, 42, 75];
// console.log(kiçik(arr));



// 4.customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.

// -----------------------------------------------------------------------------------------------------------





// 5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek).

          // Min-Max.


// function random(arr) {

//     let minNum = arr[0];
//     let maxNum = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < minNum) {
//             minNum = arr[i];
//         }
//         if (arr[i] > maxNum) {
//             maxNum = arr[i];
//         }
//     }
//     return { min: minNum, max: maxNum };
// }
// let arr = [12, 23, 54, 18, 47, 61, 56, 98, 42, 75];
// console.log(random(arr));


        //  Ortalama.

// function random(arr) {

//     let cəm = 0;
//     let i = 0;


//     while (i < arr.length) {
//         cəm += arr[i];
//         i++;

//     }
//     return ədədiOrta = cəm / arr.length
// }
//     let arr = [12, 23, 54, 18, 47, 61, 56, 98, 42, 75];
//     console.log(random(arr));


      //    Toplam.

// function random(arr) {
//    arr = arr.reduce((acc,arr) => acc + arr);

//    return arr;
// }
// let arr = [12, 23, 54, 18, 47, 61, 56, 98, 42, 75];
// console.log(random(arr));

      
            // Kvadrat.

function random(arr) {
    arr = arr.map((arr) => Math.pow(arr,2));
    return arr;
}
let arr = [12, 23, 54, 18, 47, 61, 56, 98, 42, 75];
console.log(random(arr));






