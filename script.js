const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

const formular = document.querySelector("form");
const druh = document.querySelector(".druh");
const heslo1 = document.querySelector(".heslo1");
const heslo2 = document.querySelector(".heslo2");
const notdruh = document.querySelector(".notificationName");
const notheslo1 = document.querySelector(".notificationheslo1");
const notheslo2 = document.querySelector(".notificationheslo2");

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  if (druh.value === "") {
    notdruh.style.display = "block";
  } else if (heslo2.value !== heslo1.value) {
    notheslo2.style.display = "block";
  } else if (heslo2.value === heslo1.value) {
    notheslo1.style.display = "block";
  }
});

function Switch() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function scrollDown() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
