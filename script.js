document.addEventListener("DOMContentLoaded", () => {
    const birthday = new Date("2025-01-09");

    function updateCountdown() {
        const daysElement = document.querySelector("#days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.querySelector("#minutes");
        const secondsElement = document.querySelector("#seconds");

        const now = new Date();
        const timeRemaining = birthday - now;

        if (timeRemaining <= 0) {
            document
                .querySelectorAll(".number")
                .forEach((el) => (el.textContent = "00"));
            return;
        }
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(3, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent = String(minutes).padStart(2, "0");
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
});
