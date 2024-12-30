const countdownElement = document.getElementById('countdown');
const overlay = document.getElementById('overlay');

// Set target date and time for IST
const targetDate = new Date('2024-12-31T23:59:00+05:30').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        showOverlay();
    }
}

function showOverlay() {
    countdownElement.innerHTML = "Happy New Year!";
    overlay.style.display = "flex";
}

const timer = setInterval(updateCountdown, 1000);
