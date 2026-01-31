function nextSection(current) {
    document.getElementById('section' + current).classList.remove('active');
    document.getElementById('section' + (current + 1)).classList.add('active');
}

function playMusic() {
    document.getElementById('background-music').play().catch(()=>{});
}

/* Corazones al tocar */
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

/* Animación corazones */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
    from { opacity:1; transform:translateY(0) scale(1); }
    to { opacity:0; transform:translateY(-60px) scale(2); }
}`;
document.head.appendChild(style);

/* ❤️ RAZONES ❤️ */
const reasons = [
    "Conocerte",
    "Enamorarte",
    "Comprenderte",
    "Valorarte",
    "Respetarte",
    "Consentirte",
    "Extrañarte",
    "Pensarte",
    "Serte fiel",
    "Tenerte"
];

let reasonIndex = 0;

function showReasons() {
    document.getElementById("section2").classList.remove("active");
    document.getElementById("section3").classList.add("active");
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
        document.getElementById("section3").classList.remove("active");
        document.getElementById("section4").classList.add("active");
    }
}