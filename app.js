'use strict';

var leftPic = document.getElementById('left-image');
// var leftPicText = document.getElementById('left-img-text');
var middlePic = document.getElementById('middle-image');
// var middlePicText = document.getElementById('middle-img-text');
var rightPic = document.getElementById('right-image');
// var rightPicText = document.getElementById('right-img-text');
var imgContainer = document.getElementById('image-container');

var allProducts = [];
var lastViewed = [];
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

// allProducts.pics = [document.getElementById('left-image'), document.getElementById('middle-image'), document.getElementById('right-image')];
// allProducts.tally = document.getElementById('tally');

function showRandomProducts() {
  var random1 = Math.floor(Math.random() * allProducts.length);
  leftPic.src = allProducts[random1].filepath;
  leftPic.alt = allProducts[random1].name;
  leftPic.title = allProducts[random1].name;
  allProducts[random1].views++;
  console.log(allProducts.name, allProducts[random1].views);
  ///// To ensure random2 is different than random1 /////
  var random2 = Math.floor(Math.random() * allProducts.length);
  while (random2 === random1) {
    random2 = Math.floor(Math.random() * allProducts.length);
  }

  middlePic.src = allProducts[random2].filepath;
  middlePic.alt = allProducts[random2].name;
  middlePic.title = allProducts[random2].name;
  allProducts[random2].views++;
  console.log(allProducts.name, allProducts[random2].views);
  ///// To ensure random3 is different than random2 and random1 /////
  var random3 = Math.floor(Math.random() * allProducts.length);
  while (random3 === random1 || random3 === random2) {
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

///// Nicole Inspired handleClick /////
// function handleClick(event) {
//   if (event.target.id === 'left-image' || event.target.id === 'middle-image' || event.target.id === 'right-image') {
//     var random1 = Math.floor(Math.random() * allItems.length);
//     var random2 = Math.floor(Math.random() * allItems.length);
//     var random3 = Math.floor(Math.random() * allItems.length);

//     while (lastViewed.includes(random1) || lastViewed.includes(random2) || lastViewed.includes(random3) || random1 === random2 || random2 === random3 || random3 === random1) {
//       random1 = Math.floor(Math.random() * allProducts.length);
//       random2 = Math.floor(Math.random() * allProducts.length);
//       random3 = Math.floor(Math.random() * allProducts.length);
//     }
//     lastViewed[0] = random1;
//     lastViewed[1] = random2;
//     lastViewed[2] = random3;

//     if (event.target.id === 'left-image') {
//       allProducts[random1].clicks++;
//     } else if (event.target.id === 'middle-image') {
//       allProducts[random2].clicks++;
//     } else {
//       allProducts[random3].clicks++;
//     }

//     allProducts[random1].views++;
//     allProducts[random2].views++;
//     allProducts[random3].views++;

//     leftPic.src = allProducts[random1].src;
//     middlePic.src = allProducts[random2].src;
//     rightPic.src = allProducts[random3].src;

//     leftPicText.textContent = allProducts[random1].name;
//     middlePicText.textContent = allProducts[random2].name;
//     rightPicText.textContent = allProducts[random3].name;

//     clickCount++;
//   }
//   console.log('')
// }

function handleClick(event) {
  ////// Make the clicks stop at 25 //////
  if (allProducts.clicks > 24) {
    imgContainer.removeEventListener('click', handleClick);
  }
  /////// Direct the user to click on a specific image /////
  if (event.target.id === 'image-container') {
    return alert('Please select an image.');
  }
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.id === 'left-image') {
      allProducts[random1].clicks++;
      allProducts[random1].views++;
    } else if (event.target.id === 'middle-image') {
      allProducts[random2].clicks++; 
      allProducts[random2].views++;
    } else {
      allProducts[random3].clicks++;
      allProducts[random3].views++;
    }

    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes++;
      allProducts[i].clicks++;
      clickCount++;
      console.log('test votes: ' + allProducts[i].votes);
      console.log('test clicks: ' + allProducts[i].votes);
    }
    console.log('Click Counter: ' + clickCount);
  }
  showRandomProducts();
}

showRandomProducts();
