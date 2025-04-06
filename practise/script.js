// const ul= document.querySelector('ul');
// const input= document.querySelector('input');
// const btn= document.querySelector('button');

// btn.onclick =()=>{
//     const li =document.createElement('li');
//    if (li.innerHTML = input.value) {
//     ul.appendChild(li);
//    } else {
//      alert('write ')
//    }
// }




async function info (){
  let newData = await fetch("https://mocki.io/v1/fb92bcb5-3930-4566-9303-cfa59a544a43")
  let myData = await newData.json();
  myData.map(i=>{
    li += `<li>${i.title}</li>`;
            
  })
  document.querySelector('ul').innerHTML=li;
}
info()

