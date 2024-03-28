"use strict";

let descBtn = document.querySelector(".button-desc");
let infoBtn = document.querySelector(".button-info");
let reviewBtn = document.querySelector(".button-review");



let contentDesc = document.querySelector(".content-description");
let contentInfo = document.querySelector(".content-addinfo");
let contentReview = document.querySelector("content-review");




descBtn.addEventListener("click",function(){
    infoBtn.classList.remove("active");
    descBtn.classList.add("active")
    reviewBtn.classList.remove("active")

    contentInfo.classList.add("d-none");
    contentReview.classList.add("d-none")
    contentDesc.classList.remove("d-none");

})

infoBtn.addEventListener("click",function(){
    descBtn.classList.remove("active");
    infoBtn.classList.add("active");
    reviewBtn.classList.remove("active");

    contentDesc.classList.add("d-none");
    contentInfo.classList.remove("d-none");
    contentReview.classList.add("d-none")
})

reviewBtn.addEventListener("click",function(){
    reviewBtn.classList.add("active");
    infoBtn.classList.remove("active");
    descBtn.classList.remove("active");

    contentReview.classList.remove("d-none");
    contentDesc.classList.add("d-none");
    contentInfo.classList.add("d-none");    
})