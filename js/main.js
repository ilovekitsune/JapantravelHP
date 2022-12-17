let backgroundIndex = 0;
let topBackgound = document.querySelector("section.background-img");
let imagesArr = [];
imagesArr.push("日本櫻花.jpg", "京都古城.jpg", "大阪街頭.jpg");

setInterval(() => {
  if (backgroundIndex == imagesArr.length - 1) {
    topBackgound.style.backgroundImage =
      'url("../images/' + imagesArr[backgroundIndex] + '")';
    //console.log('url("../images/' + imagesArr[backgroundIndex] + '")');
    //console.log(imagesArr.length);
    backgroundIndex = 0;
  } else {
    topBackgound.style.backgroundImage =
      'url("../images/' + imagesArr[backgroundIndex] + '")';
    //console.log('url("../images/' + imagesArr[backgroundIndex] + '")');
    backgroundIndex += 1;
  }
  //console.log(imagesArr[backgroundIndex]);
  // console.log(backgroundIndex);
}, 3000);
