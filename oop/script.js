// class Car{
// constructor(title,color,year,price,stock){
//      this.infoTitle= title;
//      this.infoColor= color;
//      this.infoYear= year;
//      this.infoPrice= price;
//      this.infoStock= stock;
// }

// calculateSpeed(km,hour){
//     return `${this.infoTitle}:${km/hour} km/h`
// }

// startEngine(buttonStart){
// if (buttonStart) {
//     return `${this.infoTitle} is start`
// }else{
//     return`please press start button`
// }
// }

// }

// const myCar = new Car ("BMW X5","black",2023,30000,true)
// console.log(myCar.infoTitle);
// console.log(myCar.calculateSpeed(300,4));
// console.log(myCar.startEngine(true));


// class Moto extends Car {
//     constructor(title,color,year,price,stock){
//         super(title,color,year,price,stock);
//     }
// }

// const myMoto = new Moto ("Yamaha S900");
// console.log(myMoto.calculateSpeed(100,0.5));


//==========Animal&Person================================================================================================================================================================


// class Person {
//     constructor(name,surname,height,weight){
//         this.infoName = name;
//         this.infoSurname= surname;
//         this.infoHeight=height;
//         this.infoWeight= weight;
//     }

//     calculateAge(todayDate,dateOfBirth){
//         return`${this.infoName}:${todayDate-dateOfBirth} age`
//     }
// }

// const person = new Person ("Jackie",2005,1.67,55);
// console.log(person.infoName);
// console.log(person.calculateAge(2024,2005));

// class Animal extends Person{
//     constructor(name,height,weight){
//       super(name,height,weight);
//     }
// }

// const animal = new Animal("cat",0.90,20);
// console.log(animal.calculateAge(2024,2020));


//=======COMPUTER&PHONE===========================================================================================================================


class Computer {
    constructor(title,price,color,newDevice){
        this.infoTitle = title;
        this.infoPrice= price;
        this.infoColor=color;
        this.infoDevice= newDevice;
    }

}

const comp = new Computer ("ASUS",1700,"black",true);
console.log(comp.infoTitle);

class Phone extends Computer{
    constructor(title,price,color){
      super(title,price,color);
    }
}

const phone = new Phone("Samsung",1200,"grey");
console.log(phone.infoTitle);
console.log(phone.infoColor);