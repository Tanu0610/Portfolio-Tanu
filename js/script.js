// ===========================================================
// TANUJA D K — PORTFOLIO SCRIPT
// ===========================================================

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- Rotating role text (typewriter) ---------- */
const roles = [
  'AI / ML Enthusiast',
  'Full-Stack Developer',
  'Competitive Programmer',
  'Aspiring SDE'
];
const roleEl = document.getElementById('roleText');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];
  if (!deleting){
    charIndex++;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

/* ---------- Heatmap generator (LeetCode-style consistency grid) ---------- */
const heatmap = document.getElementById('heatmap');
const CELLS = 26 * 7; // ~26 weeks
// Deterministic pseudo-random pattern weighted toward an active streak
function seededRandom(seed){
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
for (let i = 0; i < CELLS; i++){
  const cell = document.createElement('i');
  const r = seededRandom(i * 7.13 + 1);
  // Bias the most recent ~40% of cells toward higher activity (represents current streak)
  const recencyBoost = i > CELLS * 0.6 ? 0.35 : 0;
  const score = r + recencyBoost;
  let level = 0;
  if (score > 1.05) level = 4;
  else if (score > 0.85) level = 3;
  else if (score > 0.6) level = 2;
  else if (score > 0.35) level = 1;
  cell.className = 'l' + level;
  heatmap.appendChild(cell);
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

/* ---------- Animated counters (LeetCode stats) ---------- */
const counters = document.querySelectorAll('.lc-num[data-count]');
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      animateCount(entry.target);
      counterIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => counterIO.observe(c));

function animateCount(el){
  const target = parseInt(el.dataset.count, 10);
  const duration = 1200;
  const start = performance.now();
  function step(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

/* ---------- Nav background on scroll ---------- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20 ? '0 8px 30px -20px rgba(0,0,0,0.6)' : 'none';
});
