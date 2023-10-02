const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => {
        tab.classList.add('active');
    });

    tab.addEventListener('mouseleave', () => {
        tab.classList.remove('active');
    });

    tab.addEventListener('mouseover', () => {
        const generatedLinks = tab.querySelector('.generated-links');
        generatedLinks.style.top = `${tab.offsetTop}px`;
    });
});

function openImage(img) {
    var zoomedImg = document.getElementById("zoomed-img");
    zoomedImg.src = img.src;
    document.querySelector(".image-zoom").classList.add("active");
}

function closeImage() {
    document.querySelector(".image-zoom").classList.remove("active");
}

const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

playButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});
