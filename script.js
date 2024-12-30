// Countdown Timer
const countdown = document.getElementById('countdown');
const targetDate = new Date('December 31, 2024 23:59:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // When the countdown is finished
    if (distance < 0) {
        clearInterval(timer);
        showOverlay();
    }
}

const timer = setInterval(updateCountdown, 1000);

// Hearts Animation
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Overlay Message
const overlay = document.getElementById('overlay');
const audio = document.getElementById('background-audio');

function showOverlay() {
    overlay.classList.remove('hidden');
    audio.pause(); // Stop background music
}
