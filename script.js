console.log("Hello world!");
// carousel stuff --------------------------------
// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// });

// scroll to top --------------------------------
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const AboutMeButton = document.getElementById('about-me');

AboutMeButton.addEventListener('click', () => {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
});

const ContactButton = document.getElementById('contact-me');

ContactButton.addEventListener('click', () => {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth'
    });
});
// jquery ui ----------------------------------------
$("#accordion").accordion({
  collapsible: true, // Allow all sections to be closed
  active: false,      // Start with all sections closed
  heightStyle: "content" // Adjust height based on content
});
