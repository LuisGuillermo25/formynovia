function nextSection(current) {
    document.getElementById('section' + current).classList.remove('active');
    document.getElementById('section' + (current + 1)).classList.add('active');
}

function playMusic() {
    document.getElementById('background-music').play().catch(()=>{});
}

/* 💓💫 Emojis flotando */
const emojis = ["💓", "💫"];

function createFloatingEmoji() {
    const span = document.createElement("span");
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.position = "fixed";
    span.style.left = Math.random() * 100 + "vw";
    span.style.bottom = "-20px";
    span.style.fontSize = (18 + Math.random() * 20) + "px";
    span.style.animation = "floatUp 10s linear forwards";
    document.body.appendChild(span);

    setTimeout(() => span.remove(), 10000);
}

setInterval(createFloatingEmoji, 700);

/* Click corazones */
document.addEventListener("click", e => {
    const heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.animation = "float 1.2s ease forwards";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
});

/* Animaciones */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
    from { opacity:1; transform:translateY(0) scale(1); }
    to { opacity:0; transform:translateY(-60px) scale(2); }
}
@keyframes floatUp {
    from { transform: translateY(0); opacity:1; }
    to { transform: translateY(-120vh); opacity:0; }
}`;
document.head.appendChild(style);

/* ❤️ RAZONES ❤️ */
const reasons = [
    "Conocerte",
    "Enamorarte",
    "Comprenderte",
    "Valorarte",
    "Respetarte",
    "y consentirte",
    "Extrañarte",
    "y pensarte",
    "Serte fiel",
    "y tenerte"
];

let reasonIndex = 0;

function showReasons() {
    nextSection(2);
    reasonIndex = 0;
    updateReason();
}

function updateReason() {
    const text = document.getElementById("reasonText");
    text.style.opacity = 0;

    setTimeout(() => {
        text.innerText = reasons[reasonIndex];
        text.style.opacity = 1;
    }, 300);
}

function nextReason() {
    reasonIndex++;

    if (reasonIndex < reasons.length) {
        updateReason();
    } else {
        nextSection(3);
    }
}