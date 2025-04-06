const p=document.querySelectorAll('p');
async function info(category){
    
    let newData = await fetch('https://fakestoreapi.com/products')
    let myData = await newData.json();
    
    if (category) {
        filteredProducts = myData.filter((i)=> i.category === category)
    } else {
        filteredProducts = myData
    }
    
    let li =" ";
    filteredProducts.map(i=>{
    li+=`<div class="col-12 col-sm-6 col-md-3 d-flex flex-wrap"> <div class="card ">
    <img src="${i.image}" style="width: 100px" class="card-img-top mx-auto" alt="...">
    <div class="card-body">
      <p class="card-text text-center fw-bold fs-6">${i.title}</p>
      <p class="card-text text-success text-center  fw-bold ">${i.price}</p>
    </div>
    </div>
  </div>`
    })

    
    document.querySelector('.row').innerHTML = li;

}

info();

p[0].onclick = () => {
    info();
};

p[1].onclick = () => {
    info("men's clothing");
};

p[2].onclick = () => {
    info("jewelery");
};

p[3].onclick = () => {
    info("electronics");
};

p[4].onclick = () => {
    info("women's clothing");
};