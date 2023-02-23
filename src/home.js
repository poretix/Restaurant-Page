import crab from './images/crab.png'
import wheel from './images/helm.png'
import background from './images/background.jpg'

const home = () => {
    //selecting information div
    const information = document.querySelector('.information');

    //creating title for information div
    const title = document.createElement('div');
    title.classList.add("title");
    const crabImage = new Image();
    crabImage.src = crab;
    crabImage.classList.add("crabImage");
    const titletext = document.createElement('div');
    titletext.textContent = "Johnny's Crab Shack";
    const crabImage2 = new Image();
    crabImage2.src = crab;
    crabImage2.classList.add("crabImage");
    information.appendChild(title);
    title.appendChild(crabImage);
    title.appendChild(titletext);
    title.appendChild(crabImage2);

    //creating description and appending it to information div
    const description = document.createElement('div');
    description.classList.add("description");
    information.appendChild(description);

    //creating summary, hours, and location and appending it to description div
    const summary = document.createElement('div');
    const summarytext = document.createElement('div');
    summary.textContent = "Welcome to Johnny's Crab Shack, San Francisco's premier destination for fresh, delicious crab! Our store prides itself on offering the best crab in the city at unbeatable prices. Whether you're a local seafood lover or just visiting, you're sure to find something you love at Johnny's Crab Shack. So come on down, grab a bite, and taste the difference that quality and affordability can make!";
    summary.classList.add("descriptionBox");
    description.appendChild(summary);

    const hours = document.createElement('div');
    hours.classList.add("descriptionBox");
    description.appendChild(hours);
    const hoursTitle = document.createElement('div');
    hoursTitle.textContent = "Hours";
    hoursTitle.classList.add("homeTitle");
    hours.appendChild(hoursTitle);
    const hoursInformation = document.createElement('div');
    hoursInformation.textContent = "Monday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm\nSunday: 8am - 8pm"
    hoursInformation.style.whiteSpace = 'pre';
    hours.appendChild(hoursInformation);

    const location = document.createElement('div');
    location.classList.add("descriptionBox");
    description.appendChild(location);
    const locationTitle = document.createElement('div');
    locationTitle.textContent = "Location";
    locationTitle.classList.add("homeTitle");
    location.appendChild(locationTitle);
    const locationInformation = document.createElement('div');
    locationInformation.textContent = "Fisherman's Wharf Pier 39, San Francisco, CA 94109"
    location.appendChild(locationInformation);

    const contact = document.createElement('div');
    contact.classList.add("descriptionBox");
    description.appendChild(contact);
    const contactTitle = document.createElement('div');
    contactTitle.textContent = "Contact Us";
    contactTitle.classList.add("homeTitle");
    contact.appendChild(contactTitle);
    const contactPhoneInformation = document.createElement('div');
    contactPhoneInformation.textContent = "Phone: (415) 963-4034"
    const contactEmailInformation = document.createElement('div');
    contactEmailInformation.textContent = "Email: johnnyscrabshack@gmail.com"
    contact.appendChild(contactPhoneInformation);
    contact.appendChild(contactEmailInformation);

}

export default home;