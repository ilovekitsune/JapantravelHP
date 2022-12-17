let backgroundIndex = 0;
let topBackgound = document.querySelector("section.background-img");
let imagesArr = [];
imagesArr.push("japansakura.jpg", "oldkyotocity.jpg", "osakastreet.jpg");

setInterval(() => {
  if (backgroundIndex == imagesArr.length - 1) {
    topBackgound.style.backgroundImage =
      'url("https://ilovekitsune.github.io/JapantravelHP/images/' +
      imagesArr[backgroundIndex] +
      '")';
    //console.log('url("../images/' + imagesArr[backgroundIndex] + '")');
    //console.log(imagesArr.length);
    backgroundIndex = 0;
  } else {
    topBackgound.style.backgroundImage =
      'url("https://ilovekitsune.github.io/JapantravelHP/images/' +
      imagesArr[backgroundIndex] +
      '")';
    //console.log('url("../images/' + imagesArr[backgroundIndex] + '")');
    backgroundIndex += 1;
  }
  //console.log(imagesArr[backgroundIndex]);
  // console.log(backgroundIndex);
}, 3000);
