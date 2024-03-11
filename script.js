document.addEventListener('DOMContentLoaded', function () {
    const timerElement = document.getElementById('timer');

    // Function to calculate remaining time until target date
    function calculateTimeUntil(targetDate) {
        const now = new Date();
        const difference = targetDate - now;
        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    // Function to update the timer display
    function updateTimerDisplay() {
        const now = new Date();
        const targetDate = new Date('2024-12-31T23:59:59'); // Example: December 31, 2024 at 23:59:59
        const timeUntil = calculateTimeUntil(targetDate);
        timerElement.textContent = `${timeUntil.days}d ${timeUntil.hours}h ${timeUntil.minutes}m ${timeUntil.seconds}s`;
    }

    // Update the timer display every second
    setInterval(updateTimerDisplay, 1000);

    // Initial update of the timer display
    updateTimerDisplay();
});
