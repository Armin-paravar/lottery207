const toggleSwitch = document.getElementById("input-darkmode");

function switchTheme(e) {
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.removeItem("theme");
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
//function
if (localStorage.getItem("theme") == "dark") {
  localStorage.setItem("theme", "dark");
  toggleSwitch.checked = true;
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  toggleSwitch.checked = false;
  localStorage.removeItem("theme");
  document.documentElement.setAttribute("data-theme", "light");
}
