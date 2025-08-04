const phrases = ["Software Engineer.", "Web Designer.", "Web Developer."];
const el = document.getElementById("animated-text");
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;

function type() {
    const fullText = phrases[currentPhrase];
    if (isDeleting) {
        currentLetter--;
    } else {
        currentLetter++;
    }

    el.textContent = fullText.substring(0, currentLetter);

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentLetter === fullText.length) {
        typeSpeed = 2000; // pause at full phrase
        isDeleting = true;
    } else if (isDeleting && currentLetter === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});