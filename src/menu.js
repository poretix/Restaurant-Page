import crab from './images/crab.png'
import wheel from './images/helm.png'
import clam from './images/friedclams.jpg'
import seaweed from './images/seaweedsalad.jpg'
import crabroll from './images/crab roll.png'
import crabbasket from './images/crabbasket.jpg'
import fishtaco from './images/fishtaco.jpg'
import background from './images/background.jpg'

const menu = () => {
     //selecting information div
    const information = document.querySelector('.information');

    //creating title for information div
    const title = document.createElement('div');
    title.classList.add("title");
    const crabImage = new Image();
    crabImage.src = crab;
    crabImage.classList.add("crabImage");
    const titletext = document.createElement('div');
    titletext.textContent = "Menu";
    const crabImage2 = new Image();
    crabImage2.src = crab;
    crabImage2.classList.add("crabImage");
    information.appendChild(title);
    title.appendChild(crabImage);
    title.appendChild(titletext);
    title.appendChild(crabImage2);

    //creating appetizers section
    const appetizers = document.createElement('div');
    appetizers.classList.add("subheading");
    information.appendChild(appetizers);

    const appetizersTitle = document.createElement('div');
    appetizersTitle.classList.add("subtitle");
    appetizers.appendChild(appetizersTitle);
    const wheelIcon = new Image();
    wheelIcon.src = wheel;
    wheelIcon.classList.add("wheelImage");
    const appetizersTitleText = document.createElement('div');
    appetizersTitleText.textContent = "Appetizers";
    const wheelIcon2 = new Image();
    wheelIcon2.src = wheel;
    wheelIcon2.classList.add("wheelImage");
    appetizersTitle.appendChild(wheelIcon);
    appetizersTitle.appendChild(appetizersTitleText);
    appetizersTitle.appendChild(wheelIcon2);

    //creating clam appetizer
    const clamappetizer = document.createElement('div');
    clamappetizer.classList.add("subinformation");
    appetizers.appendChild(clamappetizer);

    const clamTitle = document.createElement('div');
    clamTitle.textContent = "Fried Clams"
    clamTitle.classList.add("menuTitle")
    clamappetizer.appendChild(clamTitle);

    const clamDescription = document.createElement('div');
    clamDescription.textContent = "Our famous Fried Clams are a classic seafood delicacy, featuring tender and juicy clam strips, hand-breaded and fried to crispy perfection. Served with a tangy tartar sauce, these fried clams are the perfect start to any seafood feast.";
    clamappetizer.appendChild(clamDescription);

    const clamStats = document.createElement('div');
    clamStats.classList.add("menuStats");
    clamappetizer.appendChild(clamStats);

    const clamPrice = document.createElement('div');
    clamPrice.classList.add("menuPrice");
    clamPrice.textContent = "$9";
    clamStats.appendChild(clamPrice);

    const clamImage = new Image();
    clamImage.src = clam;
    clamImage.classList.add("menuImage");
    clamStats.appendChild(clamImage);

    //creating seaweed salad appetizer
    const seaweedappetizer = document.createElement('div');
    seaweedappetizer.classList.add("subinformation");
    appetizers.appendChild(seaweedappetizer);

    const seaweedTitle = document.createElement('div');
    seaweedTitle.textContent = "Seaweed Salad"
    seaweedTitle.classList.add("menuTitle")
    seaweedappetizer.appendChild(seaweedTitle);

    const seaweedDescription = document.createElement('div');
    seaweedDescription.textContent = "Experience the refreshing taste of the ocean with our Seaweed Salad. Made from a blend of nutrient-rich seaweed, mixed with a savory sesame dressing, this salad is both delicious and healthy. Perfect as a light appetizer or side dish to complement your seafood feast.";
    seaweedappetizer.appendChild(seaweedDescription);

    const seaweedStats = document.createElement('div');
    seaweedStats.classList.add("menuStats");
    seaweedappetizer.appendChild(seaweedStats);

    const seaweedPrice = document.createElement('div');
    seaweedPrice.classList.add("menuPrice");
    seaweedPrice.textContent = "$7";
    seaweedStats.appendChild(seaweedPrice);

    const seaweedImage = new Image();
    seaweedImage.src = seaweed;
    seaweedImage.classList.add("menuImage");
    seaweedStats.appendChild(seaweedImage);

    //creating entree section
    const entree = document.createElement('div');
    entree.classList.add("subheading");
    information.appendChild(entree);

    const entreeTitle = document.createElement('div');
    entreeTitle.classList.add("subtitle");
    entree.appendChild(entreeTitle);
    const wheelIcon3 = new Image();
    wheelIcon3.src = wheel;
    wheelIcon3.classList.add("wheelImage");
    const entreeTitleText = document.createElement('div');
    entreeTitleText.textContent = "Entrées";
    const wheelIcon4 = new Image();
    wheelIcon4.src = wheel;
    wheelIcon4.classList.add("wheelImage");
    entreeTitle.appendChild(wheelIcon3);
    entreeTitle.appendChild(entreeTitleText);
    entreeTitle.appendChild(wheelIcon4);

    //creating crab roll menu item
    const crabrollmenu = document.createElement('div');
    crabrollmenu.classList.add("subinformation");
    entree.appendChild(crabrollmenu);

    const crabrollTitle = document.createElement('div');
    crabrollTitle.textContent = "King Crab Roll"
    crabrollTitle.classList.add("menuTitle")
    crabrollmenu.appendChild(crabrollTitle);

    const crabrollDescription = document.createElement('div');
    crabrollDescription.textContent = "Satisfy your cravings with our King Crab Roll - a delicious twist on the classic seafood roll. Made with succulent, sweet king crab meat, mixed with a blend of herbs and spices, and served on a toasted buttery bun, this dish is a crowd-pleaser. Perfectly paired with our homemade coleslaw and crispy fries, this roll is a must-try for any seafood lover.";
    crabrollmenu.appendChild(crabrollDescription);

    const crabrollStats = document.createElement('div');
    crabrollStats.classList.add("menuStats");
    crabrollmenu.appendChild(crabrollStats);

    const crabrollPrice = document.createElement('div');
    crabrollPrice.classList.add("menuPrice");
    crabrollPrice.textContent = "$23";
    crabrollStats.appendChild(crabrollPrice);

    const crabrollImage = new Image();
    crabrollImage.src = crabroll;
    crabrollImage.classList.add("menuImage");
    crabrollStats.appendChild(crabrollImage);

    //creating crab basket menu item
    const crabbasketmenu = document.createElement('div');
    crabbasketmenu.classList.add("subinformation");
    entree.appendChild(crabbasketmenu);

    const crabbasketTitle = document.createElement('div');
    crabbasketTitle.textContent = "Alaskan Crab Basket"
    crabbasketTitle.classList.add("menuTitle")
    crabbasketmenu.appendChild(crabbasketTitle);

    const crabbasketDescription = document.createElement('div');
    crabbasketDescription.textContent = "Indulge in the ultimate seafood feast with our Alaskan Crab Basket, complete with sweet and succulent Alaskan crab legs, fresh corn on the cob, melted butter, and zesty lemon wedges. Savor the taste of the ocean as you sink your teeth into the juicy crab meat, perfectly paired with the sweetness of the corn. This entree is a must-try for anyone looking to experience the best of both land and sea in one delicious dish.";
    crabbasketmenu.appendChild(crabbasketDescription);

    const crabbasketStats = document.createElement('div');
    crabbasketStats.classList.add("menuStats");
    crabbasketmenu.appendChild(crabbasketStats);

    const crabbasketPrice = document.createElement('div');
    crabbasketPrice.classList.add("menuPrice");
    crabbasketPrice.textContent = "$40";
    crabbasketStats.appendChild(crabbasketPrice);

    const crabbasketImage = new Image();
    crabbasketImage.src = crabbasket;
    crabbasketImage.classList.add("menuImage");
    crabbasketStats.appendChild(crabbasketImage);

    //creating fish taco menu item
    const fishtacomenu = document.createElement('div');
    fishtacomenu.classList.add("subinformation");
    entree.appendChild(fishtacomenu);

    const fishtacoTitle = document.createElement('div');
    fishtacoTitle.textContent = "Fish Tacos"
    fishtacoTitle.classList.add("menuTitle")
    fishtacomenu.appendChild(fishtacoTitle);

    const fishtacoDescription = document.createElement('div');
    fishtacoDescription.textContent = "With a blend of crispy textures and bold flavors, our Fish Tacos are sure to satisfy your seafood cravings. Perfectly portioned as a meal or shareable appetizer, these three tacos are packed with delicious golden-fried fish and a refreshing blend of toppings that will leave you craving more. A definite crowd-pleaser, these tacos are a must-try for any seafood lover.";
    fishtacomenu.appendChild(fishtacoDescription);

    const fishtacoStats = document.createElement('div');
    fishtacoStats.classList.add("menuStats");
    fishtacomenu.appendChild(fishtacoStats);

    const fishtacoPrice = document.createElement('div');
    fishtacoPrice.classList.add("menuPrice");
    fishtacoPrice.textContent = "$15";
    fishtacoStats.appendChild(fishtacoPrice);

    const fishtacoImage = new Image();
    fishtacoImage.src = fishtaco;
    fishtacoImage.classList.add("menuImage");
    fishtacoStats.appendChild(fishtacoImage);
}

export default menu;