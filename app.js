var firstPic = document.getElementById('1st-image');
var secondPic = document.getElementById('2nd-image');
var thirdPic = document.getElementById('3rd-image');

var allProducts = [];
var currentProducts = [];

function RandomProducts(name) {
  this.filepath = `images/${name}.jpg`;
  this.name = name;
  this.video = 0;
  allProducts.push(this);
}

new RandomProducts('bag');
new RandomProducts('banana');
new RandomProducts('bathroom');
new RandomProducts('boots');
new RandomProducts('breakfast');
new RandomProducts('bubblegum');
new RandomProducts('chair');
new RandomProducts('cthulu');
new RandomProducts('dog-duck');
new RandomProducts('dragon');
new RandomProducts('pen');
new RandomProducts('pet-sweep');
new RandomProducts('scissors');
new RandomProducts('shark');
new RandomProducts('sweep');
new RandomProducts('tauntaun');
new RandomProducts('unicorn');
new RandomProducts('usb');
new RandomProducts('water-can');
new RandomProducts('wine-glass');

