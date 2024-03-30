"use strict";



let basket = [];


if(JSON.parse(localStorage.getItem("basket") == null)){

    localStorage.setItem("basket",JSON.stringify(basket))
}else{

    basket = JSON.parse(localStorage.getItem("basket"))
}


getBasketCount(basket)

function getBasketCount(arr){
    let basketCount = 0;
    if(arr.length != 0){
        for (const item of arr) {
            basketCount += item.count
        }
    }

    document.querySelector("navbar-down-shopping h6").innerText = basketCount;
}




let addBtns = document.querySelectorAll("#shopping .add");


addBtns.forEach(btn => {
    btn.addEventListener("click",function(e){

        e.preventDefault();
        let productName = this.parentNode.firstElementChild.innerText;
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productPrice = this.previousElementSibling.previousElementSibling.previousElementSibling.innerText;

        console.log(productPrice);

        let existsProduct = basket.find(m => m.id == productId);

        if(existsProduct !=undefined){
            existsProduct.count++;
        }else{
            basket.push({
                name: productName,
                image:productImage,
                price:productPrice,
                count:1
            })
        }

        getBasketCount(basket)
    
        localStorage.setItem("basket",JSON.stringify(basket));
    })
});

