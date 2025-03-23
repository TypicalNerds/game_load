// Set the volume to 20% upon loading
document.addEventListener("DOMContentLoaded", () => {
    const audioElement = document.getElementById("loading-music");
    if (audioElement) {
        audioElement.volume = 0.05; // Set volume to 5% (It was really fucking loud otherwise)
    }
});