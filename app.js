'use strict';

var leftPic = document.getElementById('1st-image');
var middlePic = document.getElementById('2nd-image');
var rightPic = document.getElementById('3rd-image');

var allProducts = [];
var currentProducts = [];

var clickCount = 0;

function RandomProducts(name, displayName) {
  this.name = name;
  this.displayName = displayName;
  this.filepath = `imgs/${name}`;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

new RandomProducts('bag.jpg', 'R2D2 Bag');
new RandomProducts('banana.jpg', 'Banana Slicer');
new RandomProducts('bathroom.jpg', 'Bathroom Tablet Mount');
new RandomProducts('boots.jpg', 'Toeless Rainboots');
new RandomProducts('breakfast.jpg', 'Breakfast All-in-One');
new RandomProducts('bubblegum.jpg', 'Meatball Bubblegum');
new RandomProducts('chair.jpg', 'Impractical Chair');
new RandomProducts('cthulu.jpg', 'Cthulu Action Figure');
new RandomProducts('dog-duck.jpg', 'Pet Beak');
new RandomProducts('dragon.jpg', 'Dragon Meat');
new RandomProducts('pen.jpg', 'U-Pen-sils');
new RandomProducts('pet-sweep.jpg', 'Pet Sweep');
new RandomProducts('scissors.jpg', 'Pizza Scissors');
new RandomProducts('shark.jpg', 'Shark Sleeping Bag');
new RandomProducts('sweep.png', 'Baby Sweep');
new RandomProducts('tauntaun.jpg', 'Tauntaun Sleeping Bag');
new RandomProducts('unicorn.jpg', 'Unicorn Meat');
new RandomProducts('usb.gif', 'Tenticle USB');
new RandomProducts('water-can.jpg', 'Impractical Watering Can');
new RandomProducts('wine-glass.jpg', 'Impractical Wine Glass');


function chooseProducts() {
  let currentPictures = [];
  do {
    do {
      var randomNumber = Math.floor(Math.random() * allProducts.length);
      var picture = allProducts[randomNumber];
    } while (previousPictures.includes(picture) || currentPictures.includes(picture));
    currentPictures.push(picture);
  } while (currentPictures.length < 3);

  return currentPictures;
}

var previousPictures = [];
oneRound();

function oneRound() {
  var currentProducts = chooseProducts();
  render(currentProducts);

  for (var i = 0; i < 3; i++) {
    currentProducts[i].views++;
  }
  previousPictures = currentProducts;

  clickCount += 1;
}

function render(currentProducts){  
  leftPic.src = currentProducts[random].filepath;
  leftPic.alt = currentProducts[random].name;
  leftPic.title = currentProducts[random].name;

  middlePic.src = currentProducts[random].filepath;
  middlePic.alt = currentProducts[random].name;
  middlePic.title = currentProducts[random].name;

  rightPic.src = currentProducts[random].filepath;
  rightPic.alt = currentProducts[random].name;
  rightPic.title = currentProducts[random].name;

  leftPic.addEventListener('click', handleClick);
  middlePic.addEventListener('click', handleClick);
  rightPic.addEventListener('click', handleClick);
}

function handleClick(event) {
  console.log('target, ', event.target);
  if (turnCount < 26) {
    increaseClickCount(event.target.title);
    oneRound();
  } else if (turnCount === 26){
    createList();
  } else {
    return;
  }
}

function increaseClickCount(title) {
  for (var i = 0; i <allProducts.length; i++) {
    if (allProducts[i].displayName === title) {
      allProducts[i].clicks++;
      break;
    }
  }
}