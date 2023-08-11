// Header Scroll 
let nav = document.querySelector(".navbar")
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled")
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


// nav hide 

let navbar = document.querySelectorAll(".nav-link")
let navCollpase = document.querySelector(".navbar-collapse.collapse");
navbar.forEach((e) => {
    e.addEventListener('click', () => {
        navCollpase.classList.remove("show")
    })
})


// swiper slider 

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter design 


document.addEventListener('DOMContentLoaded',() => {
    const counter = (id,start,end,duration) => {
        let span_id = document.getElementById(id),
        current=start,
        range = end-start,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current += 1;
            span_id.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1", 0, 180, 3000);
    counter("count2", 100, 300, 2500);
    counter("count3", 0, 200, 3000);
    counter("count4", 0, 340, 2000);    
});



// our partners


var swiper = new Swiper(".our-partner", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 8,
        },


    },
});

