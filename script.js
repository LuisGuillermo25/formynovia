function nextSection(current) {
    const actual = document.getElementById('section' + current);
    const siguiente = document.getElementById('section' + (current + 1));

    actual.classList.remove('active');
    siguiente.classList.add('active');
}

function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play();
}

/* Corazones al tocar */
document.addEventListener("click", (e) => {
    const heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "float 1.2s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
});

/* Animación corazones */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to { opacity: 0; transform: translateY(-60px) scale(2); }
}

@keyframes rise {
    from { transform: translateY(0); opacity: 0; }
    to { transform: translateY(-110vh); opacity: 1; }
}
`;
document.head.appendChild(style);

/* Lluvia de corazones */
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerText = ["💖","💕","💘","💗","💓"][Math.floor(Math.random() * 5)];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = "0.8";
    heart.style.animation = "rise 8s linear forwards";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createFloatingHeart, 1200);