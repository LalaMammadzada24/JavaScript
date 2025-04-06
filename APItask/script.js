const btn=document.querySelectorAll('button');

const getData = (a, b) => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            let li = "";
            data.slice(a, b).map((item,count) => {
                li+=`<div class="col-12 col-sm-6 col-md-3"> <div class="card " style="width: 18rem;">${a+count+1}
                <img src="${item.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${item.name.common}</p>
                </div>
                </div>
              </div>`
            });
            document.querySelector('ol').innerHTML = li;
        })
        .catch((err) => {
            console.log(err);
        });
};

getData(0,50);

btn[0].onclick = () => {
    getData(0, 50);
};

btn[1].onclick = () => {
    getData(50, 100);
};

btn[2].onclick = () => {
    getData(100, 150);
};

btn[3].onclick = () => {
    getData(150, 200);
};

btn[4].onclick = () => {
    getData(200, 250);
};





