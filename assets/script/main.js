const toggleTheme = document.getElementById("toggle-theme");


function changeTheme(){
    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon")

    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
};

toggleTheme.addEventListener("click", changeTheme)
