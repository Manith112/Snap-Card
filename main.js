const features = document.getElementById("feature");
const companys = document.getElementById("company");
const arrowDownOne = document.getElementById("dropdown-1")
const arrowDownTwo = document.getElementById("dropdown-2")
const arrowUpOne = document.getElementById("up-arrow-1")
const arrowUpTwo = document.getElementById("up-arrow-2")
const menu = document.getElementById("burger");
const lists = document.querySelector(".list");
const close = document.getElementById("close")

// feature list
arrowDownOne.addEventListener('click' , function(){
    arrowDownOne.style.display= "none";
    arrowUpOne.style.display = "flex";
    features.style.display= "flex"
})
arrowUpOne.addEventListener('click' , function(){
    arrowDownOne.style.display= "flex";
    arrowUpOne.style.display = "none";
    features.style.display= "none"
})


// company list 
arrowDownTwo.addEventListener('click' , function(){
    arrowDownTwo.style.display= "none";
    arrowUpTwo.style.display = "flex";
    companys.style.display= "flex"
})
arrowUpTwo.addEventListener('click' , function(){
    arrowDownTwo.style.display= "flex";
    arrowUpTwo.style.display = "none";
    companys.style.display= "none"
})

// burger menu
menu.addEventListener("click", function(){
    lists.style.display = "flex";
})
// close menu 
close.addEventListener("click", function(){
    // menu.style.display = "flex";
    lists.style.display = "none";
})