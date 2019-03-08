'use strict';

var leftPic = document.getElementById('left-image');
var middlePic = document.getElementById('middle-image');
var rightPic = document.getElementById('right-image');
var imgContainer = document.getElementById('image-container');

var allProducts = [];
var clickCount = 0;

function RandomProducts(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

new RandomProducts('assets/bag.jpg', 'R2D2 Bag');
new RandomProducts('assets/banana.jpg', 'Banana Slicer');
new RandomProducts('assets/bathroom.jpg', 'Bathroom Tablet Mount');
new RandomProducts('assets/boots.jpg', 'Toeless Rainboots');
new RandomProducts('assets/breakfast.jpg', 'Breakfast All-in-One');
new RandomProducts('assets/bubblegum.jpg', 'Meatball Bubblegum');
new RandomProducts('assets/chair.jpg', 'Impractical Chair');
new RandomProducts('assets/cthulhu.jpg', 'Cthulu Action Figure');
new RandomProducts('assets/dog-duck.jpg', 'Pet Beak');
new RandomProducts('assets/dragon.jpg', 'Dragon Meat');
new RandomProducts('assets/pen.jpg', 'U-Pen-sils');
new RandomProducts('assets/pet-sweep.jpg', 'Pet Sweep');
new RandomProducts('assets/scissors.jpg', 'Pizza Scissors');
new RandomProducts('assets/shark.jpg', 'Shark Sleeping Bag');
new RandomProducts('assets/sweep.png', 'Baby Sweep');
new RandomProducts('assets/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new RandomProducts('assets/unicorn.jpg', 'Unicorn Meat');
new RandomProducts('assets/usb.gif', 'Tenticle USB');
new RandomProducts('assets/water-can.jpg', 'Impractical Watering Can');
new RandomProducts('assets/wine-glass.jpg', 'Impractical Wine Glass');

allProducts.justViewed = [];
allProducts.pics = [document.getElementById('left-image'), document.getElementById('middle-image'), document.getElementById('right-image')];
allProducts.tally = document.getElementById('tally');

function showRandomProducts() {  
  var random1 = Math.floor(Math.random() * allProducts.length);
  leftPic.src = allProducts[random1].filepath;
  leftPic.alt = allProducts[random1].name;
  leftPic.title = allProducts[random1].name;
  allProducts[random1].views++;
  console.log(allProducts.name, allProducts[random1].views);
  ///// To ensure random2 is different than random1 /////
  var random2 = Math.floor(Math.random() * allProducts.length);
  while (random2 === random1){
    random2 = Math.floor(Math.random() * allProducts.length);
  }

  middlePic.src = allProducts[random2].filepath;
  middlePic.alt = allProducts[random2].name;
  middlePic.title = allProducts[random2].name;
  allProducts[random2].views++;
  console.log(allProducts.name, allProducts[random2].views);
  ///// To ensure random3 is different than random2 and random1 /////
  var random3 = Math.floor(Math.random() * allProducts.length);
  while (random3 === random1 || random3 === random2){
    random3 = Math.floor(Math.random() * allProducts.length);
  }

  rightPic.src = allProducts[random3].filepath;
  rightPic.alt = allProducts[random3].name;
  rightPic.title = allProducts[random3].name;
  allProducts[random3].views++;
  console.log(allProducts.name, allProducts[random3].views);
}


leftPic.addEventListener('click', handleClick);
middlePic.addEventListener('click', handleClick);
rightPic.addEventListener('click', handleClick);

function handleClick(event){
  ////// Make the clicks stop at 25 //////
  if(RandomProducts.clicks > 24) {
    imgContainer.removeEventListener('click', handleClick);
  }
  /////// Direct the user to click on a specific image /////
  if(event.target.id === 'image-container') {
    return alert('Please select an image.');
  }
  for(var i = 0; i < allProducts.length; i++) {
    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes++;
      allProducts[i].clicks++;
      clickCount++;
    }
    console.log('Click Counter: ' + clickCount);
  }
  showRandomProducts();
}

showRandomProducts();
