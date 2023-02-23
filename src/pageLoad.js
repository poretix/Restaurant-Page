import background from './images/background.jpg'

const pageLoad = () => {
     //selecting content div
     const content = document.querySelector('#content');

     //creating header and appending to content div
     const header = document.createElement('div');
     header.classList.add("header");
     content.appendChild(header);
 
     //creating header buttons: home, menu, and contact
     const homeButton = document.createElement('button');
     homeButton.textContent = "Home";
     homeButton.classList.add("headerButton");
     homeButton.setAttribute("id", "home");
     header.appendChild(homeButton);
 
     const menuButton = document.createElement('button');
     menuButton.textContent = "Menu";
     menuButton.classList.add("headerButton");
     menuButton.setAttribute("id", "menu");
     header.appendChild(menuButton);
     
     //creating main body div to hold information and have a background
     const mainBody = document.createElement('div');
     mainBody.classList.add("mainBody");
     content.appendChild(mainBody);
     mainBody.style.backgroundImage = `url('${background}')`;

     //creating information div and appending to mainBody div
     const information = document.createElement('div');
     information.classList.add("information");
     mainBody.appendChild(information);
}

export default pageLoad;