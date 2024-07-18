import './styles/styles.scss';
import './styles/home.scss';
import './styles/menu.scss';
import './styles/about.scss';
import { homePage } from './app/home';
import { menuPage } from './app/menu';
import { aboutPage } from './app/about';

const content = document.querySelector('#content-container');
const home_btn = document.getElementById('home-btn');
const menu_btn = document.getElementById('menu-btn');
const about_btn = document.getElementById('about-btn');

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function removeActive(page) {
    document.querySelectorAll('.nav-link').forEach((btn)=> { 
        btn.classList.remove('active');
        page.classList.add('active');
    })
}

home_btn.addEventListener('click', ()=> {
    clearContent();
    content.appendChild(homePage());
    removeActive(home_btn);
})

menu_btn.addEventListener('click', ()=> {
    clearContent();
    content.appendChild(menuPage());
    removeActive(menu_btn);
})

about_btn.addEventListener('click', ()=> {
    clearContent();
    content.appendChild(aboutPage());
    removeActive(about_btn);
})


content.appendChild(homePage());
removeActive(home_btn);

