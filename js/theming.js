const body = document.body;
const themeToggleBtn = document.getElementById("theme-toggle");

const changeTextColors = (theme) => {
  if (theme === "dark") {
    let textDarks = document.querySelectorAll(".text-dark");
    textDarks.forEach((textDark) => {
      textDark.classList.remove("text-dark");
      textDark.classList.add("text-light");
    });
  } else {
    let textLights = document.querySelectorAll(".text-light");
    textLights.forEach((textLight) => {
      textLight.classList.remove("text-light");
      textLight.classList.add("text-dark");
    });
  }
};

const changeNavbarColors = (theme) => {
  const navbar = document.getElementById("navbar");
  if (theme === "dark") {
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");
  } else {
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");
  }
};

const setTheme = (theme) => {
  if (theme === "dark") {
    body.classList.add("dark");
    changeTextColors(theme);
    changeNavbarColors(theme);
  } else {
    body.classList.remove("dark");
    changeTextColors(theme);
    changeNavbarColors(theme);
  }
};

const toggleTheme = () => {
  if (body.classList.contains("dark")) {
    setTheme("light");
    localStorage.setItem("theme", "light");
  } else {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
};

if (localStorage.getItem("theme") === "dark") {
  setTheme("dark");
} else {
  setTheme("light");
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}
