const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);

const headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent.cta['img-src']);

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


const btn = document.querySelector('button');
const btn2 = siteContent.cta.button;
btn.textContent = btn2;

const heading = document.querySelector('h1');
const heading2 = siteContent.cta.h1;
heading.textContent = heading2;

const navs = document.querySelectorAll('a');
const nav1 = siteContent.nav['nav-item-1'];

navs[0].textContent = nav1;

const nav2 = siteContent.nav['nav-item-2'];
navs[1].textContent = nav2;

const nav3 = siteContent.nav['nav-item-3'];
navs[2].textContent = nav3;

const nav4 = siteContent.nav['nav-item-4'];
navs[3].textContent = nav4;

const nav5 = siteContent.nav['nav-item-5'];
navs[4].textContent = nav5;

const nav6 = siteContent.nav['nav-item-6'];
navs[5].textContent = nav6;


const topContentPara1 = document.querySelector('.top-content .text-content:nth-child(odd)');
const featuresContent = siteContent['main-content']['features-content'];

topContentPara1.textContent = featuresContent;


const topContentPara2 = document.querySelector('.top-content .text-content:nth-child(even)');
const aboutContent = siteContent['main-content']['about-content'];

topContentPara2.textContent = aboutContent;


const bottomContent = document.querySelectorAll('.bottom-content .text-content');
const services = siteContent['main-content']['services-h4'];

bottomContent[0].textContent = services;

const product = siteContent['main-content']['product-h4'];
bottomContent[1].textContent = product;

const vision = siteContent['main-content']['vision-h4'];
bottomContent[2].textContent = vision;


const bottomContentPara1 = document.querySelector('.bottom-content .text-content:nth-child(odd)');
const servicesContent = siteContent['main-content']['services-content'];

bottomContentPara1.textContent = servicesContent;

const bottomContentPara2 = document.querySelector('.bottom-content .text-content:nth-child(even)');
const productContent = siteContent['main-content']['product-content'];

bottomContentPara2.textContent = productContent;

const bottomContentPara3 = document.getElementsByClassName('text-content');

const visionContent = siteContent['main-content']['vision-content'];

bottomContentPara3[4].textContent = visionContent;


const contact = document.querySelectorAll('.contact h4,p');

const contactHeading = siteContent.contact['contact-h4'];

contact[0].textContent = contactHeading;

contactAdress = siteContent.contact.address;

contact[1].textContent = contactAdress;

contactPhone = siteContent.contact.phone;
contact[2].textContent = contactPhone;

contactEmail = siteContent.contact.email;
contact[3].textContent = contactEmail;


const footer = document.querySelector('footer p');
const {copyright} = siteContent.footer;

footer.textContent = copyright;


// only affecting heading in footer but not on the rest of them

const biggerFonts = document.querySelectorAll(' h4');

biggerFonts.forEach((item) => {
  item.style.fontSize = '3rem';
});


// not working

const tryAgain = document.getElementsByTagName('h4');
tryAgain[0].style.fontSize = '20px';
