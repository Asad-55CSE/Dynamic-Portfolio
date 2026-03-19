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

const DEMO_DEFAULTS = {
  hero: {
    greeting: "HEY! I'm", name: "Hafiz Al Asad,", role: "Full Stack Developer",
    tagline: "Building modern web applications & network solutions with a passion for clean code and great UX.",
    cvLink: "", githubLink: "https://github.com/Asad-55CSE", profilePhoto: "",
    badges: [{ icon: "fab fa-react", text: "MERN Stack" }, { icon: "fas fa-network-wired", text: "CCNA" }],
    stats:  [{ value: 4, label: "Years Learning" }, { value: 5, label: "Projects Done" },
             { value: 15, label: "Tech Skills" }, { value: 2, label: "Certifications" }]
  },
  about: {
    bio: "I am a passionate MERN Stack Developer and Computer Science graduate from Varendra University, Rajshahi. I combine strong software skills with hands-on hardware and networking expertise.",
    cards: [
      { title: "Web Development", icon: "fab fa-react",         desc: "Building full-stack apps with React, Node.js and MongoDB.", photo: "" },
      { title: "Networking",       icon: "fas fa-network-wired", desc: "CCNA certified with hands-on Cisco router/switch experience.", photo: "" }
    ]
  },
  skills: {
    tags: ["MERN Stack", "C# / .NET", "CCNA", "PC Hardware", "IoT", "PostgreSQL"],
    cubeFaces: [
      { icon: "fab fa-react",    label: "React",   face: "front"  },
      { icon: "fab fa-node-js",  label: "Node.js", face: "back"   },
      { icon: "fab fa-js",       label: "JS",      face: "left"   },
      { icon: "fas fa-database", label: "MongoDB", face: "right"  },
      { icon: "fab fa-css3-alt", label: "CSS3",    face: "top"    },
      { icon: "fab fa-html5",    label: "HTML5",   face: "bottom" }
    ],
    bars: [
      { category: "Frontend", items: [{ label: "React / Next.js", val: 82 }, { label: "HTML / CSS / Tailwind", val: 90 }, { label: "JavaScript", val: 80 }] },
      { category: "Backend",  items: [{ label: "Node.js / Express", val: 80 }, { label: "C# / .NET", val: 95 }, { label: "PHP", val: 85 }] },
      { category: "DB & Net", items: [{ label: "MongoDB / PostgreSQL", val: 78 }, { label: "Cisco CCNA", val: 87 }, { label: "PC Hardware / IoT", val: 88 }] }
    ],
    pills: [
      { label: "React",    icon: "fab fa-react"         }, { label: "Node.js",    icon: "fab fa-node-js"      },
      { label: "MongoDB",  icon: "fas fa-database"      }, { label: "JavaScript", icon: "fab fa-js"           },
      { label: "Tailwind", icon: "fas fa-wind"          }, { label: "Git",        icon: "fab fa-git-alt"      },
      { label: "CCNA",     icon: "fas fa-network-wired" }, { label: "Linux",      icon: "fab fa-linux"        }
    ]
  },
  contact: {
    intro: "I'm open to freelance, full-time, or collaboration. Let's build something great together!",
    items: [
      { icon: "fas fa-envelope",       label: "Email",    value: "alasad.cse@gmail.com", href: "mailto:alasad.cse@gmail.com" },
      { icon: "fas fa-map-marker-alt", label: "Location", value: "Bangladesh", href: "#" }
    ],
    socials: [
      { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/hafizalasad-dev/" },
      { icon: "fab fa-github",      href: "https://github.com/Asad-55CSE" }
    ]
  },
  footer: {
    tagline: "Full Stack Developer · CCNA Certified · Bangladesh",
    copy:    "© 2025 Hafiz Al Asad · Built with CSS mastery & Firebase 🔥"
  },
  projects: [
    { id: "demo-p1", title: "Portfolio Website",  description: "Personal portfolio with Firebase backend and admin panel.", category: "web",     tech: ["React", "Firebase", "CSS"],  liveLink: "#", githubLink: "#", image: "", order: 0 },
    { id: "demo-p2", title: "Network Monitor",    description: "A desktop tool for monitoring network traffic and devices.", category: "desktop", tech: ["C#", ".NET", "WPF"],          liveLink: "#", githubLink: "#", image: "", order: 1 }
  ],
  certs: [
    { id: "demo-c1", title: "CCNAv7: Introduction to Networks",     issuer: "Cisco Networking Academy", desc: "Foundational networking concepts.", date: "Nov 2023", icon: "fas fa-network-wired",  order: 0 },
    { id: "demo-c2", title: "BSc in Computer Science & Engineering", issuer: "Varendra University",      desc: "CGPA: 3.42",                       date: "2024",     icon: "fas fa-graduation-cap", order: 1 }
  ]
};

function _lsGet(key)      { try { const r = localStorage.getItem("demo_" + key); return r ? JSON.parse(r) : null; } catch { return null; } }
function _lsSet(key, val) { try { localStorage.setItem("demo_" + key, JSON.stringify(val)); } catch {} }

function mockGet(key)              { return _lsGet(key) || JSON.parse(JSON.stringify(DEMO_DEFAULTS[key] || {})); }
function mockSet(key, data, merge) { if (merge) { data = { ...mockGet(key), ...data }; } _lsSet(key, data); return data; }

function mockGetColl(name)         { return _lsGet("coll_" + name) || JSON.parse(JSON.stringify(DEMO_DEFAULTS[name] || [])); }
function mockSaveColl(name, arr)   { _lsSet("coll_" + name, arr); }

function mockAddToColl(name, data) {
  const arr  = mockGetColl(name);
  const item = { ...data, id: name + "_" + Date.now() };
  arr.push(item); mockSaveColl(name, arr); return item;
}
function mockUpdateInColl(name, id, data) {
  const arr = mockGetColl(name);
  const idx = arr.findIndex(x => x.id === id);
  if (idx > -1) arr[idx] = { ...arr[idx], ...data };
  mockSaveColl(name, arr);
}
function mockDeleteFromColl(name, id) {
  mockSaveColl(name, mockGetColl(name).filter(x => x.id !== id));
}

function bindUpload(areaId, fileId, previewId, urlId) {
  const area   = document.getElementById(areaId);
  const fileIn = document.getElementById(fileId);
  if (!area || !fileIn) return;
  area.onclick = () => fileIn.click();
  fileIn.onchange = e => {
    const file = e.target.files[0]; if (!file) return;
    toast("📁 Preview loaded (demo — not uploaded to server)", "info");
    const reader = new FileReader();
    reader.onload = ev => {
      const dataUrl = ev.target.result;
      if (urlId)     document.getElementById(urlId).value = dataUrl;
      if (previewId) { const p = document.getElementById(previewId); p.src = dataUrl; p.style.display = "block"; }
    };
    reader.readAsDataURL(file);
  };
  if (urlId) document.getElementById(urlId).oninput = e => {
    if (previewId) {
      const p = document.getElementById(previewId);
      p.src = e.target.value;
      p.style.display = e.target.value ? "block" : "none";
    }
  };
}
bindUpload("profilePhotoArea", "profilePhotoFile", "h-photo-preview", "h-photo-url");
bindUpload("cardPhotoArea",    "cardPhotoFile",    null,              "card-photo-url");
bindUpload("projImgArea",      "projImgFile",      "pf-img-preview",  "pf-img-url");

let dragSrc = null;
function makeSortable(listId) {
  const list = document.getElementById(listId); if (!list) return;
  list.querySelectorAll(".sort-item").forEach(item => {
    item.draggable   = true;
    item.ondragstart = e  => { dragSrc = item; item.classList.add("dragging"); e.dataTransfer.effectAllowed = "move"; };
    item.ondragend   = () => { dragSrc = null; item.classList.remove("dragging"); list.querySelectorAll(".sort-item").forEach(i => i.classList.remove("drag-over")); };
    item.ondragover  = e  => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; if (item !== dragSrc) item.classList.add("drag-over"); };
    item.ondragleave = () => item.classList.remove("drag-over");
    item.ondrop      = e  => {
      e.preventDefault(); item.classList.remove("drag-over");
      if (dragSrc && item !== dragSrc) {
        const items = [...list.querySelectorAll(".sort-item")];
        if (items.indexOf(dragSrc) < items.indexOf(item)) item.after(dragSrc);
        else item.before(dragSrc);
      }
    };
  });
}

let heroData     = {}, aboutData = { cards: [] }, skillsData = { bars: [], pills: [], tags: [] };
let badgesData   = [], statsData = [], pillsData = [], socialsData = [];
let projectsData = [], certsData = [], contactData = { items: [], socials: [] };

function setVal(id, v) { const el = document.getElementById(id); if (el && v !== undefined) el.value = v; }
function getVal(id)    { const el = document.getElementById(id); return el ? el.value : ""; }

function loadAll() {
  heroData    = mockGet("hero");
  aboutData   = mockGet("about");
  skillsData  = mockGet("skills");
  contactData = mockGet("contact");
  const footer = mockGet("footer");
  setVal("footer-tagline-admin", footer.tagline || "");
  setVal("footer-copy-admin",    footer.copy    || "");
  projectsData = mockGetColl("projects"); projectsData.sort((a, b) => (a.order || 0) - (b.order || 0));
  certsData    = mockGetColl("certs");    certsData.sort((a, b)    => (a.order || 0) - (b.order || 0));
  populateHero(); populateAbout(); populateSkills();
  populateProjects(); populateCerts(); populateContact();
}