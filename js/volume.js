// Set the volume to 20% upon loading
document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.getElementById("loading-music");
    if (audioElement) {
        audioElement.volume = 0.2; // Set volume to 20%
    }
});