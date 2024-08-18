// document.addEventListener("DOMContentLoaded", () => {
//     let clickCount = 0;
//     const birthday = new Date("2025-01-09");
//     const header = document.querySelector("header");
//     const magicButton = document.querySelector("#magic-button");
//     const clickMe = document.getElementById("click-me");
//     const clickCountText = document.getElementById("click-count");

//     const hideFamily = document.getElementById("hide-family");
//     const familyDetails = document.getElementById("family-details");

//     const hideFavorites = document.getElementById("hide-favorites");
//     const favoritesDetails = document.getElementById("favorites-details");

//     const summerVacationDetails = document.getElementById(
//         "summer-vacation-details"
//     );

//     document.addEventListener("keypress", (e) => {
//         if (e.key === "~") {
//             if (summerVacationDetails.style.display === "none") {
//                 summerVacationDetails.style.display = "flex";
//             } else {
//                 summerVacationDetails.style.display = "none";
//             }
//         }
//     });

//     hideFavorites.addEventListener("dblclick", () => {
//         if (favoritesDetails.style.display === "none") {
//             favoritesDetails.style.display = "flex";
//             hideFavorites.textContent = "Hide";
//         } else {
//             favoritesDetails.style.display = "none";
//             hideFavorites.textContent = "Show";
//         }
//     });

//     hideFamily.addEventListener("click", () => {
//         if (familyDetails.style.display === "none") {
//             familyDetails.style.display = "flex";
//             hideFamily.textContent = "Hide";
//         } else {
//             familyDetails.style.display = "none";
//             hideFamily.textContent = "Show";
//         }
//     });

//     magicButton.addEventListener("click", () => {
//         const randomColor =
//             "#" + Math.floor(Math.random() * 16777215).toString(16);
//         header.style.backgroundColor = randomColor;
//     });

//     clickMe.addEventListener("click", () => {
//         clickCount = clickCount + 1;
//         clickCountText.textContent = clickCount;
//     });

//     function updateCountdown() {
//         const daysElement = document.querySelector("#days");
//         const hoursElement = document.getElementById("hours");
//         const minutesElement = document.querySelector("#minutes");
//         const secondsElement = document.querySelector("#seconds");

//         const now = new Date();
//         const timeRemaining = birthday - now;

//         if (timeRemaining <= 0) {
//             document
//                 .querySelectorAll(".number")
//                 .forEach((el) => (el.textContent = "00"));
//             return;
//         }
//         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//             (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor(
//             (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
//         );
//         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//         daysElement.textContent = String(days).padStart(3, "0");
//         hoursElement.textContent = String(hours).padStart(2, "0");
//         minutesElement.textContent = String(minutes).padStart(2, "0");
//         secondsElement.textContent = String(seconds).padStart(2, "0");
//     }

//     setInterval(updateCountdown, 1000);

//     updateCountdown();
// });
