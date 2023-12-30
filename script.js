let score = 0;

document.getElementById('cookie').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = 'Cookies: ' + score;
});

// Add logic for upgrades and auto-clickers here

// Example of an auto-clicker upgrade
let autoClickerPrice = 100;
let autoClickerCount = 0;

function purchaseAutoClicker() {
    if (score >= autoClickerPrice) {
        score -= autoClickerPrice;
        autoClickerCount++;
        autoClickerPrice *= 2; // Increase price for the next purchase
        updateScoreDisplay();
    }
}

function autoClickerEffect() {
    score += autoClickerCount;
    updateScoreDisplay();
}

setInterval(autoClickerEffect, 1000); // Auto-clicker effect every second

function updateScoreDisplay() {
    document.getElementById('score').innerText = 'Cookies: ' + score;
}
