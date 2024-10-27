const toggleTheme = document.getElementById("toggle-theme");
const menulinks = document.querySelectorAll(".menu_link");

// Função de troca de tema
function changeTheme() {
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon");

    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
}

// Adiciona a classe "active" aos links do menu
menulinks.forEach(element => {
    element.addEventListener("click", () => {
        menulinks.forEach(i => i.classList.remove("active"));
        element.classList.add("active");
    });
});

// Chama a função de troca de tema
toggleTheme.addEventListener("click", changeTheme);
