

// function farm (day) {
//     for (let i=1; i < day ; i++ ) {
//     const milkPerCowPerDay = 3; //litr
//     const pricePerLiter = 3; // dollars
//     const moneyToBuyCow = 300; // dollars
//     var  totalMilk= milkPerCowPerDay*day;
//     var totalMoney=totalMilk*pricePerLiter;
//     var cowCount=Math.floor(totalMoney /  moneyToBuyCow);

//         if (totalMoney>=300) {
//             cowCount++;
//     return ` Inek sayi--${cowCount} \n Elde olunan sud -- ${totalMilk} litr \n Qazanilan mebleg -- ${totalMoney-cowCount*moneyToBuyCow } $`
// }
//     else {
//         return ` Inek sayi--${cowCount+1} \n Elde olunan sud -- ${totalMilk} litr \n Qazanilan mebleg -- ${totalMoney } $`

//     }
 
//     }

// }

// console.log(farm(100));





// function farm(day){
//     var cows = 1;
//     var totalmilk = 0;
//     var totalmoney = 0;
//     for (let i = 0; i < day; i++) {
//         const dailymilk=cows3;
//         totalmilk+=dailymilk;
//         const dailymoney=dailymilk3;
//         totalmoney+=dailymoney;
//         if(totalmoney>300 ){
//             cows+=Math.floor(totalmoney/300);
//             totalmoney%=300;
//         }
//     }
//     var money=totalmoney+300*cows;
//     if (money>15000) {
//         console.log("siz toyuq fermasini aldiniz")
//     }
// return ${day} gun erzinde    toplam satilmish sud ${totalmilk} lt       pul ${totalmoney} $          ineklerin sayi ${cows}           toplam gelir ${money-300};
// }




// function farm(day) {
  
  



//     if (totalMoney>=300) {
//         var cow=1;
//     cow++;
//     const milkPerCowPerDay = 3; //litr
//     const pricePerLiter = 3; // dollars
//     const moneyToBuyCow = 300; // dollars
//     var  totalMilk= milkPerCowPerDay*cowCount*day;
//     var totalMoney=totalMilk*pricePerLiter;
//     var cowCount=totalMoney /  moneyToBuyCow;
//     return ` Inek sayi--${cowCount} \n Elde olunan sud -- ${totalMilk} litr \n Qazanilan mebleg -- ${totalMoney-(cowCount-1)* moneyToBuyCow } $`
//     }
//     else{
//         return ` Inek sayi--${cowCount} \n Elde olunan sud -- ${totalMilk} litr \n Qazanilan mebleg -- ${totalMoney} $`
//     }
// }

// console.log(farm());
















// var cow=1;

// function farm (day) {
//     var milk=cow*day*3;
//     var money=milk*3;

//     if (money >= 300) {
//         var cow=1;
//              while (money<300) {
//             cow++;
//             milk=cow*day*3;
//             money=milk*3;
//             return ` Inek sayi--${cow} \n Elde olunan sud -- ${milk} litr \n Qazanilan mebleg -- ${money} $`
//         }

//         }
//         else{
//             return ` Inek sayi--${cow} \n Elde olunan sud -- ${milk} litr \n Qazanilan mebleg -- ${money} $`
//         }

// }


// console.log(farm(51));






// var cow=1;

// function farm (day) {
//     var milk=cow*day*3;
//     var money=milk*3;

   
//     if (money>=300) {
//        cow++;
//        milk=cow*day*3;
//        money=milk*3
//     return ` Inek sayi--${cow} \n Elde olunan sud -- ${milk} litr \n Qazanilan mebleg -- ${money-(cow-1)*300} $`
//     }
//     else{
//         return ` Inek sayi--${cow} \n Elde olunan sud -- ${milk} litr \n Qazanilan mebleg -- ${money} $`
//     }

// }

// console.log(farm(265));