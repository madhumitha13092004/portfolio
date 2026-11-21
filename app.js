const { useState, useEffect } = React;
const html = htm.bind(React.createElement);
const D = window.PORTFOLIO;

/* ---------- helpers ---------- */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv:not(.in),.ln:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
const Ph = ({ children }) => html`<span class="ph" title="Placeholder: add when ready">${children}</span>`;
const Icon = ({ id }) => id ? html`<img class=${"ti" + (id === "github" ? " inv" : "")} src=${"icons/" + id + ".svg"} alt="" aria-hidden="true" />` : null;
const Lines = ({ a, b, tag = "h2" }) => html`
  <${tag} class="disp ln"><span><i>${a}</i></span><span><i class="g">${b}</i></span></${tag}>`;
const Head = ({ no, label, a, b, side }) => html`
  <div class="sec-h">
    <div><div class="lbl rv">${no} / ${label}</div><${Lines} a=${a} b=${b} /></div>
    ${side && html`<p class="side rv">${side}</p>`}
  </div>`;

/* ---------- nav ---------- */
const LINKS = [["about", "About"], ["projects", "Projects"], ["skills", "Skills"], ["experience", "Experience"], ["certifications", "Certifications"], ["education", "Education"], ["contact", "Contact"]];
function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const f = () => {
      setSolid(scrollY > 40);
      let cur = ""; for (const [id] of LINKS) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 160) cur = id; }
      setActive(cur);
    };
    addEventListener("scroll", f, { passive: true }); f(); return () => removeEventListener("scroll", f);
  }, []);
  return html`
  <nav class=${solid ? "s" : ""} aria-label="Main"><div class="wrap nv">
    <a class="brand" href="#home">MADHUMITHA<b>.</b></a>
    <ul class=${"nl" + (open ? " open" : "")}>
      <li><a href="#home" onClick=${() => setOpen(false)}>Home</a></li>
      ${LINKS.map(([id, t]) => html`<li key=${id}><a href=${"#" + id} class=${active === id ? "on" : ""} onClick=${() => setOpen(false)}>${t}</a></li>`)}
    </ul>
    <a class="talk" href="#contact">LET'S TALK ↗</a>
    <button class="burger" aria-label="Menu" aria-expanded=${open} onClick=${() => setOpen(!open)}><i></i><i></i></button>
  </div></nav>`;
}

/* ---------- hero ---------- */
function Dust() {
  useEffect(() => {
    const cv = document.getElementById("dust"), cx = cv.getContext("2d"); let P = [], raf;
    const rs = () => { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight;
      P = Array.from({ length: 80 }, () => ({ x: cv.width * (0.45 + Math.random() * 0.45), y: Math.random() * cv.height, r: Math.random() * 1.8 + 0.3, v: Math.random() * 0.25 + 0.05, a: Math.random() * 6 })); };
    rs(); addEventListener("resize", rs);
    const d = () => { cx.clearRect(0, 0, cv.width, cv.height);
      for (const p of P) { p.y -= p.v; p.x += Math.sin(p.y / 40) * 0.15; if (p.y < 0) p.y = cv.height; p.a += 0.012;
        cx.fillStyle = `rgba(246,222,154,${0.2 + 0.55 * Math.abs(Math.sin(p.a))})`; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); }
      raf = requestAnimationFrame(d); };
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) d();
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", rs); };
  }, []);
  return html`<canvas id="dust" class="dust" aria-hidden="true"></canvas>`;
}
const Portrait = ({ big }) => D.photo
  ? html`<img class="photo" src=${D.photo} alt=${D.name} />`
  : html`<div class=${"silo" + (big ? " big" : "")} role="img" aria-label="Profile photo placeholder">
      <svg viewBox="0 0 200 320" aria-hidden="true"><defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3326"/><stop offset="1" stop-color="#0f1015"/></linearGradient></defs>
      <circle cx="100" cy="62" r="34" fill="url(#sg)"/><path d="M38 320 C40 180 60 112 100 108 C140 112 160 180 162 320Z" fill="url(#sg)"/></svg>
      <span>YOUR PHOTO HERE</span></div>`;

function Hero() {
  const resume = (e) => { if (!D.resume) { e.preventDefault(); document.getElementById("rnote").hidden = false; } };
  return html`
  <header id="home" class="hero">
    <${Dust} />
    <div class="wrap hero-in">
      <div class="h-l">
        <div class="eyebrow rv">MADHUMITHA B.</div>
        <h1 class="disp ln"><span><i>I Build</i></span><span><i class="g">Digital</i></span><span><i class="g">Experiences</i></span></h1>
        <div class="roles rv">${D.roles.map((r, i) => html`<span key=${r}>${i ? html`<em>◆</em>` : ""}${r}</span>`)}</div>
        <p class="lead rv">${D.tagline} B.Tech IT graduate from Panimalar Engineering College, building full stack web applications with Java, Spring Boot and React.</p>
        <div class="btns rv">
          <a class="bt p" href="#projects">EXPLORE MY PROJECTS →</a>
          <a class="bt o" href=${D.resume || "#"} onClick=${resume}>DOWNLOAD RESUME ↓</a>
        </div>
        <p id="rnote" class="note" hidden>Resume coming soon. Placeholder until the PDF is added.</p>
        <div class="status rv"><i></i>${D.status}</div>
      </div>
      <div class="h-r rv">
        <div class="beam" aria-hidden="true"></div>
        <div class="stage"><${Portrait} /><div class="floor"></div></div>
        <div class="quote">CODE IS MY CRAFT.<br/>IMPACT IS MY GOAL.<div class="sig">Madhumitha</div></div>
        <div class="coin" aria-hidden="true"><span>MB</span></div>
      </div>
    </div>
    <div class="scroll" aria-hidden="true">SCROLL</div>
  </header>`;
}

/* ---------- about ---------- */
const About = () => html`
  <section id="about"><div class="wrap">
    <div class="about">
      <div>
        <div class="lbl rv">01 / About Me</div>
        <${Lines} a="I Don't Just Write Code." b="I Build What's Next." />
        <p class="rv">I'm <strong>Madhumitha B</strong>, a B.Tech Information Technology graduate from <strong>Panimalar Engineering College</strong> and an aspiring <strong>Java Full Stack Developer</strong>. ${D.about[1]}</p>
        <p class="rv">${D.about[2]}</p>
        <div class="traits rv">${D.traits.map((t) => html`<span key=${t}>${t}</span>`)}</div>
      </div>
      <div class="frame rv"><div class="in"><${Portrait} big /><div class="sig">Madhumitha</div></div></div>
    </div>
    <div class="stats">${D.stats.map((s) => html`<div class="st rv" key=${s.label}><b class="g">${s.value}</b><span>${s.label}</span></div>`)}</div>
    <div class="obj rv"><span class="mono">// CAREER OBJECTIVE</span><p>${D.objective}</p></div>
  </div></section>`;

/* ---------- projects (stacking cards) ---------- */
const LinkBtn = ({ url, label }) => url ? html`<a class="vg" href=${url}>${label} ↗</a>` : html`<span class="vg off" title="Placeholder: add link">${label} ↗ <small>link soon</small></span>`;
const Projects = () => html`
  <section id="projects" class="dark"><div class="wrap">
    <${Head} no="02" label="Featured Work" a="Selected Works." b="Engineered Value." side="Real problems, practical solutions: three projects built across full stack web, deep learning and IoT." />
    <div class="stack">
      ${D.projects.map((p, i) => html`
        <article class="pc" key=${p.no} style=${{ top: 110 + i * 26 + "px" }}>
          <div class="pc-l">
            <div class="mono dom"><b>${p.no} //</b> ${p.domain}</div>
            <h3 class="disp">${p.title}</h3>
            ${p.badge && html`<div class="award">★ ${p.badge}</div>`}
            <p>${p.summary}</p>
            <ul class="pts">${p.points.map((x) => html`<li key=${x}>${x}</li>`)}</ul>
            <div class="chips">${p.stack.map((s) => html`<span key=${s}>${s}</span>`)}</div>
          </div>
          <div class="pc-r">
            <div class="mono">// ARCHITECTURE METRICS</div>
            <dl>${p.metrics.map(([k, v]) => html`<div key=${k}><dt>${k}</dt><dd>${v}</dd></div>`)}</dl>
            <div class="pc-btns"><${LinkBtn} url=${p.github} label="VIEW ON GITHUB" /><${LinkBtn} url=${p.demo} label="LIVE DEMO" /></div>
          </div>
          <div class="pc-no" aria-hidden="true">${p.no}</div>
        </article>`)}
    </div>
  </div></section>`;

/* ---------- skills ---------- */
const PILLARS = [
  { tag: "CORE PILLAR", corner: "RESPONSIVE UI", title: "Frontend Architecture", text: "Building clean, responsive interfaces with semantic HTML, modern CSS and component-driven React.", g: "Frontend" },
  { tag: "SERVER SIDE", corner: "JAVA-FIRST", title: "Backend Engineering", text: "Server-side logic and application layers with Java, Spring Boot and Node.js.", g: "Backend" },
  { tag: "PERSISTENCE", corner: "SQL & NOSQL", title: "Data Platforms", text: "Designing and querying relational and document databases, and writing efficient SQL.", g: "Databases" },
  { tag: "FOUNDATION", corner: "OOP", title: "Core Languages", text: "Strong programming fundamentals and object-oriented design, grounded in Java.", g: "Programming Languages" },
  { tag: "INTELLIGENCE", corner: "AI / ML", title: "AI & Deep Learning", text: "Deep learning with TensorFlow and CNNs, applied AI and prompt engineering.", g: "Additional Knowledge" },
  { tag: "WORKFLOW", corner: "DEV TOOLS", title: "Tooling & Delivery", text: "Version control, build tools and IDEs for an efficient, collaborative workflow.", g: "Tools" }
];
const Skills = () => html`
  <section id="skills"><div class="wrap">
    <${Head} no="03" label="Tech Matrix" a="Architectural Mastery." b="Precision Applied." side="The stack I build with, from interface to database to intelligence." />
    <div class="pillars">
      ${PILLARS.map((p) => { const grp = D.skills.find((s) => s.group === p.g); return html`
        <div class="pl rv" key=${p.title}>
          <div class="pl-top"><span class="mono">${p.tag}</span><span class="corner">${p.corner}</span></div>
          <h3 class="disp">${p.title}</h3><p>${p.text}</p>
          <div class="chips">${grp.items.map(([n, id], i) => html`<span key=${i}><${Icon} id=${id} />${n}</span>`)}</div>
        </div>`; })}
    </div>
  </div></section>`;

/* ---------- experience + coding ---------- */
const Experience = () => { const x = D.internship; return html`
  <section id="experience" class="dark"><div class="wrap">
    <${Head} no="04" label="Experience" a="Field Work." b="Real Exposure." />
    <div class="tl">
      <div class="ev rv"><div class="yr">${x.duration.toUpperCase()}</div>
        <h3 class="disp">${x.role}</h3><div class="mono sub">${x.org} · WEB DEVELOPMENT</div>
        <p>${x.text}</p><div class="chips">${x.stack.map((s) => html`<span key=${s}>${s}</span>`)}</div></div>
    </div>
    <div class="code-grid">
      <div class="pl rv"><div class="pl-top"><span class="mono">PROBLEM SOLVING</span><span class="corner">30+ SOLVED</span></div>
        <h3 class="disp">Coding Practice</h3><ul class="pts">${D.coding.map((c) => html`<li key=${c}>${c}</li>`)}</ul></div>
      <div class="pl rv"><div class="pl-top"><span class="mono">PROFILES</span><span class="corner">LIVE SOON</span></div>
        <h3 class="disp">Coding Profiles</h3>
        <dl class="profs">${D.codingProfiles.map((c) => html`<div key=${c.name}><dt>${c.name}</dt><dd>${c.url ? html`<a href=${c.url}>View ↗</a>` : html`<${Ph}>add link</${Ph}>`}</dd></div>`)}</dl>
        <div class="contrib" role="img" aria-label="GitHub contribution graph placeholder">${Array.from({ length: 7 * 30 }, (_, i) => html`<i key=${i} style=${{ opacity: 0.1 + ((i * 37) % 11) / 14 }}></i>`)}</div>
        <p class="mini">GitHub contribution graph: placeholder until a GitHub profile is added.</p></div>
    </div>
  </div></section>`; };

/* ---------- certifications ---------- */
function Certs() {
  const [open, setOpen] = useState(null);
  useEffect(() => { const k = (e) => e.key === "Escape" && setOpen(null); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, []);
  return html`
  <section id="certifications"><div class="wrap">
    <${Head} no="05" label="Certifications & Workshops" a="Verified Skills." b="Continuous Growth." side="Six credentials from Oracle, NASSCOM and Infosys Springboard. Tap a certificate to view it full size." />
    <div class="certs">${D.certifications.map((c, i) => html`
      <div class="ct rv" key=${c.title}>
        ${c.image
          ? html`<button class="ct-img has" onClick=${() => setOpen(c)} aria-label=${"View " + c.title}><img src=${c.image} alt=${c.title + " certificate"} loading="lazy" /><span class="zoom">VIEW ↗</span></button>`
          : html`<div class="ct-img"><span class="disp g">0${i + 1}</span><small>CERTIFICATE IMAGE</small></div>`}
        <div class="pl-top"><span class="mono">${c.issuer.toUpperCase()}</span><span class="corner">${c.badge}</span></div>
        <h3 class="disp">${c.title}</h3>
        <dl class="meta">
          ${c.date && html`<div><dt>Issued</dt><dd>${c.date}</dd></div>`}
          ${c.credId && html`<div><dt>Credential ID</dt><dd class="cid">${c.credId}</dd></div>`}
        </dl>
        ${c.link ? html`<a class="vg" href=${c.link}>${c.linkLabel || "VERIFY"} ↗</a>`
          : c.image ? html`<button class="vg" onClick=${() => setOpen(c)}>VIEW CERTIFICATE ↗</button>`
          : html`<span class="vg off">VERIFY ↗ <small>link soon</small></span>`}
      </div>`)}</div>
    ${open && html`<div class="lbx" role="dialog" aria-modal="true" aria-label=${open.title} onClick=${(e) => e.target === e.currentTarget && setOpen(null)}>
      <button class="lbx-x" onClick=${() => setOpen(null)} aria-label="Close">×</button>
      <figure><img src=${open.image} alt=${open.title + " certificate"} /><figcaption><span class="mono">${open.issuer}${open.date ? " · " + open.date : ""}</span>${open.title}</figcaption></figure>
    </div>`}
  </div></section>`;
}

/* ---------- education ---------- */
const EDU_TAG = ["UNDERGRADUATE", "HIGHER SECONDARY", "SECONDARY"];
const Education = () => html`
  <section id="education" class="dark"><div class="wrap">
    <${Head} no="06" label="Education" a="The Foundation." b="Built To Last." />
    <div class="tl">${D.education.map((e, i) => html`
      <div class="ev rv" key=${e.degree}><div class="yr">${EDU_TAG[i]}</div>
        <div class="ev-row"><div><h3 class="disp">${e.degree}</h3><div class="mono sub">${e.school.toUpperCase()}</div></div><b class="g score">${e.score}</b></div>
      </div>`)}</div>
    <div class="obj rv"><span class="mono">// CAREER GOALS</span><p>${D.goals}</p></div>
  </div></section>`;

/* ---------- contact ---------- */
function Contact() {
  const c = D.contact;
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [msg, setMsg] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`;
    if (c.email) setMsg(html`Ready. <a href=${`mailto:${c.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`}>Open your email app to send ↗</a> or write to ${c.email}.`);
    else { const t = `Subject: ${f.subject}\n${body}`;
      setMsg(html`Thanks, ${f.name}! Email isn't connected yet, so please reach me on <a href=${c.linkedin}>LinkedIn ↗</a>. <button type="button" class="copy" onClick=${() => navigator.clipboard?.writeText(t).then(() => setMsg("Message copied. Paste it into LinkedIn."), () => {})}>Copy message</button>`); }
  };
  const Row = ({ k, v, href }) => html`<div class="crow"><small class="mono">${k}</small>${v ? (href ? html`<a href=${href}>${v}</a>` : html`<b>${v}</b>`) : html`<${Ph}>Add ${k.toLowerCase()}</${Ph}>`}</div>`;
  return html`
  <section id="contact"><div class="wrap">
    <${Head} no="07" label="Contact" a="Initialize" b="Transmission." side="Open to fresher roles in Java Full Stack and software development. Let's talk." />
    <div class="ct-grid">
      <div class="rv">
        <${Row} k="EMAIL" v=${c.email} href=${c.email && "mailto:" + c.email} />
        <${Row} k="PHONE" v=${c.phone} href=${c.phone && "tel:" + c.phone} />
        <${Row} k="LINKEDIN" v="linkedin.com/in/madhumitha-b-658791359" href=${c.linkedin} />
        <${Row} k="GITHUB" v=${c.github} href=${c.github} />
        <${Row} k="LOCATION" v=${c.location} />
      </div>
      <form class="form rv" onSubmit=${submit}>
        <label><span class="mono">NAME</span><input required value=${f.name} onInput=${set("name")} autocomplete="name" /></label>
        <label><span class="mono">EMAIL</span><input required type="email" value=${f.email} onInput=${set("email")} autocomplete="email" /></label>
        <label><span class="mono">SUBJECT</span><input required value=${f.subject} onInput=${set("subject")} /></label>
        <label><span class="mono">MESSAGE</span><textarea required rows="3" value=${f.message} onInput=${set("message")}></textarea></label>
        <button class="bt p" type="submit">SEND TRANSMISSION →</button>
        ${msg && html`<p class="note" role="status">${msg}</p>`}
      </form>
    </div>
  </div></section>`;
}

const Footer = () => html`<footer><div class="wrap ft">
  <span class="brand">MADHUMITHA<b>.</b></span><span class="mono">JAVA FULL STACK DEVELOPER · CHENNAI, INDIA</span>
  <span class="mono">© ${new Date().getFullYear()} MADHUMITHA B</span></div></footer>`;

function App() {
  useReveal();
  return html`<${Nav} /><main><${Hero} /><${About} /><${Projects} /><${Skills} /><${Experience} /><${Certs} /><${Education} /><${Contact} /></main><${Footer} />`;
}
ReactDOM.createRoot(document.getElementById("root")).render(html`<${App} />`);
