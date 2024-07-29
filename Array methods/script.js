// function Check(a) {
//     if ( typeof a==='string') {
//         console.log("bu deyer string tipindedir");
//     } else {
//         console.log("string tipinde deyil");
//     }
// }

// Check(true);



// function Compare(num1,num2) {
//     if (num1>num2) {
//       return `${num2}`
//     } else {
//         return `${num1}`
//     }
// }

// console.log(Compare(7,9));




// function Person(name) {
//  return`Hello  ${name}`;
//   }

//  console.log(Person("Lala"));


const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
  ];
 
//REDUCE ====== departmente uygun olaraq qruplasdirir
// let group = 'department'

// let groupeddepartments = people.reduce((acc,dep) => {
//   let key =dep[group]

//   if (!acc[key]) {
//     acc[key] = []
//   }
//   acc[key].push(dep)
//   return acc
// },{})
// console.log(groupeddepartments);


//NUMUNE2
// const names = ['Umud','Behrem','Yaqub','Resul','Umud']
// let countDepartment = names.reduce((alldep,dep)=>{
//  if (dep in alldep) {
//    alldep[dep]++
//  }else{
//    alldep[dep] = 1
//  }
//  return alldep
// },{})


// console.log(countDepartment);


//MAP
//   let a = people.map((item)=>item.lastName + " " + item.firstName)

//   console.log(a);

   
//FILTER
    // let a = people.filter((item)=>item.department == 'Marketing')
    // console.log(a);
    // for (const item of a) {
    //   console.log(item);
    // }

    // let a = people.filter((item)=> new Date().getFullYear() - new Date(item.DOB).getFullYear() > 40)
    // console.log(a);




//FIND=========================================================

  // let a = people.find((item)=> item.department == 'Development')

  //   console.log(a.DOB);



 //=============FINDINDEX   
    // let index = people.findIndex((item)=> item.department == 'Development')
  
    //   console.log(index);
    




//SORT====================================================

    // let salary = people.sort((a,b)=> a.salary-b.salary)
    // console.log(...salary);//azdan coxa
    
    // let salary2 = people.sort((a,b)=> b.salary-a.salary)
    // console.log(...salary2);// coxdan aza

   
    // const fruits = ['banana', 'apple', 'cherry', 'date'];
    // fruits.sort();
    // console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

    
    // people.sort((a,b)=>a.firstName.localeCompare(b.firstName))
    // console.log(people);//A-dan Z-ye
    
    
    // people.sort((a,b)=>b.firstName.localeCompare(a.firstName))
    // console.log(people); //Z-den A-ya


//EVERY======================== salary lerin 40000 olub olmamasini yoxlayir, 1 denesi ferqli olsa false qaytarir
// console.log(people.every(people=>people.salary%3==0));


// //=====
// const liste = [1, 'a', true, { name: 'John' }];

// const hepsiAyniTip = liste.every(eleman => typeof eleman === typeof liste[0]);

// console.log(hepsiAyniTip); // false

// //=====

// const dizi = [];

// const hepsiVarMi = dizi.every(eleman => typeof eleman !== 'undefined');

// console.log(hepsiVarMi); // true

// //=====

// const notlar = [80, 85, 90, 75, 95];

// const gectiMi = notlar.every(not => not >= 70);

// console.log(gectiMi); // true

// //=====

// const sayilar = [2, 4, 6, 8, 10];

// const hepsiCift = sayilar.every(sayi => sayi % 2 === 0);

// console.log(hepsiCift); // true