let bannerPop = document.querySelector('#ban-pop');
let bannerTech = document.querySelector('#ban-tech');
let bannerPsy = document.querySelector('#ban-psy');
let btn = document.querySelector('#btn')
let aboutPop = document.querySelector('#pro-pop');
let aboutTech = document.querySelector('#pro-tech');
let aboutPsy = document.querySelector('#pro-psy');
console.log(bannerPop);
console.log(bannerTech);
console.log(bannerPsy);
console.log(btn);
console.log(aboutPop);
console.log(aboutTech);
console.log(aboutPsy);


bannerPop.onclick = function() {
  /* location.href = "bannerTech.html" */
  location.replace("bannerPop.html") 
};

bannerTech.onclick = function() {
  /* location.href = "bannerTech.html" */
  location.replace("bannerTech.html") 
};

bannerPsy.onclick = function() {
  /* location.href = "bannerTech.html" */
  location.replace("bannerPsy.html") 
};

aboutPop.onclick = function() {
  /* location.href = "aboutTech.html" */
  window.location.replace("aboutPop.html") 
};

aboutTech.onclick = function() {
  /* location.href = "aboutTech.html" */
  location.replace("aboutTech.html") 
};

aboutPsy.onclick = function() {
  /* location.href = "aboutTech.html" */
  location.replace("aboutPsy.html") 
};

btn.addEventListener("click", turnHome);

function turnHome() {
  window.location.replace("index.html");
};

