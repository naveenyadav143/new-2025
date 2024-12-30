const countdown = document.getElementById('countdown');

// Set the target date to 31st December 2024 at 11:59 PM IST
const targetDate = new Date(2024, 11, 31, 23, 59, 0, 0).getTime(); // 31st Dec 2024, 11:59 PM IST

function updateCountdown() {
    const now = new Date();
    const nowIST = now.getTime() + (now.getTimezoneOffset() + 330) * 60000; // Convert to IST

    const distance = targetDate - nowIST;

    if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes
            .toString()
            .padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    } else {
        countdown.innerHTML = "🎉 Happy New Year! 🎉";
        clearInterval(timer);
        showOverlay();
    }
}

// Function to show the overlay image and message
function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';  // Use flexbox to center content

    const overlayMessage = document.getElementById('overlay-message');
    overlayMessage.innerHTML = "🎉 Happy New Year, My Love! 🎉";
}

// Set the timer to update every second
const timer = setInterval(updateCountdown, 1000);
