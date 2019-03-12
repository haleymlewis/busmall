'use strict';

var imgContainer = document.getElementById('image-container');
var results = document.getElementById('resultsbutton');

var allProducts = [];
var itemLabels = [];
var clickCount = [];

var chartDrawn = false;

var random1 = 0;
var random2 = 0;
var random3 = 0;

function RandomProducts(filepath, name) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.displayed = 0;
  allProducts.push(this);
}

new RandomProducts('bag', 'assets/bag.jpg');
new RandomProducts('Banana Slicer', 'assets/banana.jpg');
new RandomProducts('Bathroom Tablet Mount', 'assets/bathroom.jpg');
new RandomProducts('Toeless Rainboots', 'assets/boots.jpg');
new RandomProducts('Breakfast All-in-One', 'assets/breakfast.jpg');
new RandomProducts('Meatball Bubblegum', 'assets/bubblegum.jpg');
new RandomProducts('Impractical Chair', 'assets/chair.jpg');
new RandomProducts('Cthulu Action Figure', 'assets/cthulhu.jpg');
new RandomProducts('Pet Beak', 'assets/dog-duck.jpg');
new RandomProducts('Dragon Meat', 'assets/dragon.jpg');
new RandomProducts('U-Pen-sils', 'assets/pen.jpg');
new RandomProducts('Pet Sweep', 'assets/pet-sweep.jpg');
new RandomProducts('Pizza Scissors', 'assets/scissors.jpg');
new RandomProducts('Shark Sleeping Bag', 'assets/shark.jpg');
new RandomProducts('Baby Sweep', 'assets/sweep.png');
new RandomProducts('Tauntaun Sleeping Bag', 'assets/tauntaun.jpg');
new RandomProducts('Unicorn Meat', 'assets/unicorn.jpg');
new RandomProducts('Tenticle USB', 'assets/usb.gif');
new RandomProducts('Impractical Watering Can', 'assets/water-can.jpg');
new RandomProducts('Impractical Wine Glass', 'assets/wine-glass.jpg');

// allProducts.pics = [document.getElementById('left-image'), document.getElementById('middle-image'), document.getElementById('right-image')];
// allProducts.tally = document.getElementById('tally');

function randomizeProducts() {
  random1 = Math.floor(Math.random() * allProducts.length);
};

fucntion showRandomProducts() {
  var imageLeft = randomizeProducts();
  var imageCenter = randomizeProducts();
  var imageRight = randomizeProducts();

  while (imageCenter === imageLeft) {
    imageCenter = randomizeProducts();
  }

  while (imageRight === imageCenter || imageRight === imageLeft) {
    imageRight = randomizeProducts();
  }

  var leftPic = document.getElementById('left-image');
  leftPic.src = allProducts[imageLeft].filepath;
  leftPic.alt = allProducts[imageLeft].name;

  var middlePic = document.getElementById('middle-image');
  middlePic.src = allProducts[imageCenter].filepath;
  middlePic.alt = allProducts[imageCenter].name;

  var rightPic = document.getElementById('right-image');
  rightPic.src = allProducts[imageRight].filepath;
  rightPic.alt = allProducts[imageRight].name;
};

showRandomProducts();

function clicks(event) {
  var imageId = event.target.id;
  var imageAlt = event.target.alt;

  if (imageId === imgContainer) {
    alert('Please select a product to vote!')
  } else if (numberOfClicks < 25) {
    for (var i = o; i < allProducts.length; i++) {
      if(imageAlt === allProducts[i].name) {
        allProducts[i].votes++;
        numberOfClicks++;
      }
      if (numberOfClicks === 25) {
        document.getElementById('resultsbutton');
        resultsbutton.style.visibility = 'hidden';
        showRandomProducts
      }
    }
  }
}

function updateChart() {
  for (var i = o; i < allProducts.length; i++) {
    itemLabels.push(allProducts[i].name);
    clickCount.push(allProducts[i].votes);
  }
}

function makeChart () {
  updateChart();
  var ctx = document.getElementById('chart');

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: itemLabels,
      datasets: [{
        label: 'Product Survey Results',
        data: voteLabels,
        backgroundColor:'red',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Products'
          }
        }],
        yAxes: [{
          ticks: {
            max: 5,
            min: 0,
            stepSize: 1,
          }
        }]
      }
    }
  });
}

imgContainer.addEventListener('click', clicks);
results.addEventListener('click', makeChart);

////////// Code Graveyard //////////////

//   leftPic.src = allProducts[random1].filepath;
//   leftPic.alt = allProducts[random1].name;
//   allProducts[random1].views++;
//   console.log(RandomProducts.name, allProducts[random1].views);
//   ///// To ensure random2 is different than random1 /////
//   random2 = Math.floor(Math.random() * allProducts.length);
//   while (random2 === random1) {
//     random2 = Math.floor(Math.random() * allProducts.length);
//   }

//   middlePic.src = allProducts[random2].filepath;
//   middlePic.alt = allProducts[random2].name;
//   allProducts[random2].views++;
//   console.log(RandomProducts.name, allProducts[random2].views);
//   ///// To ensure random3 is different than random2 and random1 /////
//   random3 = Math.floor(Math.random() * allProducts.length);
//   while (random3 === random1 || random3 === random2) {
//     random3 = Math.floor(Math.random() * allProducts.length);
//   }

//   rightPic.src = allProducts[random3].filepath;
//   rightPic.alt = allProducts[random3].name;
//   allProducts[random3].views++;
//   console.log(RandomProducts.name, allProducts[random3].views);
// }

// if (clickCount <= 25) {
//   leftPic.addEventListener('click', handleClick);
//   middlePic.addEventListener('click', handleClick);
//   rightPic.addEventListener('click', handleClick);
// }

// function handleClick(event) {
//   /////// Direct the user to click on a specific image /////
//   if (event.target.id === 'image-container') {
//     return alert('Please select an image.');
//   }
//   for (var i = 0; i < allProducts.length; i++) {
//     if (event.target.id === 'left-image') {
//       allProducts[random1].clicks++;
//       // clickCount++;
//       allProducts[random1].views++;
//     } else if (event.target.id === 'middle-image') {
//       allProducts[random2].clicks++;
//       // clickCount++;
//       allProducts[random2].views++;
//     } else {
//       allProducts[random3].clicks++;
//       // clickCount++;
//       allProducts[random3].views++;
//     }

//     if (event.target.id === allProducts[i].name) {
//       allProducts[i].votes++;
//       allProducts[i].clicks++;

//     }
    
//     console.log('test votes: ' + allProducts[i].votes);
//     console.log('test clicks: ' + allProducts[i].clicks);
//     console.log('Click Counter: ' + clickCount);
//   }
//   showRandomProducts();
// }

// showRandomProducts();

/////////////// ********** CHART CODE ************* ///////////////////

// function updateChartArrays() {
//   for (var i = 0; i < allProducts.length; i++) {
//     name[i] = allProducts[i].name;
//     clicks[i] = allProducts[i].clicks;
//   }
// }

// function showProductsAsList() {
//   var itemList = document.getElementById('product-list');

//   itemList.innerHTML = '';

//   for (var i = 0; i < allProducts.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = allProducts[i].name + ', ' + allProducts[i].clicks + ' votes';
//     itemList.appendChild(liEl);
//   }
// }

// function tallyVote(thisItem) {
//   for (var i = 0; i < allProducts.length; i++) {
//     if (thisItem === allProducts[i].identifier) {
//       allProducts[i].votes++;
//     }
//   }
//   updateChartArrays();
// }

// var data = {
//   labels: name,
//   datasets: [
//     {
//       data: RandomProducts.clicks,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ]
//     }
//   ]
// };

// function drawChart() {
//   var ctx = document.getElementById("myChart").getContext("2d");

//   var productChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: data,
//     options: {
//       legend: {
//         labels: {
//           fontColor: 'whitesmoke',
//           fontSize: 18
//         }
//       },
//       responsive: false,
//       animation: {
//         duration: 1000,
//         easing: 'easeOutBounce'
//       }
//     },
//     scales: {
//       yAxes: [{
//         ticks: {
//           max: 10,
//           min: 0,
//           stepSize: 1.0
//         }
//       }]
//     }
//   });

//   chartDrawn = true;
// }

// document.getElementById('myChart').addEventListener('click', function () {
//   if (chartDrawn) {
//     productChart.update();
//   }
//   drawChart();
// });

/////////pre-commented out thru local storage///////////////
// document.getElementById('tally').addEventListener('click', function(event) {
//   tallyVote(event.target.id);
//   if (chartDrawn) {
//     productChart.update();
//   }
// });

// document.getElementById('list-button').addEventListener('click', function(){
//   showProductsAsList();
// });

//////////////////// *************** LOCAL STORAGE CODE ***************** ////////////////////////
//// JSON.stringify();  turns some variable into a string.
//// JSON.parse(); turns the string back into the var.
//// localStorage.getItem(); retrievs stuff from local storage.
//// localStorage.setItem(); stores stuff in local storage.

// var foo = {
//   foo: 1,
//   bar: 2,
//   baz: 3
// };


// // console.log('foo ', typeof foo);

// var fooString = JSON.stringify(foo);
// // console.log('type of fooString, ', typeof fooString);

// localStorage.setItem('ourThing', fooString);
// // localStorage.ourThing = fooString;

// var retrievedData = localStorage.getItem('ourThing');
// // var retrievedData2 = localStorage.ourThing

// var retrievedDataParsed = JSON.parse(retrievedData);

// // console.log('retrievedDataParsed, ', retrievedDataParsed);



// var fooStringObject = JSON.parse(fooString);
// console.log('type of fooStringObject,', typeof fooStringObject);