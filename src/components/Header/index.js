import './style.css';

export const Header = () => {
    const element = document.createElement('header');
    element.id = "home";
    
    element.innerHTML = `
        <div class="header__content container">
        <div class="site-logo"></div>

        <div class="navigation">
            <button class="nav-btn"></button>
            <nav class="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
            </nav>
        </div>
        </div>`

    const navBtn = element.querySelector('.nav-btn');
    navBtn.addEventListener('click', () => {
        const rolloutNav = element.querySelector('.rollout-nav');
        rolloutNav.classList.toggle('nav-closed');
    })

    const rolloutNav = element.querySelector('.rollout-nav');
    rolloutNav.addEventListener('click', () => {
        rolloutNav.classList.add('nav-closed');
    })


    return element;
}