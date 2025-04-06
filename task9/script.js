// const btn = document.querySelectorAll('button');
// const text = document.querySelectorAll('h1');


// function CapitalEng() {
//     if (btn[0].innerHTML=="country") {
//     text[0].innerHTML="England";
//     btn[0].innerHTML="capital";
// }else{
//     text[0].innerHTML="London";
//     btn[0].innerHTML="country";
// }
// }

// btn[0].onclick = CapitalEng;




// function CapitalAz() {
//     if (btn[1].innerHTML=="country") {
//     text[1].innerHTML="Azerbaijan";
//     btn[1].innerHTML="capital";
// }else{
//     text[1].innerHTML="Baku";
//     btn[1].innerHTML="country";
// }
// }

// btn[1].onclick = CapitalAz;




// function CapitalTur() {
//     if (btn[2].innerHTML=="country") {
//     text[2].innerHTML="Turkey";
//     btn[2].innerHTML="capital";
// }else{
//     text[2].innerHTML="Ankara";
//     btn[2].innerHTML="country";
// }
// }

// btn[2].onclick = CapitalTur;




// function CapitalFr() {
//     if (btn[3].innerHTML=="country") {
//     text[3].innerHTML="France";
//     btn[3].innerHTML="capital";
// }else{
//     text[3].innerHTML="Paris";
//     btn[3].innerHTML="country";
// }
// }

// btn[3].onclick = CapitalFr;






// function CapitalData() {
//     if (btn[4].innerHTML=="country") {
//     text[4].innerHTML="Italy";
//     btn[4].innerHTML="capital";
// }else{
//     text[4].innerHTML="Roma";
//     btn[4].innerHTML="country";
// }
// }

// btn[4].onclick = CapitalData;


//===============================================================================================================================


const btn = document.querySelector('button');
const text = document.querySelectorAll('a');

function LanguageData() {
    if (btn.innerHTML=="Az") {
    text[0].innerHTML="Ana Sehife";
    text[1].innerHTML="Haqqimizda";
    text[2].innerHTML="Xidmetler";
    text[3].innerHTML="Meqale";
    text[4].innerHTML="Elaqe";
    btn.innerHTML="En";
}else{
    text[0].innerHTML="Home";
    text[1].innerHTML="About";
    text[2].innerHTML="Services";
    text[3].innerHTML="Article";
    text[4].innerHTML="Contact";
    btn.innerHTML="Az";
}
}

btn.onclick = LanguageData;

const dropdown = document.querySelector('.dr-esas')


dropdown.onclick = ()=>{
    menu.classList.toggle('hide')
}