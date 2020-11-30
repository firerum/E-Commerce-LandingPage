const slides = document.querySelectorAll(".image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Change image slides 
function nextImage() {
    // Get the current slide
    const current = document.querySelector(".current");
    // Remove current slide
    current.classList.remove("current");
    // Check if current has a sibling to add current class
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }
}

function previousImage() {
    // Get the current slide
    const current = document.querySelector(".current");
    // Remove current slide
    current.classList.remove("current");
    // Check if current has a sibling to add current class
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slides[slides.length - 1].classList.add("current");
    }

}

// Add event listeners to the buttons.
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", previousImage);
