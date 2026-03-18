const PASS = "asad@admin2026";
let loggedIn = sessionStorage.getItem("adm") === "true";

function showAdmin() {
  document.getElementById("loginOverlay").style.display = "none";
  document.getElementById("adminPage").style.display = "block";
  loadAll();
}

if (loggedIn) showAdmin();

document.getElementById("loginBtn").onclick = doLogin;
document.getElementById("pwInput").onkeydown = e => { if (e.key === "Enter") doLogin(); };

function doLogin() {
  if (document.getElementById("pwInput").value === PASS) {
    sessionStorage.setItem("adm", "true");
    showAdmin();
  } else {
    document.getElementById("loginErr").style.display = "block";
    document.getElementById("pwInput").value = "";
  }
}

document.getElementById("logoutBtn").onclick = () => {
  sessionStorage.removeItem("adm");
  location.reload();
};

document.querySelectorAll(".atab").forEach(t => t.onclick = () => {
  document.querySelectorAll(".atab,.tab-content").forEach(x => x.classList.remove("active"));
  t.classList.add("active");
  document.getElementById("tab-" + t.dataset.tab).classList.add("active");
});

function toast(msg, type = "ok") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = `toast ${type} show`;
  setTimeout(() => t.classList.remove("show"), 3000);
}