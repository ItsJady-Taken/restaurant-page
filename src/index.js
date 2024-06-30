import './styles.scss';
import homePage from './app/home';

function loadHomePage() {
    homePage();
    console.log("it's working")
}

window.loadHomePage = loadHomePage;

loadHomePage();