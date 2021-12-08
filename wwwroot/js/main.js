const cardText = document.querySelector(".card__text");
const nextSlideBtn = document.querySelector(".swiper-button-next");
const prevSlideBtn = document.querySelector(".swiper-button-prev");
let slideBuffer;

const slide = direction => {
    slideBuffer && clearTimeout(slideBuffer);   
    cardText.classList.add(`slide-${direction}`);
    slideBuffer = setTimeout(() => {
        for (let i = 0; i < cardText.children.length; i++){cardText.children[i].style.display="none";}
        cardText.children[swiper.realIndex].style.display="block";
        setTimeout(() => cardText.classList.remove(`slide-${direction}`), 100);       
    }, 500);
}

const swiper = new Swiper('.card__swiper', {    
    loop: true,    
    speed: 400,
    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}    
});

nextSlideBtn.addEventListener("click", () => slide("next"));
prevSlideBtn.addEventListener("click", () => slide("prev"));
