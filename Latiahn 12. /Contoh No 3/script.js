var clickCount = 0;

function countClicks() {
    clickCount++;
    document.getElementById("clickCount").innerText = "Clicks: " + clickCount;
}
