// This file allows the changing and loading of themes, as well
// as the opening and closing of the sidebar on small screens.

function changeTheme() {
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") === "css/darktheme.css") {
    theme.setAttribute("href", "css/lighttheme.css");
    localStorage.setItem("theme", "light");
    console.log("Light theme has been selected.")
  } else if (theme.getAttribute("href") === "css/lighttheme.css") {
    theme.setAttribute("href", "css/terminal.css");
    localStorage.setItem("theme", "terminal");
    console.log("Terminal has been selected.")
  } else if (theme.getAttribute("href") === "css/terminal.css") {
    theme.setAttribute("href", "css/darktheme.css");
    localStorage.setItem("theme", "dark");
    console.log("Dark theme has been selected.")
  }
}

function loadTheme() {
let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.getElementById("theme").setAttribute("href", "css/darktheme.css");
    document.getElementById("currentTheme").textContent = "Current Theme: Dark Theme";
  } else if (currentTheme === "light") {
    document.getElementById("theme").setAttribute("href", "css/lighttheme.css");
    document.getElementById("currentTheme").textContent = "Current Theme: Light Theme";
  } else if (currentTheme === "terminal") {
    document.getElementById("theme").setAttribute("href", "css/terminal.css");
    document.getElementById("currentTheme").textContent = "Current Theme: Terminal";
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

// Display current theme
function displayCurrentTheme() {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.getElementById("currentTheme").textContent = "Current Theme: Dark Theme";
  } else if (currentTheme === "light") {
    document.getElementById("currentTheme").textContent = "Current Theme: Light Theme";
  } else if (currentTheme === "terminal") {
    document.getElementById("currentTheme").textContent = "Current Theme: Terminal";
  }
}

window.onload = loadTheme();