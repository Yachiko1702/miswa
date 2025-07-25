// This file contains JavaScript code for interactive features on the Valentine's Day website.

document.addEventListener('DOMContentLoaded', () => {
    const loveMessages = [
        "You are my sunshine on a rainy day.",
        "Every moment spent with you is a treasure.",
        "You make my heart smile.",
        "Together is a wonderful place to be.",
        "You are the peanut butter to my jelly."
    ];

    const messageContainer = document.getElementById('love-message');
    const button = document.getElementById('new-message-button');

    function displayRandomMessage() {
        const randomIndex = Math.floor(Math.random() * loveMessages.length);
        messageContainer.textContent = loveMessages[randomIndex];
    }

    button.addEventListener('click', displayRandomMessage);

    // Display a random message on page load
    displayRandomMessage();
});