function toggleMenu() {
    document.getElementById("ul").classList.toggle("open");
}

const x = document.getElementById("hamburger");

x.onclick = toggleMenu;