// This file allows the changing and loading of themes, as well
// as the opening and closing of the sidebar on small screens.

function changeTheme() {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") === "darktheme.css") {
        theme.setAttribute("href", "lighttheme.css");
        localStorage.setItem("theme", "light");
        console.log("Light theme has been selected.")
    } else {
        theme.setAttribute("href", "darktheme.css");
        localStorage.setItem("theme", "dark");
        console.log("Dark theme has been selected.")
    }
}

function loadTheme() {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.getElementById("theme").setAttribute("href", "darktheme.css");
    } else if (currentTheme === "light") {
        document.getElementById("theme").setAttribute("href", "lighttheme.css");
    }
}

// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").classList.add("main-background");
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("mySidebar").classList.remove("main-background");
    document.getElementById("myOverlay").style.display = "none";
}

window.onload = loadTheme();