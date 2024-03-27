"use strict";

let blog = document.querySelector(".navbar-down-link .blog");
let blogBox = document.querySelector(".blog-box");


blog.addEventListener("mouseover",function(){
    blogBox.classList.remove("d-none")
})


blog.addEventListener("mouseout",function(){
    blogBox.classList.add("d-none")
})