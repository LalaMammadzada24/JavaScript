const ul = document.querySelector('ul');
const input = document.querySelector('input');
const btnAdd = document.querySelector('.add');


btnAdd.onclick=()=>{
    if (input.value) {
        const li= document.createElement('li');
        li.innerHTML=input.value;
        ul.appendChild(li);
        input.value="";
        const btnDelete= document.createElement('button');
        btnDelete.innerHTML='<i class="fa-regular fa-trash-can"></i>'
        li.appendChild(btnDelete);
        btnDelete.className='delete'

        btnDelete.onclick=()=>{
        ul.removeChild(li);
        }

        li.ondblclick = ()=>{
            if (li.style.textDecoration == "none") {
                li.style.textDecoration = "line-through"
            }else{
                li.style.textDecoration = "none"
            }
        }
    } else {
         alert('Enter something')
    }
  
}





