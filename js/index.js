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


const topContentFeaturesHeading = document.querySelector('.top-content .text-content:nth-child(odd) h4');

const featuresContent = siteContent['main-content']['features-h4'];

topContentFeaturesHeading.textContent = featuresContent;


const topContentFeaturesAbout = document.querySelector('.top-content .text-content:nth-child(even) h4');
const aboutContent = siteContent['main-content']['about-h4'];

topContentFeaturesAbout.textContent = aboutContent;


const bottomContentServicesVision = document.querySelector('.bottom-content .text-content:nth-child(odd) h4');
const servicesContent = siteContent['main-content']['services-h4'];

bottomContentServicesVision.textContent = servicesContent;


const bottomContentProduct = document.querySelector('.bottom-content .text-content:nth-child(even) h4');
const productContent = siteContent['main-content']['product-h4'];

bottomContentProduct.textContent = productContent;


const bottomContentVision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
const visionContent = siteContent['main-content']['vision-h4'];

bottomContentVision.textContent = visionContent;


const topContentFeaturesParagraph = document.querySelector('.top-content .text-content:nth-child(odd) p');
const featuresParagraph = siteContent['main-content']['features-content'];

topContentFeaturesParagraph.textContent = featuresParagraph;


const topContentAboutParagraph = document.querySelector('.top-content .text-content:nth-child(even) p');
const aboutParagraph = siteContent['main-content']['about-content'];

topContentAboutParagraph.textContent = aboutParagraph;


const bottomContentServicesParagraph = document.querySelector('.bottom-content .text-content:nth-child(odd) p');
const servicesParagraph = siteContent['main-content']['services-content'];

bottomContentServicesParagraph.textContent = servicesParagraph;


const bottomContentProductParagraph = document.querySelector('.bottom-content .text-content:nth-child(even) p');
const productParagraph = siteContent['main-content']['product-content'];

bottomContentProductParagraph.textContent = productParagraph;

const bottomContentVisionParagraph = document.querySelector('.bottom-content .text-content:nth-child(3) p');
const visionParagraph = siteContent['main-content']['vision-content'];

bottomContentVisionParagraph.textContent = visionParagraph;

const contact1 = document.querySelector('.contact h4');
const headingContact1 = siteContent.contact['contact-h4'];

contact1.textContent = headingContact1;

const contact2 = document.querySelectorAll('.contact p');

const contactAddress = siteContent.contact.address;
contact2[0].textContent = contactAddress;

const contactPhone = siteContent.contact.phone;
contact2[1].textContent = contactPhone;

const contactEmail = siteContent.contact.email;
contact2[2].textContent = contactEmail;

const footer = document.querySelector('footer p');
const {
copyright,
} = siteContent.footer;

footer.textContent = copyright;

navs.forEach(item => item.style.color = 'green');

const randomElement1 = document.createElement('a');
randomElement1.textContent = 'Hey there, whats up?';

const destination = document.querySelector('nav');

destination.prepend(randomElement1);

const randomElement2 = document.createElement('a');
randomElement2.textContent = 'Nothing much';

const destination2 = document.querySelector('nav');

destination2.append(randomElement2);