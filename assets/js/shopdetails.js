"use strict";

let descBtn = document.querySelector(".button-desc");
let infoBtn = document.querySelector(".button-info");
let reviewBtn = document.querySelector(".button-review");



let contentDesc = document.querySelector(".content-description");
let contentInfo = document.querySelector(".content-addinfo");


descBtn.addEventListener("click",function(){
    infoBtn.classList.remove("active");
    descBtn.classList.add("active")

    contentInfo.classList.add("d-none");
    contentDesc.classList.remove("d-none");
})

infoBtn.addEventListener("click",function(){
    descBtn.classList.remove("active");
    infoBtn.classList.add("active");

    contentDesc.classList.add("d-none");
    contentInfo.classList.remove("d-none")
})