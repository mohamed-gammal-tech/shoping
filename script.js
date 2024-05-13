document.addEventListener('DOMContentLoaded', function () {
  // Header import
  fetch("loggedHeader.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  // Footer Import
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

  // Price filter visibility toggle
  const priceFilterToggle = document.getElementById('priceFilterToggle');
  const priceFilterContainer = document.getElementById('priceFilterContainer');

  if (priceFilterToggle && priceFilterContainer) {
    priceFilterToggle.addEventListener('click', function () {
      priceFilterContainer.style.display = priceFilterContainer.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Slider functionality (if applicable, add a slider element in your HTML)
  const slider = document.querySelector('.range input[type="range"]');
  const sliderValue = document.querySelector('.sliderValue span');

  if (slider && sliderValue) {
    slider.addEventListener('input', function () {
      sliderValue.textContent = this.value;
    });
  }
  // Handle the change of the T-shirt checkbox Start
  var coverImage = document.getElementById('coverImage');
  var titleText = document.getElementById('titleText');
  var tshirtsradio = document.getElementById('t-shirts');
  var hoodiesradio = document.getElementById('hoodies');
  var sweatshirtsradio = document.getElementById('sweatshirts');
  var bagsradio = document.getElementById('bags');
  var mugsradio = document.getElementById('mugs');
  var hatradio = document.getElementById('hats');
  var postersradio = document.getElementById('posters');
  var canvasradio = document.getElementById('canvas');
  var phonecasesradio = document.getElementById('phonecases');
  var stickersradio = document.getElementById('stickers');
  var notebooksradio = document.getElementById('notebooks');


  // Handle the change of the hat radio start

  if (hatradio && coverImage && titleText) {
    hatradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/hats-section.jpg' : 'images/Gammal Tech website mug.png';
      titleText.textContent = this.checked ? 'Discover Our Extensive Collection of Hats' : 'Discover Our Extensive Collection of Hats';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the T-shirt radio End
  // Handle the change of the har radio start

  if (tshirtsradio && coverImage && titleText) {
    tshirtsradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/t-shirt-section.jpg' : 'images/t-shirt-section.jpg';
      titleText.textContent = this.checked ? 'Unveil a World of Style with Our Exclusive T-shirt Collection' : 'Unveil a World of Style with Our Exclusive T-shirt Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the hat radio End
  // Handle the change of the har radio start

  if (hoodiesradio && coverImage && titleText) {
    hoodiesradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/hoodies-section.jpg' : 'images/hoodies-section.jpg';
      titleText.textContent = this.checked ? 'Dive Into Comfort with Our Trendsetting Hoodies' : 'Dive Into Comfort with Our Trendsetting Hoodies';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the hat radio End

  // Handle the sweatshirts of the har radio start

  if (sweatshirtsradio && coverImage && titleText) {
    sweatshirtsradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/sweatshirts-section.jpg' : 'images/sweatshirts-section.jpg';
      titleText.textContent = this.checked ? 'Wrap Yourself in Style with Our Captivating Sweatshirt Collection' : 'Wrap Yourself in Style with Our Captivating Sweatshirt Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the sweatshirts radio End
  // Handle the bags of the har radio start

  if (bagsradio && coverImage && titleText) {
    bagsradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/bags-section.jpg' : 'images/bags-section.jpg';
      titleText.textContent = this.checked ? 'Discover Elegance in Every Detail with Our Bag Collection' : 'Discover Elegance in Every Detail with Our Bag Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the bags radio End
  // Handle the Mugs of the har radio start

  if (mugsradio && coverImage && titleText) {
    mugsradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/mugs-section.jpg' : 'images/mugs-section.jpg';
      titleText.textContent = this.checked ? 'Uncover the Artistry in Our Diverse Mug Collection' : 'Uncover the Artistry in Our Diverse Mug Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the Mugs radio End
  // Handle the posters of the har radio start

  if (postersradio && coverImage && titleText) {
    postersradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/posters-section.jpg' : 'images/posters-section.jpg';
      titleText.textContent = this.checked ? 'Illuminate Your Space with Our Inspiring Poster Collection' : 'Illuminate Your Space with Our Inspiring Poster Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the posters radio End
  // Handle the canvas of the har radio start

  if (canvasradio && coverImage && titleText) {
    canvasradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/canvas-section.jpg' : 'images/canvas-section.jpg';
      titleText.textContent = this.checked ? 'Enhance Your Walls with Our Artistic Canvas Collection' : 'Enhance Your Walls with Our Artistic Canvas Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the canvas radio End
  // Handle the phonecases of the har radio start

  if (phonecasesradio && coverImage && titleText) {
    phonecasesradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/phonecases-section.jpg' : 'images/phonecases-section.jpg';
      titleText.textContent = this.checked ? 'Elevate Your Style with Our Designer Phone Case Collection' : 'Elevate Your Style with Our Designer Phone Case Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the phonecases radio End
  // Handle the stickers of the har radio start

  if (stickersradio && coverImage && titleText) {
    stickersradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/stickers-section.jpg' : 'images/stickers-section.jpg';
      titleText.textContent = this.checked ? 'Add a Splash of Fun with Our Vibrant Sticker Collection' : 'Add a Splash of Fun with Our Vibrant Sticker Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the stickers radio End
  // Handle the notebooks of the har radio start

  if (notebooksradio && coverImage && titleText) {
    notebooksradio.addEventListener('change', function () {
      coverImage.src = this.checked ? 'images/notebooks-section.jpg' : 'images/notebooks-section.jpg';
      titleText.textContent = this.checked ? 'Unlock Creativity with Our Elegant Notebook Collection' : 'Unlock Creativity with Our Elegant Notebook Collection';
    });
  } else {
    console.error('Element not found'); // Error message if elements are not found
  }
  // Handle the change of the notebooks radio End


});
