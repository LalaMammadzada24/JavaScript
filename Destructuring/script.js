//===========================DESTRUCTURING=================================

//arraylerde destructuring
const numbers  = [11,12,14,17];
const [num1,num2,num3] = numbers;


console.log(num1); //11
console.log(numbers[0]);

console.log(num2); //12
console.log(numbers[1]);

console.log(num3); //14
console.log(numbers[2]);

console.log(numbers[3]); //17

//======================


let numbers2 = [1, 2, 3, 4, 5];
let [first , , third] = numbers2;
console.log(first, third); // 1, 3

//========================
const names = [
    ['Lala','Sabina',['Safa','Sema']],
    ['Ravan','Aqil','Yagub']
]

const [[firstgirl,secondgirl,[thirdgirl,fourthgirl]],boys] = names;

console.log(firstgirl);
console.log(thirdgirl);
console.log(boys);

//==========================
const girls =['Lala',undefined,'Sabina'];
const [girl1, girl2 = 'Shafa' , girl3 ]=girls;

console.log(girl2); //shafa
console.log(girls); //['Lala', undefined, 'Sabina']



// destructuring in objects

let person = { name: "Lala", age: 18, city: "Baku" };

let { name, age ,city1 } = person;
console.log(name, age , city1); // Lala,18 ,undefined

let { name: personName, age: personAge } = person;
console.log(personName, personAge); //lala,18

//===========================


let numbers3 = [1, 2];
let [first1, second2, third3 = 3] = numbers3;
console.log(first1, second2, third3); // 1, 2, 3
console.log(numbers3); //[1,2]


//destructuring in function parameters
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

let my = { name: "Lala", age: 18 }; //name-e parametr olaraq Lala , age parameter olaraq 18 verilir
greet(my); // Hello, my name is John and I am 30 years old.


//===================================REST===================================================

const animals = ['cat','dog','rabbit','sheep','cow','fish'];
const [animal1,animal2,animal3, ...theOtherAnimals] = animals

console.log(animal1);
console.log(animal2);
console.log(animal3);
console.log(theOtherAnimals); // ['sheep', 'cow', 'fish']


//==================================SPREAD==================================

const letters = ['a','b','c','d','e']

console.log(...letters); //a b c d e
console.log(letters); //['a', 'b', 'c', 'd', 'e'] 
console.log(0,...letters,10); //0 'a' 'b' 'c' 'd' 'e' 10

const letters2 = [...letters];
letters2.push('F');
console.log(letters2);
console.log(letters);