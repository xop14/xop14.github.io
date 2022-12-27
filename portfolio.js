const cardOverlays = document.querySelectorAll('.card-overlay');
const navItems = document.querySelector('.nav-items');
const navProjects = document.querySelector('.nav-projects');
const navDesign = document.querySelector('.nav-design');
const navContact = document.querySelector('.nav-contact');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavProjects = document.querySelector('.mobile-nav-projects');
const mobileNavContact = document.querySelector('.mobile-nav-contact');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const arrows = document.querySelectorAll('.arrow');


let isMenuOpen = false;


// smooth scroll nav links
navProjects.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    })
})
navContact.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    })
})
navDesign.addEventListener("click", () => {
    document.querySelector("#design").scrollIntoView({
        behavior: "smooth"
    })
})

// smooth scroll mobile nav links
mobileNavProjects.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
    showMobileNav();
})
mobileNavContact.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
    showMobileNav();
})


// mobile nav
function showMobileNav() {
    if (!isMenuOpen) {
        mobileNav.style.display = 'flex';
        mobileNav.style.animation = 'slide 500ms ease-in-out';
        isMenuOpen = true;
    } else {
        mobileNav.style.animation = 'slide-back 500ms ease-in-out';
        setTimeout(() => {
            mobileNav.style.display = 'none';
        }, 500);
        isMenuOpen = false;
    }
}

hamburger.addEventListener('click', showMobileNav);
hamburgerClose.addEventListener('click', showMobileNav);


// horizontal scroll for design images

arrows.forEach((arrow) => {
    arrow.addEventListener('mousedown', (e) => {
        console.log("arrow clicked");
        let images = arrow.parentElement.firstElementChild;
        imageWidth = images.firstElementChild.nextElementSibling.scrollWidth;
        images.scrollBy({
            left: imageWidth + 20,
            behavior: "smooth"
        });
    });
});
