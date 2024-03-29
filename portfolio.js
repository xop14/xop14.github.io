const cardOverlays = document.querySelectorAll('.card-overlay');
const navProjects = document.querySelector('.nav-projects');
const navDesign = document.querySelector('.nav-design');
const navContact = document.querySelector('.nav-contact');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavItems = mobileNav.firstElementChild.querySelectorAll('li');
const mobileNavProjects = document.querySelector('.mobile-nav-projects');
const mobileNavDesign = document.querySelector('.mobile-nav-design');
const mobileNavContact = document.querySelector('.mobile-nav-contact');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerSvg = document.querySelector('.hamburger-svg');
const arrows = document.querySelectorAll('.arrow');
const langSwitcher = document.querySelector('.lang-switcher');
const mobileLangSwitcher = document.querySelector('.mobile-lang-switcher');
const textJp = document.querySelectorAll('.jp');
const textEn = document.querySelectorAll('.en');
const topBtn = document.querySelector('.top-btn');
// const body = document.querySelector(body);


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

mobileNavDesign.addEventListener("click", () => {
    document.querySelector("#design").scrollIntoView({
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
        mobileNav.style.animation = 'slide 500ms ease-in-out forwards';
        hamburgerSvg.classList.add('hamburger-svg-on');
        hamburgerSvg.classList.remove('hamburger-svg-off');
        // cascade the nav items sliding in
        let delay = 200;
        mobileNavItems.forEach(item => {
            item.style.display = 'inline-block';
            item.style.transition = 'all 200ms ease-in-out'
            item.style.transform = 'translateX(200px)';
            item.style.opacity = '1';
            setTimeout(() => {
                item.style.transform = 'translateX(0px)';
            }, delay);
            delay += 100;
        });
        isMenuOpen = true;
        // stop body from scrolling - doesn't work on safari :(
        document.body.style.overflowY = 'hidden';

    } else {
        mobileNav.style.animation = 'slide-back 500ms ease-in-out forwards';
        setTimeout(() => {
            mobileNav.style.display = 'none';
        }, 500);
        hamburgerSvg.classList.add('hamburger-svg-off');
        hamburgerSvg.classList.remove('hamburger-svg-on');
        mobileNavItems.forEach(item => {
            item.style.transform = 'translateX()';
            item.style.opacity = '1';
        });
        isMenuOpen = false;
        // enable scrolling again
        document.body.style.overflowY = 'visible';
    }
}

hamburgerBtn.addEventListener('click', showMobileNav);

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



// language switcher

// detect browser language

const browserLang = window.navigator.language.slice(0,2);
let isJapanese = false;

// set initial language of page

if (browserLang !== 'ja') {
    textJp.forEach((jp) => {
        jp.style.display = 'none';
    });
    textEn.forEach((en) => {
        en.style.display = 'inline';
    });
    langSwitcher.textContent = '日本語';
    isJapanese = false;
} else {
    textJp.forEach((jp) => {
        jp.style.display = 'inline';
    });
    textEn.forEach((en) => {
        en.style.display = 'none';
    });
    langSwitcher.textContent = 'English';
    isJapanese = true;
}

langSwitcher.addEventListener('click', () => {
    switchLang();
});

mobileLangSwitcher.addEventListener('click', () => {
    switchLang();
    showMobileNav();
});

// switch languages
function switchLang() {
    if (isJapanese) {
        textJp.forEach((jp) => {
            jp.style.display = 'none';
        });
        textEn.forEach((en) => {
            en.style.display = 'inline';
        });
        langSwitcher.textContent = '日本語';
        setTimeout(() => {
            mobileLangSwitcher.textContent = '日本語';
        }, 500);
        isJapanese = false;
    } else {
        textJp.forEach((jp) => {
            jp.style.display = 'inline';
        });
        textEn.forEach((en) => {
            en.style.display = 'none';
        });
        langSwitcher.textContent = 'English';
        setTimeout(() => {
            mobileLangSwitcher.textContent = 'English';
        }, 500);
        isJapanese = true;
    }
}


// Intersection Observer
const cards = document.querySelectorAll('.fade-in');
const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px'
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.style.opacity = '1';
        entry.target.style.transitionDuration = '0.5s';
        entry.target.style.transitionTimingFunction = 'cubic-bezier()';
        entry.target.style.transform = 'translateY(0px)';
        observer.unobserve(entry.target);
    })

}, obsOptions)

cards.forEach(card => {
    observer.observe(card);
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
});


// button animation

const categoryTags = document.querySelectorAll('.tag');
const tagObsOptions = {
    root: null,
    threshold: 1,
    rootMargin: '0px'
}
const tagObserver = new IntersectionObserver((entries, observer) => {
    let interval = 0;
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.style.transitionDuration = '0.3s';
        setTimeout(() => {
            entry.target.style.opacity = '1';
        }, interval);
        interval += 50;
        observer.unobserve(entry.target);
    });
}, tagObsOptions);

categoryTags.forEach(tag => {
    tagObserver.observe(tag);
    tag.style.opacity = '0';
});


// header animation

const arrowBg = document.querySelector('.header-foreground');
const header = document.querySelector('header');
const headerText = document.querySelector('.header-text');
const headerImage = document.querySelector('.header-image');

window.addEventListener('DOMContentLoaded', scrollLoop, false);

let scrollY;

function scrollLoop() {
    if (window.innerWidth > 600) {
        scrollY = window.scrollY;
        translateY(scrollY/2, headerText);
        translateY(scrollY/2, headerImage);
        translateY(scrollY * -0.3, arrowBg);
        arrowBg.style.backgroundSize = `${100 + (scrollY/50)}px`;
    }
    requestAnimationFrame(scrollLoop);
}

function translateY(yPos, el) {
    el.style.transform = `translateY(${yPos}px)`;
}


// top scroll button

window.addEventListener('scroll', () => {
    if (window.scrollY < 1900) {
        topBtn.style.display = 'none';
    } else {
        topBtn.style.display = 'grid';
    }
    if (window.scrollY > 2000) {
        topBtn.classList.add('top-btn-visible');
    } else {
        topBtn.classList.remove('top-btn-visible');
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})