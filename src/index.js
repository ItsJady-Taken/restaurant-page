import './styles/styles.scss';
import './styles/home.scss';
import './styles/menu.scss'
import { homePage } from './app/home';
import { menuPage } from './app/menu';

const content = document.querySelector('#content-container');
const home_btn = document.getElementById('home-btn');
const menu_btn = document.getElementById('menu-btn');

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

content.appendChild(homePage());
removeActive(home_btn);

