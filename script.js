const about_us = document.getElementById('about-us');
const what_we_do = document.getElementById('what-we-do');
const contact_us = document.getElementById('contact-us');

const sections = [
    [about_us, about_us.offsetTop + about_us.clientHeight],
    [what_we_do, what_we_do.offsetTop + what_we_do.clientHeight],
    [contact_us, contact_us.offsetTop + contact_us.clientHeight]
]


function handleScroll() {
    let bottomY = window.scrollY + window.innerHeight;

    if (bottomY >= sections[2][1] / 1.5) {
        window.removeEventListener('scroll', handleScroll);
    }

    for (let section of sections) {
        if ( section[1] / 1.5 < bottomY && section[1] > bottomY) {
            section[0].style.transform = 'translateX(0%)';
            break;
        }
        
    }
}

window.addEventListener('scroll', handleScroll);
