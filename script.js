// let marks = [89, 34, 54, 67, 78];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["superman", "ironman", "spiderman"]

// for(let i = 0; i<3; i++){
//     console.log(heroes[i]);
// }

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i=0; i<marks.length; i++){
    console.log(marks[i]);
    sum = sum + marks[i];
    
}
console.log(sum);
let avg = sum / marks.length;
console.log(avg);