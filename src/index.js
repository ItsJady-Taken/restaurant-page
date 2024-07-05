import './styles/styles.scss';
import './styles/home.scss';
import { homePage } from './app/home';

const content = document.querySelector('#content-container');

content.appendChild(homePage());