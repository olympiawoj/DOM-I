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

/*The DOM is an object representation of the HTML 
elements of a web page

We can access the DOM through the global JS object document
We can select individual elements or groups of them
using document's built-in methods
*/

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav
let anchorQuery = document.querySelectorAll('a');

//chain on a dot filter to only get nav ones
const navKeys = Object.keys(siteContent["nav"]).filter(key => {
  if (key.includes("nav")){
    return key
  } 
})

anchorQuery.forEach((element, index) => {
  // element.textContent = siteContent["nav"][`nav-item-${index}`];
  element.textContent = siteContent["nav"][navKeys[index]];
})

//CTA
let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let h1Element = document.querySelector("h1")
h1Element.textContent = siteContent["cta"]["h1"]

let buttonElement = document.querySelector("button")
buttonElement.textContent = siteContent["cta"]["button"]

//H4
let h4Query = document.querySelectorAll("h4")
h4Query[0].textContent = siteContent["main-content"]["features-h4"]
h4Query[1].textContent = siteContent["main-content"]["about-h4"]
h4Query[2].textContent = siteContent["main-content"]["services-h4"]
h4Query[3].textContent = siteContent["main-content"]["product-h4"]
h4Query[4].textContent = siteContent["main-content"]["vision-h4"]
h4Query[5].textContent = siteContent["contact"]["contact-h4"]

//Main Content P
let p = document.querySelectorAll(".text-content p")
p[0].textContent = siteContent["main-content"]["features-content"]
p[1].textContent = siteContent["main-content"]["about-content"]
p[2].textContent = siteContent["main-content"]["services-content"]
p[3].textContent = siteContent["main-content"]["product-content"]
p[4].textContent = siteContent["main-content"]["vision-content"]



let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Contact
let contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]


let footerP = document.querySelector("footer p")
footerP.textContent = siteContent["footer"]["copyright"]
