//navbar scroll change

// $(function(){
//     $(document).scroll(function(){
//         const $nav = $(".navbar-custom");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// });

const nav = document.querySelector(".navbar-custom");
document.addEventListener("scroll", ()=>{
    const top = window.scrollY;
    if(top>=100){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
})

//multi image slider

// let logos = document.querySelectorAll(".logos-carousel-inner .carousel-item");
// let businessInnovationItems = document.querySelectorAll(".business-innovation-carousel-inner .carousel-item")
// let testimonial = document.querySelectorAll(".testimonial-carousel-inner .carousel-item")
// // console.log(testimonial)
// // console.log(businessInnovationItems)

// // console.log(logos)

// function multiImageSlider(items){
//     items.forEach((el) => {
//       const minPerSlide = 4;
//       let next = el.nextElementSibling;
//       for (var i = 1; i < minPerSlide; i++) {
//         if (!next) {
//           // wrap carousel by using first child
//           next = items[0];
//         }
//         let cloneChild = next.cloneNode(true);
//         // console.log(cloneChild.children[0])
//         el.appendChild(cloneChild.children[0]);
//         next = next.nextElementSibling;
//       }
//     });
// }

// multiImageSlider(logos);
// multiImageSlider(testimonial);
// multiImageSlider(businessInnovationItems);



//back to top button

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll",()=>{
    if(scrollContainer().scrollTop > showOnPx){
        backToTopButton.classList.remove("hidden")
    }else{
        backToTopButton.classList.add("hidden")
    }
})

const goToTop = () =>{
    document.body.scrollIntoView({
        behaviour: "smooth"
    });
};

backToTopButton.addEventListener("click", goToTop)