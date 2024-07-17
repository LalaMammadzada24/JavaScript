//hedefe catmaq
const arr=['apple',['banana',3,['aim']],'orange','julyy'];
console.log(...arr[1][2]);

//length method
const name = 'JavaScript'
console.log(name[name.length-1]);

console.log('javascript'.toUpperCase());
//===============================================================================================

//Math
const groupName = ["Sahbaz","Saiq","Narmin","Lale","Sevgi","Nezire","Sadiq"];
const info = Math.round(Math.random() *6);

console.log(groupName[info]);

//split

let a = '30 ,days of ,javascript'

console.log(a.split());
console.log(a.split(' '));
console.log(a.split(''));
console.log(a.split('a',3));



let text = "Hello1world2JavaScript";
let result = text.split(/[0-9]/); // reqemlere göre böl
console.log(result); 

console.log(text.includes('Hello'));


console.log("Hello World! World is beautiful".replace(/World/g,'life')); //global olaraq evez edir


console.log("Hello World! World is beautiful".indexOf('ello'));//ilk indexsi qaytarir


console.log("Hello World! World is beautiful".lastIndexOf('u'));//sonuncu deyerin indexsi


console.log("Hello World! World is beautiful".search('u'));


console.log("Hello World! World is beautiful".match(/hello/i));

console.log(+'5.5');

// window methods 

// var test = prompt('enter name','placeholder')
// console.log(test);


//Array methods

var b =  Array(8).fill('X'); //arrrayi x la doldurur
console.log(b);

const numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers.slice());
console.log(numbers.slice(0));
console.log(numbers.slice(0,numbers.length));
console.log(numbers.slice(1,3));


// const fruits = ['apple','banana','cherry']
// var removed=fruits.splice(1,1,'orange')
// console.log(fruits); // movcud array-de deyisiklik edir ['apple', 'orange', 'cherry']
// console.log(removed); // silinenleri qaytarir, yeni array dondurur output:['banana']

const fruits = ['apple','banana','cherry']
var deletedd=fruits.pop()
// var deletedd2=fruits.pop()
console.log(deletedd);
console.log(fruits);

























// const month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
// const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]




//for in, for of===================================================================================


// for (const i in month) {
//     console.log(i);
//     console.log(month[i]);
// }


// for (const i in week) {
//     console.log(i);
//     console.log(week[i]);
// }

// for (const i of month) {
//     console.log(i);
// }


// for (const i of week) {
//     console.log(i);
// }





//PUSH=============================================================================================

// month.push(...week);
// console.log(month);

// for (const i of month) {
//     console.log(i);
// }

// for (const i in month) {
//     console.log(i);
//     console.log(month[i]);
// }


//UNSHIFT==========================================================================================

// month.unshift(...week);

// for (const i of month) {
//     console.log(i);
// }

// for (const i in month) {
//     console.log(i);
//     console.log(month[i]);
// }





//POP===============================================================================================

// month.pop()
// console.log(month);


// week.pop()
// console.log(week);

//  for (const i of month) {
//     console.log(i);
// }

// for (const i of week) {
//     console.log(i);
// }

// for (const i in month) {
//     console.log(i);
//     console.log(month[i]);
// }

// for (const i in week) {
//     console.log(i);
//     console.log(week[i]);
// }




//shift=============================================================================================


// month.shift()
// console.log(month);


// week.shift()
// console.log(week);

// for (const i of month) {
//     console.log(i);
// }

// for (const i of week) {
//     console.log(i);
// }

// for (const i in month){
//     console.log(i);
//     console.log(month[i]);
// }
// for (const i in week){
//     console.log(i);
//     console.log(week[i]);
// }

//slice============================================================================================= 

// console.log(month.slice(2,7));



// console.log(week.slice(2,4));


//splice============================================================================================

// console.log(month.splice(4,9));

// console.log(week.splice(0,3));





// month.splice(4,6)
// console.log(month);

// for (const i of month) {
//     console.log(i);
// }


// for (const i in month) {
//     console.log(i);
//     console.log(month[i]);
// }




// week.splice(3,4)
// console.log(week);

// for (const i of week) {
//     console.log(i);
// }


// for (const i in week) {
//     console.log(i);
//     console.log(week[i]);
// }



