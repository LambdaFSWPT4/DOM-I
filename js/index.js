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


// TASK 2 & 3:
//Standard function to create elements

// 
function createIndexElement(elementProp) {
  
  for (let i=0; i < elementProp.length; i++){
    // console.log(elementProp[i].type);
    let newElement = document.createElement(elementProp[i].type);
    if (elementProp[i].attrib !== ""){
      // console.log("Not done")
      newElement.setAttribute(elementProp[i].attrib, elementProp[i].attribInfo);
    }
    if (elementProp[i].className != ""){
      newElement.classList.add(elementProp[i].className);
    }
    newElement.textContent = elementProp[i].textContent;
    const newPlacement = document.querySelector(elementProp[i].parent);
    // console.log(newElement);
    // const newPlacement = document.querySelectorAll(elementProp[i].parent);
    // if (newPlacement.length > 1) {
      // newPlacement.forEach(item => item.appendChild(newElement));
    // }
    // else {

    // TASK 4: Define whether it is an append or a prepend - reference used in the elements definition
    if (elementProp[i].method == "append" || elementProp[i].method == "") {
      newPlacement.appendChild(newElement);
    }
    else {
      newPlacement.prepend(newElement);
    }
      
    // }
    
    console.log(newPlacement);
    // newPlacement.appendChild(newElement); 
    // console.log(newElement);
  }
}

// NAV and CTA
let elements = [
  {"type": "a", "attrib": "href", "attribInfo": "#", "textContent": siteContent["nav"]["nav-item-1"], "parent": "nav", "method": "append"},
  {"type": "a", "attrib": "href", "attribInfo": "#", "textContent": siteContent["nav"]["nav-item-2"], "parent": "nav", "method": "append"},
  {"type": "a", "attrib": "href", "attribInfo": "#", "textContent": siteContent["nav"]["nav-item-3"], "parent": "nav", "method": "append"},
  {"type": "a", "attrib": "href", "attribInfo": "#", "textContent": siteContent["nav"]["nav-item-4"], "parent": "nav", "method": "append"},
  {"type": "a", "attrib": "href", "attribInfo": "#", "textContent": siteContent["nav"]["nav-item-5"], "parent": "nav", "method": "append"},
  {"type": "a", "attrib": "href", "attribInfo": "#", "textContent": "NAV6", "parent": "nav", "method": "append"},
  {"type": "a", "attrib": "href", "attribInfo": "#", "textContent": "NAV5", "parent": "nav", "method": "prepend"},
  {"type": "h1", "attrib": "", "attribInfo": "", "textContent": siteContent["cta"]["h1"], "parent": ".cta-text", "method": "append"},
  {"type": "button", "attrib": "", "attribInfo": "", "textContent": siteContent["cta"]["button"], "parent": ".cta-text", "method": "append"}
  // {"type": "div", "attrib": "", "attribInfo": "", "textContent": siteContent["main-content"]["features-h4"], "parent": "top-content", "className": "text-content"},
  // {"type": "h4", "attrib": "", "attribInfo": "", "textContent": siteContent["main-content"]["features-h4"], "parent": ".top-content"},
  // {"type": "p", "attrib": "", "attribInfo": "", "textContent": siteContent["main-content"]["features-content"], "parent": "#features"},
  // {"type": "h4", "attrib": "", "attribInfo": "", "textContent": siteContent["main-content"]["about-h4"], "parent": "#about"},
  // {"type": "p", "attrib": "", "attribInfo": "", "textContent": siteContent["main-content"]["about-content"], "parent": "#about"},
  // {"type": "h1", "attrib": "", "attribInfo": "", "textContent": siteContent["cta"]["h1"], "parent": ".cta-text"},
  // {"type": "h1", "attrib": "", "attribInfo": "", "textContent": siteContent["cta"]["h1"], "parent": ".cta-text"},
  // {"type": "h1", "attrib": "", "attribInfo": "", "textContent": siteContent["cta"]["h1"], "parent": ".cta-text"},
  // {"type": "h1", "attrib": "", "attribInfo": "", "textContent": siteContent["cta"]["h1"], "parent": ".cta-text"},
];

createIndexElement(elements);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let midImg = document.getElementsByClassName("middle-img");
midImg[0].src = siteContent["main-content"]["middle-img-src"];


let textConHeaders = document.querySelectorAll(".text-content h4");
//top content h4
textConHeaders[0].innerHTML = siteContent["main-content"]["features-h4"]
textConHeaders[1].innerHTML = siteContent["main-content"]["about-h4"]
//bottom content h4
textConHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
textConHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
textConHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

//top content para
let textConPara = document.querySelectorAll(".text-content p");
textConPara[0].innerHTML = siteContent["main-content"]["features-content"];
textConPara[1].innerHTML = siteContent["main-content"]["about-content"];
//bottom content para
textConPara[2].innerHTML = siteContent["main-content"]["services-content"];
textConPara[3].innerHTML = siteContent["main-content"]["product-content"];
textConPara[4].innerHTML = siteContent["main-content"]["vision-content"];


