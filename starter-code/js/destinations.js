// const tabs = document.querySelectorAll(".tab");
// const slider = document.querySelector(".slider");
// const container = document.querySelector("body-container");

// tabs.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;

//     if(id) {
//         tabs.forEach((tab) => {
//             tab.classList.remove(".active");
//             e.target.classList.add(".active");

//             slider.forEach((slide) => {
//                 slide.classList.remove(".active");
//             });

//             const ele = document.getElementsByClassName(".active");
//             ele.classList.add(".active");
//         });
//     }
// });


// const curLoc = location.href;
// const hrefs = document.querySelectorAll(".slider-header a");
// const length = hrefs.length;
// for(let i = 0; i < length; i++){
//     if(hrefs[i].href === curLoc){
//         hrefs[i].className = "active";
//     }
// }

let slideHeader = document.querySelector(".slider-header");
const tab = document.querySelectorAll(".tab");

tab.forEach(e => {
    e.addEventListener("click", function() {
        slideHeader.querySelector(".active").classList.remove(".active");
        e.classList.add("active");
    });
});