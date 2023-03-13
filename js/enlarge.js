const enlargeToggleBtn = document.getElementById("enlarge-toggle");
const enlargeIcon = document.getElementById("enlarge-icon");
const enlargeText = document.getElementById("enlarge-text");
const root = document.documentElement;

const setEnlarge = (isEnlarged) => {
  if (isEnlarged) {
    body.classList.add("enlarged");
    root.style.fontSize = "1.28rem";
    enlargeIcon.classList.remove("bi-zoom-in");
    enlargeIcon.classList.add("bi-zoom-out");
    enlargeText.textContent = "Zoom out";
  } else {
    body.classList.remove("enlarged");
    root.style.fontSize = "1rem";
    enlargeIcon.classList.remove("bi-zoom-out");
    enlargeIcon.classList.add("bi-zoom-in");
    enlargeText.textContent = "Zoom in";
  }
  localStorage.setItem("enlarged", isEnlarged);
};

const toggleEnlarge = () => {
  if (body.classList.contains("enlarged")) {
    setEnlarge(false);
  } else {
    setEnlarge(true);
  }
};

const initEnlarge = () => {
  if (localStorage.getItem("enlarged") === "true") {
    setEnlarge(true);
  } else {
    setEnlarge(false);
  }

  if (enlargeToggleBtn) {
    enlargeToggleBtn.addEventListener("click", toggleEnlarge);
  }
};

initEnlarge();
