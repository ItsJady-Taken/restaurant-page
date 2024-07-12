import './styles/styles.scss';
import './styles/home.scss';
import { homePage } from './app/home';

const content = document.querySelector('#content-container');
const home_btn = document.getElementById('home-btn');
const menu_btn = document.getElementById('menu-btn');

content.appendChild(homePage());

home_btn.addEventListener('click', ()=> {
    content.appendChild(homePage());
    home_btn.classList.add('active');
})

menu_btn.addEventListener('click', ()=> {
    return; 
})