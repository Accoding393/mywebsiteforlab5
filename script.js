// Slider images
const images = [
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    "https://images.unsplash.com/photo-1508675801651-7d9b08a6f3a2",
    "https://images.unsplash.com/photo-1599490219385-1e38b7d01c9c",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a"
];

let index = 0;
const sliderImage = document.getElementById("sliderImage");

setInterval(() => {
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
}, 3000);

// Show animal details
function showAnimal(name, place, info) {
    document.getElementById("animalName").innerText = name + " ❤️";
    document.getElementById("animalPlace").innerText = place;
    document.getElementById("animalInfo").innerText = info;
    document.getElementById("details").style.display = "block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
