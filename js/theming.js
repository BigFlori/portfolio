const body = document.body;
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");
const navbar = document.getElementById("navbar");

const darkTextClasses = ["text-dark", "spacer-dark", "btn-dark"];
const lightTextClasses = ["text-light", "spacer-light", "btn-light"];

const darkBgClasses = [
  "bg-dark",
  "bg-dark-1",
  "bg-dark-2",
  "bg-dark-3",
  "bg-dark-card",
];
const lightBgClasses = [
  "bg-light",
  "bg-light-1",
  "bg-light-2",
  "bg-light-3",
  "bg-light-card",
];

const formatForQuery = (classes) => {
  return classes.map((className) => `.${className}`).join(", ");
};

const changeTextColors = (theme) => {
  if (theme === "dark") {
    let textDarks = document.querySelectorAll(formatForQuery(darkTextClasses));
    textDarks.forEach((textDark) => {
      let lightClass = Array.from(textDark.classList)
        .find((className) => darkTextClasses.includes(className))
        .replace("dark", "light");

      textDark.classList.remove(...darkTextClasses);
      textDark.classList.add(lightClass);
    });
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
  } else {
    let textLights = document.querySelectorAll(
      formatForQuery(lightTextClasses)
    );
    textLights.forEach((textLight) => {
      let darkClass = Array.from(textLight.classList)
        .find((className) => lightTextClasses.includes(className))
        .replace("light", "dark");

      textLight.classList.remove(...lightTextClasses);
      textLight.classList.add(darkClass);
    });
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
  }
};

const changeBackgroundColors = (theme) => {
  if (theme === "dark") {
    let bgLights = document.querySelectorAll(formatForQuery(lightBgClasses));
    bgLights.forEach((bgLight) => {
      let darkClass = Array.from(bgLight.classList)
        .find((className) => className.includes("bg-light"))
        .replace("light", "dark");

      bgLight.classList.remove(...lightBgClasses);
      bgLight.classList.add(darkClass);
    });
  } else {
    let bgDarks = document.querySelectorAll(formatForQuery(darkBgClasses));
    bgDarks.forEach((bgDark) => {
      let lightClass = Array.from(bgDark.classList)
        .find((className) => className.includes("bg-dark"))
        .replace("dark", "light");

      bgDark.classList.remove(...darkBgClasses);
      bgDark.classList.add(lightClass);
    });
  }
};

const changeThemeToggler = (theme) => {
  if (theme === "dark") {
    themeIcon.classList.remove("bi-moon");
    themeIcon.classList.add("bi-lightbulb-fill");
    themeText.textContent = "Light mode";
  } else {
    themeIcon.classList.remove("bi-lightbulb-fill");
    themeIcon.classList.add("bi-moon");
    themeText.textContent = "Dark mode";
  }
};

const changeColorScheme = (theme) => {
  document.documentElement.style.display = "none";
  document.documentElement.setAttribute("data-color-scheme", theme);
  document.body.clientWidth;
  document.documentElement.style.display = "";
};

const setTheme = (theme) => {
  if (theme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
  changeTextColors(theme);
  changeBackgroundColors(theme);
  changeThemeToggler(theme);
  changeColorScheme(theme);
};

const toggleTheme = () => {
  if (body.classList.contains("dark")) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
};

const initTheme = () => {
  if (
    localStorage.getItem("theme") === "dark" ||
    body.classList.contains("dark")
  ) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
};

initTheme();
