// document.addEventListener('DOMContentLoaded', function() {
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');
//     const carouselInner = document.querySelector('.carousel-inner ul');
//     const items = document.querySelectorAll('.carousel-inner li');
//     let currentIndex = 0;
//     const itemWidth = items[0].clientWidth;
//     const totalItems = items.length;

//     function updateCarousel() {
//         carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//     }

//     prevButton.addEventListener('click', function() {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
//         updateCarousel();
//     });

//     nextButton.addEventListener('click', function() {
//         currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
//         updateCarousel();
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');
//     const carouselInner = document.querySelector('.trend ul');
//     const items = document.querySelectorAll('.trend li');
//     const totalItems = items.length - 4;
//     let currentIndex = 0;
//     const itemWidth = items[0].clientWidth * 2 + 20;
//     console.log(itemWidth);
    
//     function updateCarousel() {
//         carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 2 : 0;
//         updateCarousel();
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
//         updateCarousel();
//     }

//     prevButton.addEventListener('click', function() {
//         prevSlide();
//         resetAutoSlide();
//     });

//     nextButton.addEventListener('click', function() {
//         nextSlide();
//         resetAutoSlide();
//     });

//     let autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

//     function resetAutoSlide() {
//         clearInterval(autoSlideInterval);
//         autoSlideInterval = setInterval(nextSlide, 3000); // Reset interval
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let items = document.querySelectorAll('.trend li')
//     let index = 0
//     function hideitem(){
//         if(index<=items.length){
//             items[index].classList.add('removefromexistence')
//         }
//         index++
        
//     }
//     let autoSlideInterval = setInterval(hideitem, 1000); 
//     function resetAutoSlide() {
//                  clearInterval(autoSlideInterval);
//                 autoSlideInterval = setInterval(hideitem, 1000); // Reset interval
//             }
// });

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.trending ul');
    const items = document.querySelectorAll('.trending li');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentIndex = 0;
    const totalItems = items.length - 2;
    const itemWidth = items[0].offsetWidth + 10;

    // Automatic sliding
    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Set interval for automatic sliding
    let sliderInterval = setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds

    // Manual controls
    nextButton.addEventListener('click', () => {
        clearInterval(sliderInterval);
        moveToNextSlide();
        sliderInterval = setInterval(moveToNextSlide, 3000); // Restart interval
    });

    prevButton.addEventListener('click', () => {
        clearInterval(sliderInterval);
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSliderPosition();
        sliderInterval = setInterval(moveToNextSlide, 3000); // Restart interval
    });

    // Optional: adjust the interval if the user hovers over the slider
    slider.addEventListener('mouseover', () => clearInterval(sliderInterval));
    slider.addEventListener('mouseleave', () => sliderInterval = setInterval(moveToNextSlide, 3000));
});