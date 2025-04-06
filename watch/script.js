const saat = document.querySelector('.hour');
const deq = document.querySelector('.minute');
const san = document.querySelector('.second');

setInterval(()=>{
    saat.innerHTML= new Date().getHours()
    deq.innerHTML= new Date().getMinutes()
    san.innerHTML= new Date().getSeconds()
},1000);
 