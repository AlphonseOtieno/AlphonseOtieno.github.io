const images = [
    "img1.jpg",
    "img4.jpg",
    "img2.jpg",
    "img3.jpg",
];

let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById("galleryImage");
    imgElement.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}
