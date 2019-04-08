const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navigation = document.querySelector('nav');

let links = navigation.getElementsByTagName('a');

navigation.append('Yes');
navigation.prepend('No');

navigation.style.color = 'green';
links[0].textContent = 'Services';
links[0].style.color = 'green';
links[1].textContent = 'Product';
links[1].style.color = 'green';
links[2].textContent = 'Vision';
links[2].style.color = 'green';
links[3].textContent = 'Features';
links[3].style.color = 'green';
links[4].textContent = 'About';
links[4].style.color = 'green';
links[5].textContent = 'Contact';
links[5].style.color = 'green';


let topimg = document.getElementById('cta-img');
topimg.setAttribute('src', siteContent[`cta`][`img-src`]);

let midimg = document.getElementById('middle-img');
midimg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let toptext = document.querySelector(`h1`);
toptext.innerHTML = 'DOM<br> Is<br> Awesome';

let topbutton = document.querySelector('button');
topbutton.textContent = `Get Started`;

let middleheads = document.querySelectorAll('h4');
middleheads[0].textContent = 'Features';
middleheads[1].textContent = 'About';
middleheads[2].textContent = 'Services';
middleheads[3].textContent = 'Product';
middleheads[4].textContent = 'Vision';
middleheads[5].textContent = 'Contact';

let paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paragraphs[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphs[5].innerHTML = '123 Way 456 Street </br> Somewhere, USA';
paragraphs[6].textContent = '1 (888) 888-8888';
paragraphs[7].textContent = 'sales@greatidea.io';
paragraphs[8].textContent = 'Copyright Great Idea! 2018';