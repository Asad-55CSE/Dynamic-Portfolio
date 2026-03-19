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
        stats: [{ value: 4, label: "Years Learning" }, { value: 5, label: "Projects Done" },
        { value: 15, label: "Tech Skills" }, { value: 2, label: "Certifications" }]
    },
    about: {
        bio: "I am a passionate MERN Stack Developer and Computer Science graduate from Varendra University, Rajshahi. I combine strong software skills with hands-on hardware and networking expertise.",
        cards: [
            { title: "Web Development", icon: "fab fa-react", desc: "Building full-stack apps with React, Node.js and MongoDB.", photo: "" },
            { title: "Networking", icon: "fas fa-network-wired", desc: "CCNA certified with hands-on Cisco router/switch experience.", photo: "" }
        ]
    },
    skills: {
        tags: ["MERN Stack", "C# / .NET", "CCNA", "PC Hardware", "IoT", "PostgreSQL"],
        cubeFaces: [
            { icon: "fab fa-react", label: "React", face: "front" },
            { icon: "fab fa-node-js", label: "Node.js", face: "back" },
            { icon: "fab fa-js", label: "JS", face: "left" },
            { icon: "fas fa-database", label: "MongoDB", face: "right" },
            { icon: "fab fa-css3-alt", label: "CSS3", face: "top" },
            { icon: "fab fa-html5", label: "HTML5", face: "bottom" }
        ],
        bars: [
            { category: "Frontend", items: [{ label: "React / Next.js", val: 82 }, { label: "HTML / CSS / Tailwind", val: 90 }, { label: "JavaScript", val: 80 }] },
            { category: "Backend", items: [{ label: "Node.js / Express", val: 80 }, { label: "C# / .NET", val: 95 }, { label: "PHP", val: 85 }] },
            { category: "DB & Net", items: [{ label: "MongoDB / PostgreSQL", val: 78 }, { label: "Cisco CCNA", val: 87 }, { label: "PC Hardware / IoT", val: 88 }] }
        ],
        pills: [
            { label: "React", icon: "fab fa-react" }, { label: "Node.js", icon: "fab fa-node-js" },
            { label: "MongoDB", icon: "fas fa-database" }, { label: "JavaScript", icon: "fab fa-js" },
            { label: "Tailwind", icon: "fas fa-wind" }, { label: "Git", icon: "fab fa-git-alt" },
            { label: "CCNA", icon: "fas fa-network-wired" }, { label: "Linux", icon: "fab fa-linux" }
        ]
    },
    contact: {
        intro: "I'm open to freelance, full-time, or collaboration. Let's build something great together!",
        items: [
            { icon: "fas fa-envelope", label: "Email", value: "alasad.cse@gmail.com", href: "mailto:alasad.cse@gmail.com" },
            { icon: "fas fa-map-marker-alt", label: "Location", value: "Bangladesh", href: "#" }
        ],
        socials: [
            { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/hafizalasad-dev/" },
            { icon: "fab fa-github", href: "https://github.com/Asad-55CSE" }
        ]
    },
    footer: {
        tagline: "Full Stack Developer · CCNA Certified · Bangladesh",
        copy: "© 2025 Hafiz Al Asad · Built with CSS mastery & Firebase 🔥"
    },
    projects: [
        { id: "demo-p1", title: "Portfolio Website", description: "Personal portfolio with Firebase backend and admin panel.", category: "web", tech: ["React", "Firebase", "CSS"], liveLink: "#", githubLink: "#", image: "", order: 0 },
        { id: "demo-p2", title: "Network Monitor", description: "A desktop tool for monitoring network traffic and devices.", category: "desktop", tech: ["C#", ".NET", "WPF"], liveLink: "#", githubLink: "#", image: "", order: 1 }
    ],
    certs: [
        { id: "demo-c1", title: "CCNAv7: Introduction to Networks", issuer: "Cisco Networking Academy", desc: "Foundational networking concepts.", date: "Nov 2023", icon: "fas fa-network-wired", order: 0 },
        { id: "demo-c2", title: "BSc in Computer Science & Engineering", issuer: "Varendra University", desc: "CGPA: 3.42", date: "2024", icon: "fas fa-graduation-cap", order: 1 }
    ]
};

function _lsGet(key) { try { const r = localStorage.getItem("demo_" + key); return r ? JSON.parse(r) : null; } catch { return null; } }
function _lsSet(key, val) { try { localStorage.setItem("demo_" + key, JSON.stringify(val)); } catch { } }

function mockGet(key) { return _lsGet(key) || JSON.parse(JSON.stringify(DEMO_DEFAULTS[key] || {})); }
function mockSet(key, data, merge) { if (merge) { data = { ...mockGet(key), ...data }; } _lsSet(key, data); return data; }

function mockGetColl(name) { return _lsGet("coll_" + name) || JSON.parse(JSON.stringify(DEMO_DEFAULTS[name] || [])); }
function mockSaveColl(name, arr) { _lsSet("coll_" + name, arr); }

function mockAddToColl(name, data) {
    const arr = mockGetColl(name);
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
    const area = document.getElementById(areaId);
    const fileIn = document.getElementById(fileId);
    if (!area || !fileIn) return;
    area.onclick = () => fileIn.click();
    fileIn.onchange = e => {
        const file = e.target.files[0]; if (!file) return;
        toast("📁 Preview loaded (demo — not uploaded to server)", "info");
        const reader = new FileReader();
        reader.onload = ev => {
            const dataUrl = ev.target.result;
            if (urlId) document.getElementById(urlId).value = dataUrl;
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
bindUpload("cardPhotoArea", "cardPhotoFile", null, "card-photo-url");
bindUpload("projImgArea", "projImgFile", "pf-img-preview", "pf-img-url");

let dragSrc = null;
function makeSortable(listId) {
    const list = document.getElementById(listId); if (!list) return;
    list.querySelectorAll(".sort-item").forEach(item => {
        item.draggable = true;
        item.ondragstart = e => { dragSrc = item; item.classList.add("dragging"); e.dataTransfer.effectAllowed = "move"; };
        item.ondragend = () => { dragSrc = null; item.classList.remove("dragging"); list.querySelectorAll(".sort-item").forEach(i => i.classList.remove("drag-over")); };
        item.ondragover = e => { e.preventDefault(); e.dataTransfer.dropEffect = "move"; if (item !== dragSrc) item.classList.add("drag-over"); };
        item.ondragleave = () => item.classList.remove("drag-over");
        item.ondrop = e => {
            e.preventDefault(); item.classList.remove("drag-over");
            if (dragSrc && item !== dragSrc) {
                const items = [...list.querySelectorAll(".sort-item")];
                if (items.indexOf(dragSrc) < items.indexOf(item)) item.after(dragSrc);
                else item.before(dragSrc);
            }
        };
    });
}

let heroData = {}, aboutData = { cards: [] }, skillsData = { bars: [], pills: [], tags: [] };
let badgesData = [], statsData = [], pillsData = [], socialsData = [];
let projectsData = [], certsData = [], contactData = { items: [], socials: [] };

function setVal(id, v) { const el = document.getElementById(id); if (el && v !== undefined) el.value = v; }
function getVal(id) { const el = document.getElementById(id); return el ? el.value : ""; }

function loadAll() {
    heroData = mockGet("hero");
    aboutData = mockGet("about");
    skillsData = mockGet("skills");
    contactData = mockGet("contact");
    const footer = mockGet("footer");
    setVal("footer-tagline-admin", footer.tagline || "");
    setVal("footer-copy-admin", footer.copy || "");
    projectsData = mockGetColl("projects"); projectsData.sort((a, b) => (a.order || 0) - (b.order || 0));
    certsData = mockGetColl("certs"); certsData.sort((a, b) => (a.order || 0) - (b.order || 0));
    populateHero(); populateAbout(); populateSkills();
    populateProjects(); populateCerts(); populateContact();
}

function populateHero() {
    setVal("h-greeting", heroData.greeting || "HEY! I'm");
    setVal("h-name", heroData.name || "Hafiz Al Asad,");
    setVal("h-role", heroData.role || "Full Stack Developer");
    setVal("h-tagline", heroData.tagline || "");
    setVal("h-cv", heroData.cvLink || "");
    setVal("h-github", heroData.githubLink || "https://github.com/Asad-55CSE");
    setVal("h-photo-url", heroData.profilePhoto || "");
    if (heroData.profilePhoto) {
        const p = document.getElementById("h-photo-preview");
        p.src = heroData.profilePhoto; p.style.display = "block";
    }
    badgesData = heroData.badges || [{ icon: "fab fa-react", text: "MERN Stack" }, { icon: "fas fa-network-wired", text: "CCNA" }];
    statsData = heroData.stats || [{ value: 4, label: "Years Learning" }, { value: 5, label: "Projects Done" }, { value: 15, label: "Tech Skills" }, { value: 2, label: "Certifications" }];
    renderBadgesList(); renderStatsList();
}

function renderBadgesList() {
    const list = document.getElementById("badges-list");
    list.innerHTML = badgesData.map((b, i) => `
    <div class="sort-item" data-idx="${i}">
      <span class="drag-handle"><i class="fas fa-grip-vertical"></i></span>
      <i class="${b.icon}" style="color:var(--p);font-size:1rem;width:20px;flex-shrink:0"></i>
      <div class="si-info"><strong>${b.text}</strong><span>${b.icon}</span></div>
      <div class="si-actions"><button class="btn-del" onclick="removeBadge(${i})"><i class="fas fa-trash"></i></button></div>
    </div>`).join("");
    makeSortable("badges-list");
}
window.removeBadge = i => { badgesData.splice(i, 1); renderBadgesList(); };

document.getElementById("addBadgeBtn").onclick = () => {
    const text = getVal("new-badge-text").trim(); const icon = getVal("new-badge-icon").trim();
    if (!text) { toast("Enter badge text", "err"); return; }
    badgesData.push({ text, icon: icon || "fas fa-star" }); renderBadgesList();
    document.getElementById("new-badge-text").value = ""; document.getElementById("new-badge-icon").value = "";
};
document.getElementById("saveBadgesBtn").onclick = () => {
    const items = [...document.getElementById("badges-list").querySelectorAll(".sort-item")];
    heroData.badges = items.map(el => badgesData[parseInt(el.dataset.idx)]).filter(Boolean);
    mockSet("hero", heroData); toast("✅ Badges saved!");
};

function renderStatsList() {
    const list = document.getElementById("stats-list");
    list.innerHTML = statsData.map((s, i) => `
    <div class="sort-item" data-idx="${i}">
      <span class="drag-handle"><i class="fas fa-grip-vertical"></i></span>
      <div class="si-info"><strong>${s.value}+ ${s.label}</strong></div>
      <div class="si-actions">
        <input type="number" value="${s.value}" style="width:64px;padding:5px 8px;border:1px solid var(--bdr);border-radius:var(--rs);font-family:var(--font);font-size:.8rem;background:var(--sf2);color:var(--tx)"
          onchange="statsData[${i}].value=+this.value"/>
        <button class="btn-del" onclick="removeStat(${i})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join("");
    makeSortable("stats-list");
}
window.removeStat = i => { statsData.splice(i, 1); renderStatsList(); };

document.getElementById("addStatBtn").onclick = () => {
    const val = parseInt(getVal("new-stat-val")) || 0; const lbl = getVal("new-stat-label").trim();
    if (!lbl) { toast("Enter label", "err"); return; }
    statsData.push({ value: val, label: lbl }); renderStatsList();
    document.getElementById("new-stat-val").value = ""; document.getElementById("new-stat-label").value = "";
};
document.getElementById("saveStatsBtn").onclick = () => {
    const items = [...document.getElementById("stats-list").querySelectorAll(".sort-item")];
    heroData.stats = items.map(el => statsData[parseInt(el.dataset.idx)]).filter(Boolean);
    mockSet("hero", heroData); toast("✅ Stats saved!");
};
document.getElementById("saveHeroTextBtn").onclick = () => {
    Object.assign(heroData, {
        greeting: getVal("h-greeting"), name: getVal("h-name"), role: getVal("h-role"),
        tagline: getVal("h-tagline"), cvLink: getVal("h-cv"), githubLink: getVal("h-github")
    });
    mockSet("hero", heroData); toast("✅ Hero text saved!");
};
document.getElementById("saveHeroPhotoBtn").onclick = () => {
    heroData.profilePhoto = getVal("h-photo-url");
    mockSet("hero", heroData); toast("✅ Photo saved!");
};

function populateAbout() { setVal("about-bio", aboutData.bio || ""); renderAboutCardsList(); }

function renderAboutCardsList() {
    const cards = aboutData.cards || [];
    const list = document.getElementById("about-cards-list");
    list.innerHTML = cards.length ? cards.map((c, i) => `
    <div class="sort-item" data-idx="${i}">
      <span class="drag-handle"><i class="fas fa-grip-vertical"></i></span>
      ${c.photo
            ? `<img src="${c.photo}" style="width:40px;height:30px;border-radius:var(--rs);object-fit:cover"/>`
            : `<i class="${c.icon || 'fas fa-code'}" style="color:var(--p);font-size:1rem;width:20px;flex-shrink:0"></i>`}
      <div class="si-info"><strong>${c.title}</strong><span>${(c.desc || "").substring(0, 45)}…</span></div>
      <div class="si-actions">
        <button class="btn-edit" onclick="editAboutCard(${i})"><i class="fas fa-edit"></i></button>
        <button class="btn-del"  onclick="deleteAboutCard(${i})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join("") : `<p style="color:var(--tx3);font-size:.85rem;padding:.5rem">No cards yet.</p>`;
    makeSortable("about-cards-list");
}

window.editAboutCard = i => {
    const c = aboutData.cards[i];
    document.getElementById("edit-card-idx").value = i;
    setVal("card-title", c.title); setVal("card-icon", c.icon); setVal("card-desc", c.desc); setVal("card-photo-url", c.photo || "");
};
window.deleteAboutCard = i => { aboutData.cards.splice(i, 1); renderAboutCardsList(); };

document.getElementById("saveCardBtn").onclick = () => {
    const idx = getVal("edit-card-idx");
    const card = {
        title: getVal("card-title").trim(), icon: getVal("card-icon").trim() || "fas fa-code",
        desc: getVal("card-desc").trim(), photo: getVal("card-photo-url").trim()
    };
    if (!card.title) { toast("Enter title", "err"); return; }
    if (!aboutData.cards) aboutData.cards = [];
    if (idx !== "") aboutData.cards[parseInt(idx)] = card; else aboutData.cards.push(card);
    mockSet("about", aboutData); renderAboutCardsList(); clearAboutCard(); toast("✅ Card saved!");
};
function clearAboutCard() {
    document.getElementById("edit-card-idx").value = "";
    ["card-title", "card-icon", "card-desc", "card-photo-url"].forEach(id => setVal(id, ""));
}
document.getElementById("clearCardBtn").onclick = clearAboutCard;
document.getElementById("saveBioBtn").onclick = () => { aboutData.bio = getVal("about-bio"); mockSet("about", aboutData); toast("✅ Bio saved!"); };
document.getElementById("saveAboutOrderBtn").onclick = () => {
    const items = [...document.getElementById("about-cards-list").querySelectorAll(".sort-item")];
    aboutData.cards = items.map(el => aboutData.cards[parseInt(el.dataset.idx)]).filter(Boolean);
    mockSet("about", aboutData); renderAboutCardsList(); toast("✅ Order saved!");
};

function populateSkills() {
    setVal("skill-tags", (skillsData.tags || []).join(", "));
    renderCubeFacesAdmin();
    renderSkillBarsAdmin();
    pillsData = skillsData.pills || [];
    renderPillsList();
}

function renderCubeFacesAdmin() {
    const defaultFaces = [
        { icon: "fab fa-react", label: "React", face: "front" },
        { icon: "fab fa-node-js", label: "Node.js", face: "back" },
        { icon: "fab fa-js", label: "JS", face: "left" },
        { icon: "fas fa-database", label: "MongoDB", face: "right" },
        { icon: "fab fa-css3-alt", label: "CSS3", face: "top" },
        { icon: "fab fa-html5", label: "HTML5", face: "bottom" }
    ];
    if (!skillsData.cubeFaces || !skillsData.cubeFaces.length) skillsData.cubeFaces = defaultFaces;
    const faces = ["front", "back", "left", "right", "top", "bottom"];
    const wrap = document.getElementById("cube-faces-wrap"); if (!wrap) return;
    wrap.innerHTML = faces.map((face, i) => {
        const d = skillsData.cubeFaces[i] || { icon: "fas fa-code", label: face };
        return `<div class="afg">
      <label style="text-transform:capitalize">${face} Face</label>
      <div style="display:flex;gap:.5rem">
        <input type="text" id="cf-icon-${i}"  value="${d.icon}"  placeholder="fab fa-react" style="flex:1"/>
        <input type="text" id="cf-label-${i}" value="${d.label}" placeholder="React" style="width:80px"/>
      </div>
      <small style="color:var(--tx3);font-size:.72rem;margin-top:2px;display:block">
        <i class="${d.icon}" style="color:var(--p)"></i> preview
      </small>
    </div>`;
    }).join("");
}

document.getElementById("saveCubeFacesBtn").onclick = () => {
    const faces = ["front", "back", "left", "right", "top", "bottom"];
    skillsData.cubeFaces = faces.map((face, i) => ({
        face,
        icon: document.getElementById(`cf-icon-${i}`)?.value.trim() || "fas fa-code",
        label: document.getElementById(`cf-label-${i}`)?.value.trim() || face
    }));
    mockSet("skills", skillsData); renderCubeFacesAdmin(); toast("✅ Cube faces saved!");
};

function renderSkillBarsAdmin() {
    const defaultBars = [
        { category: "Frontend", items: [{ label: "React / Next.js", val: 85 }, { label: "HTML / CSS / Tailwind", val: 90 }, { label: "JavaScript", val: 80 }] },
        { category: "Backend", items: [{ label: "Node.js / Express", val: 80 }, { label: "C# / .NET", val: 75 }, { label: "PHP", val: 65 }] },
        { category: "DB & Net", items: [{ label: "MongoDB / PostgreSQL", val: 78 }, { label: "Cisco CCNA", val: 82 }, { label: "PC Hardware / IoT", val: 88 }] }
    ];
    if (!skillsData.bars || !skillsData.bars.length) skillsData.bars = defaultBars;
    const wrap = document.getElementById("skillbars-admin");
    wrap.innerHTML = skillsData.bars.map((cat, ci) => `
    <div class="bar-group">
      <div class="bar-group-header">
        <div class="afg" style="flex:1;margin-bottom:0">
          <label>Category Name</label>
          <input type="text" id="bcat-${ci}" value="${cat.category || ''}"/>
        </div>
      </div>
      ${(cat.items || []).map((item, ii) => `
        <div class="bar-item-row" style="margin-top:.6rem">
          <div class="afg" style="flex:1;margin-bottom:0">
            <label>Skill Label</label>
            <input type="text" id="blbl-${ci}-${ii}" value="${item.label || ''}"/>
          </div>
          <div class="afg" style="width:110px;margin-bottom:0">
            <label>% &nbsp;<span id="bval-display-${ci}-${ii}" style="color:var(--p);font-weight:600">${item.val || 0}%</span></label>
            <input type="range" id="bval-${ci}-${ii}" value="${item.val || 0}" min="0" max="100"
              style="width:100%;accent-color:var(--p);cursor:pointer"
              oninput="document.getElementById('bval-display-${ci}-${ii}').textContent=this.value+'%'"/>
          </div>
          <button class="btn-del" style="align-self:flex-end;margin-bottom:0;flex-shrink:0" onclick="removeBarItem(${ci},${ii})">
            <i class="fas fa-times"></i>
          </button>
        </div>`).join("")}
      <button class="btn-edit" style="margin-top:.8rem;font-size:.75rem" onclick="addBarItem(${ci})">
        <i class="fas fa-plus"></i> Add Skill
      </button>
    </div>`).join("");
}

window.addBarItem = ci => { if (!skillsData.bars[ci]) return; skillsData.bars[ci].items.push({ label: "New Skill", val: 70 }); renderSkillBarsAdmin(); };
window.removeBarItem = (ci, ii) => { skillsData.bars[ci].items.splice(ii, 1); renderSkillBarsAdmin(); };

document.getElementById("saveSkillBarsBtn").onclick = () => {
    skillsData.bars.forEach((cat, ci) => {
        const catEl = document.getElementById(`bcat-${ci}`); if (catEl) cat.category = catEl.value;
        (cat.items || []).forEach((item, ii) => {
            const lblEl = document.getElementById(`blbl-${ci}-${ii}`);
            const valEl = document.getElementById(`bval-${ci}-${ii}`);
            if (lblEl) item.label = lblEl.value;
            if (valEl) item.val = parseInt(valEl.value) || 0;
        });
    });
    mockSet("skills", skillsData); toast("✅ Skill bars saved!");
};
document.getElementById("saveTagsBtn").onclick = () => {
    skillsData.tags = getVal("skill-tags").split(",").map(t => t.trim()).filter(Boolean);
    mockSet("skills", skillsData); toast("✅ Tags saved!");
};

function renderPillsList() {
    const list = document.getElementById("pills-list");
    list.innerHTML = pillsData.map((p, i) => `
    <div class="sort-item" data-idx="${i}">
      <span class="drag-handle"><i class="fas fa-grip-vertical"></i></span>
      <i class="${p.icon}" style="color:var(--p);font-size:1rem;width:20px;flex-shrink:0"></i>
      <div class="si-info"><strong>${p.label}</strong><span>${p.icon}</span></div>
      <div class="si-actions"><button class="btn-del" onclick="removePill(${i})"><i class="fas fa-trash"></i></button></div>
    </div>`).join("");
    makeSortable("pills-list");
}
window.removePill = i => { pillsData.splice(i, 1); renderPillsList(); };

document.getElementById("addPillBtn").onclick = () => {
    const label = getVal("new-pill-label").trim(); const icon = getVal("new-pill-icon").trim();
    if (!label) { toast("Enter label", "err"); return; }
    pillsData.push({ label, icon: icon || "fas fa-code" }); renderPillsList();
    document.getElementById("new-pill-label").value = ""; document.getElementById("new-pill-icon").value = "";
};
document.getElementById("savePillsBtn").onclick = () => {
    const items = [...document.getElementById("pills-list").querySelectorAll(".sort-item")];
    pillsData = items.map(el => pillsData[parseInt(el.dataset.idx)]).filter(Boolean);
    skillsData.pills = pillsData;
    mockSet("skills", skillsData); toast("✅ Pills saved!");
};

function populateProjects() {
    const list = document.getElementById("proj-admin-list");
    list.innerHTML = projectsData.length ? projectsData.map((p, i) => `
    <div class="sort-item" data-id="${p.id}" data-idx="${i}">
      <span class="drag-handle"><i class="fas fa-grip-vertical"></i></span>
      ${p.image ? `<img src="${p.image}" style="width:50px;height:35px;border-radius:var(--rs);object-fit:cover"/>` : ""}
      <div class="si-info"><strong>${p.title}</strong><span>${p.category} · ${(p.tech || []).slice(0, 3).join(", ")}</span></div>
      <div class="si-actions">
        <button class="btn-edit" onclick="editProject('${p.id}')"><i class="fas fa-edit"></i></button>
        <button class="btn-del"  onclick="deleteProject('${p.id}','${p.title.replace(/'/g, "\\'")}')"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join("") : `<p style="color:var(--tx3);font-size:.85rem;padding:.5rem">No projects yet.</p>`;
    makeSortable("proj-admin-list");
}

document.getElementById("saveProjOrderBtn").onclick = () => {
    const items = [...document.getElementById("proj-admin-list").querySelectorAll(".sort-item")];
    items.forEach((el, i) => { const id = el.dataset.id; if (id) mockUpdateInColl("projects", id, { order: i }); });
    projectsData = mockGetColl("projects"); projectsData.sort((a, b) => (a.order || 0) - (b.order || 0));
    toast("✅ Order saved!");
};

document.getElementById("saveProjBtn").onclick = () => {
    const title = getVal("pf-title").trim(); const desc = getVal("pf-desc").trim();
    if (!title || !desc) { toast("Title & description required", "err"); return; }
    const data = {
        title, description: desc, category: getVal("pf-cat"),
        tech: getVal("pf-tech").split(",").map(t => t.trim()).filter(Boolean),
        liveLink: getVal("pf-live") || "#", githubLink: getVal("pf-github") || "#",
        image: getVal("pf-img-url") || "", order: projectsData.length, updatedAt: new Date().toISOString()
    };
    const editId = getVal("edit-proj-id");
    if (editId) mockUpdateInColl("projects", editId, data);
    else mockAddToColl("projects", data);
    projectsData = mockGetColl("projects"); projectsData.sort((a, b) => (a.order || 0) - (b.order || 0));
    populateProjects(); clearProjForm(); toast(editId ? "✅ Updated!" : "✅ Added!");
};

function clearProjForm() {
    ["pf-title", "pf-desc", "pf-tech", "pf-live", "pf-github", "pf-img-url", "edit-proj-id"].forEach(id => setVal(id, ""));
    document.getElementById("pf-cat").value = "web";
    document.getElementById("pf-img-preview").style.display = "none";
    document.getElementById("proj-form-title").innerHTML = '<i class="fas fa-plus-circle"></i> Add Project';
}
document.getElementById("clearProjBtn").onclick = clearProjForm;

window.editProject = id => {
    const p = projectsData.find(x => x.id === id); if (!p) return;
    setVal("edit-proj-id", id); setVal("pf-title", p.title); setVal("pf-desc", p.description);
    document.getElementById("pf-cat").value = p.category || "web";
    setVal("pf-tech", (p.tech || []).join(", ")); setVal("pf-live", p.liveLink);
    setVal("pf-github", p.githubLink); setVal("pf-img-url", p.image);
    if (p.image) { const prev = document.getElementById("pf-img-preview"); prev.src = p.image; prev.style.display = "block"; }
    document.getElementById("proj-form-title").innerHTML = '<i class="fas fa-edit"></i> Edit Project';
    document.getElementById("proj-form-card").scrollIntoView({ behavior: "smooth" });
};

window.deleteProject = (id, title) => {
    if (!confirm(`Delete "${title}"?`)) return;
    mockDeleteFromColl("projects", id);
    projectsData = projectsData.filter(p => p.id !== id);
    populateProjects(); toast("🗑️ Deleted");
};

function populateCerts() {
    const list = document.getElementById("certs-admin-list");
    list.innerHTML = certsData.length ? certsData.map((c, i) => `
    <div class="sort-item" data-id="${c.id || ''}" data-idx="${i}">
      <span class="drag-handle"><i class="fas fa-grip-vertical"></i></span>
      <i class="${c.icon}" style="color:var(--p);font-size:1rem;width:20px;flex-shrink:0"></i>
      <div class="si-info"><strong>${c.title}</strong><span>${c.issuer} · ${c.date}</span></div>
      <div class="si-actions">
        <button class="btn-edit" onclick="editCert(${i})"><i class="fas fa-edit"></i></button>
        <button class="btn-del"  onclick="deleteCert('${c.id || ''}',${i})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join("") : `<p style="color:var(--tx3);font-size:.85rem;padding:.5rem">No certs yet.</p>`;
    makeSortable("certs-admin-list");
}

document.getElementById("saveCertsOrderBtn").onclick = () => {
    const items = [...document.getElementById("certs-admin-list").querySelectorAll(".sort-item")];
    items.forEach((el, i) => { const id = el.dataset.id; if (id) mockUpdateInColl("certs", id, { order: i }); });
    certsData = mockGetColl("certs"); certsData.sort((a, b) => (a.order || 0) - (b.order || 0));
    toast("✅ Order saved!");
};

document.getElementById("saveCertBtn").onclick = () => {
    const title = getVal("cf-title").trim(); if (!title) { toast("Title required", "err"); return; }
    const data = {
        title, issuer: getVal("cf-issuer"), desc: getVal("cf-desc"),
        date: getVal("cf-date"), icon: getVal("cf-icon") || "fas fa-award", order: certsData.length
    };
    const editId = getVal("edit-cert-id");
    if (editId) mockUpdateInColl("certs", editId, data);
    else mockAddToColl("certs", data);
    certsData = mockGetColl("certs"); certsData.sort((a, b) => (a.order || 0) - (b.order || 0));
    populateCerts(); clearCertForm(); toast(editId ? "✅ Updated!" : "✅ Added!");
};

function clearCertForm() {
    ["cf-title", "cf-issuer", "cf-desc", "cf-date", "cf-icon", "edit-cert-id"].forEach(id => setVal(id, ""));
    document.getElementById("cert-form-title").innerHTML = '<i class="fas fa-plus-circle"></i> Add / Edit Cert';
}
document.getElementById("clearCertBtn").onclick = clearCertForm;

window.editCert = i => {
    const c = certsData[i];
    setVal("edit-cert-id", c.id || ""); setVal("cf-title", c.title); setVal("cf-issuer", c.issuer);
    setVal("cf-desc", c.desc); setVal("cf-date", c.date); setVal("cf-icon", c.icon);
    document.getElementById("cert-form-title").innerHTML = '<i class="fas fa-edit"></i> Edit Cert';
};
window.deleteCert = (id, i) => {
    if (!confirm("Delete this cert?")) return;
    if (id) mockDeleteFromColl("certs", id);
    certsData.splice(i, 1);
    populateCerts(); toast("🗑️ Deleted");
};