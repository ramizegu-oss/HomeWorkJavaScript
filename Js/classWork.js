"use strict"



let stu1 ={
    FullName: "Ramiz Quliyev",
    Email: "ramiz@gmail.com",
    Age: 15
};

let stu2 ={
    FullName: "Zaur Isazade",
    Email: "zaur@gmail.com",
    Age: 19
};

let stu3 ={
    FullName: "Fatime Amirmatova",
    Email: "fatime@gmail.com",
    Age: 21
};

let stu4 ={
    FullName: "Aydan Qocazade",
    Email: "aydan@gmail",
    Age: 20
};


let students = [stu1,stu2,stu3,stu4];

// function getSumOfAges(datas){
//     let sum = 0;
//     datas.forEach(element => {
//         sum+=element.Age
        
//     });
//     return sum
// }

// function getAverageOfAges(datas){
//     let sum = 0;
//     datas.forEach(element => {
//         sum+=element.Age
//     });
//     return sum/datas.length
// }



// function getBeetwenAges(datas,min,max){
//     let arr = [];
//     datas.forEach(item => {
//         if (item.Age>min && item.Age<max) {
//             arr.push(item);
//         }
//     });
//     return arr
// }

// getBeetwenAges(students,10,20).forEach(element => {
//     console.log(`${element.FullName} ${element.Age} ${element.Email}`);
// });



// function searchByFullName(datas,txt){
//     return datas.filter(s=> s.FullName.toLowerCase().includes(txt.toLowerCase()))
// }


// searchByFullName(students,"Zaur").forEach(element => {
//     console.log(`${element.FullName} ${element.Age} ${element.Email}`);
// });


function searchwithEmail(datas){
    return datas.filter(s=> s.Email.endsWith("gmail.com"))
}

searchwithEmail(students).forEach(element => {
    console.log(`${element.FullName} ${element.Age} ${element.Email}`);
});