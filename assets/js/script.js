let toggle = document.getElementById("darktoggle");
let html = document.querySelector("html");

(function () {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    toggle.checked = true;
    html.classList.add("dark");
  } else {
    toggle.checked = false;
    html.classList.remove("dark");
  }
})();

document.getElementById("year").innerHTML = new Date().getFullYear();

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    localStorage.setItem("theme", "dark");
    html.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    html.classList.remove("dark");
  }
});

function gotoPage(params) {
  var element = document.getElementById(params);
  var headerOffset = 60;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
