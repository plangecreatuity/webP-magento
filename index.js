let inputClick = document.querySelector("#userImage");

let uimage = document.querySelector("#uimage");
let wimage = document.querySelector("#wimage");

let allImages = document.querySelectorAll("source");
console.log(allImages[0].attributes[0].textContent);

function convertImage(e) {
  let src = allImages[0].attributes[0].textContent;

  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  let userImage = new Image();
  userImage.src = src;

  userImage.onload = function () {
    canvas.width = userImage.width;
    canvas.height = userImage.height;
    ctx.drawImage(userImage, 0, 0);

    let webImage = canvas.toDataURL("image/webp", 1);
    allImages[0].attributes[0].textContent = webImage;
  };
}

for (let i = 0; i < allImages.length; i++) {
  console.log(i);
  convertImage(i);
}
