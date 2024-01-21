const API_URL = 'http://localhost:3000/';
let products =  (Name) => {
    fetch(API_URL + `${Name}`)
        .then(response =>  response.json())
           .then(data => {
                console.log(data);
                const pd_details = productsDetails(data);
                const id_products = document.getElementById('chitietsanpham');
               id_products.innerHTML = pd_details;
            })
      
        .catch(function (error) {
            console.error('There was a problem with the products request:', error);
        });
}

products("products");


let productsDetails = (data) =>{
    const sanPham = data[0];
    return ` <div class="row">
    <div class="col-lg-8">
    <div class="left-images">
        <img src="${sanPham.image}" alt="">
    </div>
</div>
<div class="col-lg-4">
    <div class="right-content">
        ${sanPham.name}
        <span class="price">${sanPham.price}
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
        <div class="quote">
            <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
        </div>
    </div>
</div>
</div>  `
}