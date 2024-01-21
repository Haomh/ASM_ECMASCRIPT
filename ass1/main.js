const API_URL = 'http://localhost:3000/';

function hienThiSanPham() {
    let html = "";
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('hienthi');
            data.forEach(element => {
                html += `
                <div class="col-lg-4">
                    <div class="item">
                        <div class="thumb">
                            <div class="hover-content">
                                <ul>
                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src="${element.image}" alt="">
                        </div>
                        <div class="down-content">
                            <h4>${element.name}</h4>
                            <span>$${element.price}</span>
                            
                        </div>
                    </div>
                </div>       
                `;
            });
            shows.innerHTML = html;
        })
        .catch(error => {
            // Handle error
        });
}

hienThiSanPham();
