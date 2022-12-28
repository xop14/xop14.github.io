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
const langSwitcher = document.querySelector('.lang-switcher');
const mobileLangSwitcher = document.querySelector('.mobile-lang-switcher');
const textJp = document.querySelectorAll('.jp');
const textEn = document.querySelectorAll('.en');


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