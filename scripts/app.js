let image = document.querySelector('#image');
let photo = "images/aisuluuu.jpg";
let isOriginal = true;

image.addEventListener('click', function () {
  if (isOriginal) {
    image.src = photo;
    isOriginal = false;
  } else {
    image.src = "images/aissssu.jpg";
    isOriginal = true;
  }
});
