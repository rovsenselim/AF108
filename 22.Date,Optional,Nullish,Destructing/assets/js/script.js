// 1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın.

// let date = new Date();
// let hour = date.getHours();

// if (hour >= 6 && hour < 12) {
//     alert("Good Morning");
// } else if (hour >= 12 && hour < 18) {
//     alert("Good Afternoon");
// } else if (hour >= 18 && hour < 22) {
//     alert("Good Evening");
// }









// 2.Object Destructing istifadə edərək employee  obyektindən name, department və 
// contact (email, phone, emergencyContact sahələri daxil olmaqla) məlumatlarını əldə edin. 
// Həmçinin emergencyContact-də name və relation məlumatı əldə edin.

// const employee = {
//     name: "Farid Ali",
//     department: "Engineering",
//     contact: {
//         email: "farid.ali@example.com",
//         phone: "555-1234",
//         emergencyContact: {
//             name: "Far For",
//             relation: "Spouse"
//         }
//     }
// };

// const {
//     name,
//     department,
//     contact: {
//         email,
//         phone,
//         emergencyContact: {
//             name: emergencyContactName,
//             relation: emergencyRelation
//         }
//     }
// } = employee;

// console.log(name);
// console.log(department);
// console.log(email);
// console.log(phone);
// console.log(emergencyContactName);
// console.log(emergencyRelation);








// 3.Bu API-dən alınan məlumatları təmsil edir.

//   3.1. Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın.

// const apiResponse =  
//     {
//     id: 2,
//     title: "Array Destructuring",
//     author: "Leyla Əliyeva",
//     stats: [1800, 220, 45]
// }

// const { title, author, stats } = apiResponse;

// console.log(title);
// console.log(author);
// console.log(stats);


// 3.2. stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər).

// const apiResponse =
// {
//     id: 1,
//     title: "JavaScript əsasları",
//     author: "Səid Məmmədov",
//     stats: [2500, 150, 30]
// }
// const stats = [2500, 150, 30]
// const [oxunma, bəyənmə, şərhlər] = stats

// console.log(oxunma, bəyənmə, şərhlər);



// 3. Aşağıdakı formatda nəticəni console-a çıxarın:
// "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"
const apiResponse =
{
    id: 2,
    title: "Array Destructuring",
    author: "Leyla Əliyeva",
    stats: [1800, 220, 45]
}

const { title: Məqalə, author: Müəllif, stats } = apiResponse;
const [oxunma, bəyənmə, şərh] = stats;



console.log(`Məqalə: ${Məqalə}, Müəllif: ${Müəllif}, ${oxunma} oxunma, ${bəyənmə} bəyənmə, ${şərh} şərh`);







// 4.Bu tapşırıqda hər iki operatoru birlikdə istifadə edin.

// function renderUserProfile(data) {
//     return {
//         username: data?.user?.username ?? "Qonaq",
//         avatar: data?.user?.profile?.avatar ?? "/default-avatar.png",
//         bio: data?.user?.profile?.bio ?? "Məlumat yoxdur",
//         email: data?.user?.contact?.email ?? "təyin edilməyib",
//         premium: data?.user?.account?.premium ?? false
//     };
// }



// console.log(renderUserProfile({
//     user: {
//         username: "tahir2023",
//         profile: {
//             avatar: "/users/tahir.jpg",
//             bio: "JavaScript developer",
//         },
//         contact: {
//             email: "tahir@example.com"
//         },
//         account: {
//             premium: true
//         }
//     }
// }));

// console.log(renderUserProfile({
//     user: {
//         username: "aynur",
//         profile: {
//             bio: ""
//         },
//         contact: {}
//     }
// }));

// console.log(renderUserProfile({
//     user: {
//         username: null
//     }
// }));

// console.log(renderUserProfile({}));
