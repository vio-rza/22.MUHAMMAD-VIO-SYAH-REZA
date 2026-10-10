

document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(function () {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 100);
});


function gantiTema() {
    document.body.classList.toggle("dark-mode");

    const tombol = document.getElementById("tema");

    if (document.body.classList.contains("dark-mode")) {
        tombol.textContent = "☀️ Tema Terang";
    } else {
        tombol.textContent = "🌙 Tema Gelap";
    }
}


const semuaLink = document.querySelectorAll(".card a");

semuaLink.forEach(function (link) {
    link.addEventListener("click", function () {
        link.style.transform = "scale(0.95)";

        setTimeout(function () {
            link.style.transform = "";
        }, 150);
    });
});


document.getElementById("tahun").textContent =
    new Date().getFullYear();
