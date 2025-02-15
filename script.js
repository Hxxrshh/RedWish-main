document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost/emergency.php")
        .then(response => response.json())
        .then(data => {
            if (data.donors.length > 0) {
                data.donors.forEach(donor => {
                    setTimeout(() => {
                        showNotification(`Hello ${donor}, it's time to donate blood again!`);
                    }, 2000);
                });
            }
        })
        .catch(error => console.error("Error fetching donors:", error));
});

// Function to show notification popup
function showNotification(message) {
    let notification = document.createElement("div");
    notification.className = "popup-notification";
    notification.innerHTML = `<p>${message}</p>`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => document.body.removeChild(notification), 500);
    }, 5000);
}
