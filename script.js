const about_us = document.getElementById('about-us');
const services = document.getElementById('services');
const what_we_do = document.getElementById('what-we-do');
const contact_us = document.getElementById('contact-us');

const sections = [
    [about_us, about_us.offsetTop + about_us.clientHeight, {
        animationProperty: 'transform',
        animationValue: 'translateX(0%)',
    }],

    [services, services.offsetTop + services.clientHeight, {
        animationProperty: 'opacity',
        animationValue: '1',
    }],

    [what_we_do, what_we_do.offsetTop + what_we_do.clientHeight, {
        animationProperty: 'transform',
        animationValue: 'translateX(0%)',
    }],
]

function handleScroll() {
    let bottomY = window.scrollY + window.innerHeight;
    
    if (bottomY >= sections[sections.length - 1][1]) {
        window.removeEventListener('scroll', handleScroll);
    }
    
    for (let section of sections) {
        if ( section[1] / 4 <= bottomY && section[1] >= bottomY ) {
            section[0].style[section[2].animationProperty] = section[2].animationValue;
            break;
        }
        
    }
}

window.addEventListener('scroll', handleScroll);