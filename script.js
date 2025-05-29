
const card = document.getElementById("tiltCard");
card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / 10;
    const deltaY = (y - centerY) / 10;
    card.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
});
card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
