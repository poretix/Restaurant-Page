import './style.css';
import pageLoad from './pageLoad';
import home from './home';
import menu from './menu';


//initial page load
pageLoad();
home();

const information = document.querySelector('.information');

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', function() {
    while (information.firstChild) {
        information.removeChild(information.firstChild);
    }
    home();
    console.log("home");
})

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', function() {
    while (information.firstChild) {
        information.removeChild(information.firstChild);
    }
    menu();
    console.log("menu");
})
