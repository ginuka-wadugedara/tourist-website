// const Lanka = document.querySelector(".Lanka");
//         Lanka.onclick = function() {
//             navBar = document.querySelector(".nav-bar");
//             navBar.classList.toggle("active");
//         }


const toggleBtn = document.querySelector(".Lanka")
const navBar = document.querySelector(".nav-bar");



toggleBtn.addEventListener("click",(e)=>{
    navBar.classList.toggle("toggle");
    navBar.classList.add("drop-down");
 })