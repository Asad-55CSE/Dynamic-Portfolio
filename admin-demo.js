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