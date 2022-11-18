const cover = document.querySelector('.cover-overlay');
const overlay = document.querySelector('.cover-overlay');


cover.addEventListener('mousemove', (event) => {
    const {height, width} = event.currentTarget.getBoundingClientRect();

    const x = Math.round((event.offsetX / width) * 100);
    const y = Math.round((event.offsetY/height) * 100);
    overlay.style.opacity = "100%";

    event.currentTarget.style.clipPath = `circle(12% at ${x}% ${y}%)`;
})

cover.addEventListener('mouseleave', (event) => {
    overlay.style.opacity = "0%";
    event.currentTarget.style.removeProperty('clip-path');
})
