let left = document.querySelector('.left')
let right = document.querySelector('.right')
let butt = document.querySelector('.butt ul')
let buttLi = document.querySelectorAll('.butt ul li')
let currentIndex = 0;
let buttLiwidth = buttLi[0].clientWidth + 5
const buttLilength = buttLi.length -2;

function updateCarousel() {
             butt.style.transform = `translateX(-${currentIndex * buttLiwidth}px)`;
}

left.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : buttLilength - 1;
            updateCarousel();
});
right.addEventListener('click', function() {
            currentIndex = (currentIndex < buttLilength - 1) ? currentIndex + 1 : 0;
            updateCarousel();
});

// 

