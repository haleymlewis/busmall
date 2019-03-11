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

var chartDrawn = false;

var random1 = 0;
var random2 = 0;
var random3 = 0;

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
  random1 = Math.floor(Math.random() * allProducts.length);
  leftPic.src = allProducts[random1].filepath;
  leftPic.alt = allProducts[random1].name;
  leftPic.title = allProducts[random1].name;
  allProducts[random1].views++;
  console.log(RandomProducts.name, allProducts[random1].views);
  ///// To ensure random2 is different than random1 /////
  random2 = Math.floor(Math.random() * allProducts.length);
  while (random2 === random1) {
    random2 = Math.floor(Math.random() * allProducts.length);
  }

  middlePic.src = allProducts[random2].filepath;
  middlePic.alt = allProducts[random2].name;
  middlePic.title = allProducts[random2].name;
  allProducts[random2].views++;
  console.log(RandomProducts.name, allProducts[random2].views);
  ///// To ensure random3 is different than random2 and random1 /////
  random3 = Math.floor(Math.random() * allProducts.length);
  while (random3 === random1 || random3 === random2) {
    random3 = Math.floor(Math.random() * allProducts.length);
  }

  rightPic.src = allProducts[random3].filepath;
  rightPic.alt = allProducts[random3].name;
  rightPic.title = allProducts[random3].name;
  allProducts[random3].views++;
  console.log(RandomProducts.name, allProducts[random3].views);
}

if (clickCount <= 25) {
  leftPic.addEventListener('click', handleClick);
  middlePic.addEventListener('click', handleClick);
  rightPic.addEventListener('click', handleClick);
}

function handleClick(event) {
  /////// Direct the user to click on a specific image /////
  if (event.target.id === 'image-container') {
    return alert('Please select an image.');
  }
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.id === 'left-image') {
      allProducts[random1].clicks++;
      // clickCount++;
      allProducts[random1].views++;
    } else if (event.target.id === 'middle-image') {
      allProducts[random2].clicks++;
      // clickCount++;
      allProducts[random2].views++;
    } else {
      allProducts[random3].clicks++;
      // clickCount++;
      allProducts[random3].views++;
    }

    if (event.target.id === allProducts[i].name) {
      allProducts[i].votes++;
      allProducts[i].clicks++;

    }
    
    console.log('test votes: ' + allProducts[i].votes);
    console.log('test clicks: ' + allProducts[i].clicks);
    console.log('Click Counter: ' + clickCount);
  }
  showRandomProducts();
}

showRandomProducts();

/////////////// ********** CHART CODE ************* ///////////////////

function updateChartArrays() {
  for (var i = 0; i < allProducts.length; i++) {
    name[i] = allProducts[i].name;
    clicks[i] = allProducts[i].clicks;
  }
}

function showProductsAsList() {
  var itemList = document.getElementById('product-list');

  itemList.innerHTML = '';

  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allProducts[i].name + ', ' + allProducts[i].clicks + ' votes';
    itemList.appendChild(liEl);
  }
}

function tallyVote(thisItem) {
  for (var i = 0; i < allProducts.length; i++) {
    if (thisItem === allProducts[i].identifier) {
      allProducts[i].votes++;
    }
  }
  updateChartArrays();
}

var data = {
  labels: name,
  datasets: [
    {
      data: RandomProducts.clicks,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ]
    }
  ]
};

function drawChart() {
  var ctx = document.getElementById("myChart").getContext("2d");

  var productChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      legend: {
        labels: {
          fontColor: 'whitesmoke',
          fontSize: 18
        }
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });

  chartDrawn = true;
}

document.getElementById('myChart').addEventListener('click', function () {
  if (chartDrawn) {
    productChart.update();
  }
  drawChart();
});

// document.getElementById('tally').addEventListener('click', function(event) {
//   tallyVote(event.target.id);
//   if (chartDrawn) {
//     productChart.update();
//   }
// });

// document.getElementById('list-button').addEventListener('click', function(){
//   showProductsAsList();
// });

