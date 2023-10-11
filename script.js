const opening = document.querySelector('.opening');
const header = document.querySelector('.header');
const myAudio = document.getElementById('myAudio');
const content1 = document.querySelector('.content1');
const content3 = document.querySelector('.content3');
const content2 = document.querySelector('.content2');


if (document.referrer.includes(window.location.origin)) {
    opening.classList.remove('active');
    header.classList.add('active');
    content1.style.opacity = 1;
    content2.style.opacity = 1;
    content3.style.opacity = 1;
    content1.style.pointerEvents = 'auto';
    content2.style.pointerEvents = 'auto';
    content3.style.pointerEvents = 'auto';
} else {
    opening.addEventListener('click', () => {
        opening.classList.toggle('active');
        header.classList.toggle('active');
        playSound();
        content1.style.opacity = 1;
        content2.style.opacity = 1;
        content3.style.opacity = 1;
        content1.style.pointerEvents = 'auto';
        content2.style.pointerEvents = 'auto';
        content3.style.pointerEvents = 'auto';
    });
}

function playSound() {
    myAudio.play();
}

document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll(".content");
    let currentIndex = 0;

    function showContent(index) {
        contents.forEach((content, i) => {
            if (i === index) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    }

    function nextContent() {
        currentIndex = (currentIndex + 1) % contents.length;
        showContent(currentIndex);
    }

    // Intervalo para alternar os conteúdos a cada 5 segundos
    setInterval(nextContent, 5000);
});