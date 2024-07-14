

//1-100 dongu

// var a=0;

// while (a<100) {
//     a++;
//     console.log(a);
// }




// let b=0;
// do {b++;
//     console.log(b);
// } while (b<100);




// for (let a = 1; a <= 100; a++) {
//     console.log(a);
    
// }





//1-100 ters dongu ============================

// var a=101;

// while (a>1) {
//     a--;
//     console.log(a);
// }



// let b=101;
// do {b--;
//     console.log(b);
// } while (b>1);




// for (let a = 100; a>=1 ; a--) {
//     console.log(a);
    
// }

//10-artan ===================

// let a=0;

// while (a<100) {
//     a=a+10;
//     console.log(a);
// }





// let a=0;

// do {a+=10;
//     console.log(a);
// } while (a<100);



// for (let a = 10; a <= 100; a=a+10) {
//     console.log(a);
    
// }


//5-azalan============================



// let a=100;

// while (a>1) {
//     console.log(a); 
//    a=a-5;
// }





// let a=100;


// do {console.log(a);
//     a=a-5;
// } while (a>1);



// for (let a = 100; a>1; a=a-5) {
//     console.log(a);
    
// }



//0-100 dongusu 20-40 araligi olmasin============================


// var a=0;

//  while (a<100) {
//      a++;
//      if (a>=20 && a<=40) {
//          continue;
//      }
//      console.log(a);
//  }




// let b=0;
// do {b++;
//     if (b>=20 && b<=40) {
//         continue;}
//     console.log(b);
// } while (b<100);




// for (let a = 1; a <= 100; a++) {
//   if (a>=20 && a<=40) {
//       continue;}
//     console.log(a);
    
// }


//yubiley======================================



var a=0;

while (a<100) {
    a++;
    if (a%10==0) {
        console.log('yubileyin mubarek');
    }
    else{  console.log(a);}
  
}




let b=0;
do {
    if (b%10==0) {
        console.log('yubileyin mubarek');
    }
    b++;
    console.log(b);
} while (b<100);




for (let a = 1; a <= 100; a++) {
    if (a%10==0) {
        console.log('yubileyin mubarek');
    }
    else{   console.log(a);}
 
    
}

