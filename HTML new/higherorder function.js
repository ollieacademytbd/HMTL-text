// const censor = words => {
//     const filtered = [];
//     for(let i = 0; i < words.length; i++) {
//         const word = words[i];
//         if(word.length !== 4) filtered.push(word);
//     }
//     return filtered;
// };

// censor(['zonk','army','shout','sun']);
// // Output: ['shout','sun']


// const startsWithS = words => {
//     const filtered = [];
//     for( let i = 0; i < words.length; i++ ) {
//         const word = words[i];
//         if(word.startsWith('s')) filtered.push(word);
//     }
//     return filtered;
// };

// startsWithS(['zonk','army','shout','sun']);
// // Output: ['shout' , 'sun']
let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Cyrus', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Jeff', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr)=>( acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let highestgrade = grades => maxGrade(grades);
console.log (grades => minGrade(grades));
let higestboy = grades => maxGrade(getBoys(grades));
let highestgirl = grades => maxGrade(getGirls(grades));
let lowestboy = grades => minGrade(getBoys(grades));
let lowestgirl = grades => minGrade(getGirls(grades));

console.log (minGrade(isBoy));
// console.log(grades.reduce(highestgirl));
console.log(grades.reduce(isBoy));

