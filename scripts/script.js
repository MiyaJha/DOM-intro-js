const title = document.getElementById("title");

console.log(title);

//  this example querySelector by #id
const h2 = document.querySelector("h2#sub"); 
const p = document.querySelector("p#psent");
const p2 = document.querySelector("p#pp");

console.log(h2);
console.log(p);
console.log(p2);

// this example selects all h3 tags
// const h3Tags = document.querySelectorAll("h3");
// console.log(h3Tags);

// This example selects all h3 tags by .class 
const h3Tags = document.querySelectorAll("h3.test");
console.log(h3Tags);

h2.innerText = "This is a new Title";
h2.innerHTML = "<strong>This is a new Title</strong>";



// example of changing innerText starting with original html and changing
// it through JS 
const p1 = document.querySelector("p#BG");
console.log(p1);

p1.innerText = "Bratz iz where it's at!";
console.log(p1.innerText);
// example to modify ^p1 CSS properties in JS
p1.style.color = "pink";
console.log(p1);




// Example to change the from original html image to a new image. Not working
// come back later***

const imgElement = document.querySelector('img#myimage');

imgElement.setAttribute("src", "images/snow.jpeg");



// continue exercises from intro to dom slides***

// const div = document.querySelector("div#container");
const newDiv = document.createElement("div");
newDiv.className = "container";
newDiv.innerText = "This is a new div";

console.log(newDiv);

// append new div to the body

document.body.append(newDiv);


// append new p element inside the new div

const newP = document.createElement("p");
newP.innerText = "this is a new paragraph";
newDiv.append(newP);

// removing elements from the DOM (both the new div and new p went away from document)
newDiv.remove();
// reappend element (both elements returned to document)
document.body.append(newDiv);
