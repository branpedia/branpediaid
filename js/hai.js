// Init year
document.getElementById('y').textContent = new Date().getFullYear();

// Theme persistence
const root = document.documentElement;
const THEME_KEY = 'arisu-theme';
const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const saved = localStorage.getItem(THEME_KEY) || 'light';
root.setAttribute('data-theme', saved || (prefersLight ? 'light' : 'dark'));

const toggleBtns = [
  document.getElementById('themeToggle'),
  document.getElementById('themeToggleMobile')
].filter(Boolean);

function syncToggleLabels() {
  const cur = root.getAttribute('data-theme');
  toggleBtns.forEach(b => b.textContent = (cur === 'light') ? '🌙\u00A0Dark' : '☀️\u00A0Light');
}
syncToggleLabels();

toggleBtns.forEach(btn => btn.addEventListener('click', () => {
  const cur = root.getAttribute('data-theme');
  const next = cur === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  syncToggleLabels();
}));

// mobile menu
const hamb = document.getElementById('hamb');
const mobile = document.getElementById('mobile');
function closeMobile() { mobile.style.display = 'none'; hamb.setAttribute('aria-expanded', 'false'); }
window.closeMobile = closeMobile;
hamb.addEventListener('click', () => {
  const isOpen = mobile.style.display === 'flex';
  mobile.style.display = isOpen ? 'none' : 'flex';
  hamb.setAttribute('aria-expanded', String(!isOpen));
});

// prefer desktop menu, hide mobile when > 900
const mq = window.matchMedia('(min-width: 900px)');
function handleMQ(e) {
  document.querySelector('.menu').style.display = e.matches ? 'flex' : 'none';
  document.getElementById('hamb').style.display = e.matches ? 'none' : 'inline-flex';
  if (e.matches) mobile.style.display = 'none';
}
handleMQ(mq); mq.addEventListener('change', handleMQ);

// smooth scroll with sticky offset
const OFFSET = 70;
function smoothTo(hash) {
  const el = document.querySelector(hash); if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) { e.preventDefault(); closeMobile(); smoothTo(href); history.pushState(null, '', href); }
  });
});

// tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('[data-panel]');
tabs.forEach(t => {
  t.addEventListener('click', () => {
    tabs.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
    t.classList.add('active'); t.setAttribute('aria-selected', 'true');
    const key = t.dataset.tab;
    panels.forEach(p => { const on = p.getAttribute('data-panel') === key; p.hidden = !on; p.setAttribute('aria-hidden', String(!on)); });
    const top = t.getBoundingClientRect().top + window.scrollY - 88; window.scrollTo({ top, behavior: 'smooth' });
  });
});

// accordion
const accBtns = document.querySelectorAll('.acc-btn');
accBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.parentElement.querySelector('.acc-panel');
    const open = panel.style.maxHeight;
    document.querySelectorAll('.acc-panel').forEach(p => { p.style.maxHeight = null; });
    document.querySelectorAll('.acc-btn span').forEach(s => s.textContent = '+');
    if (!open) { panel.style.maxHeight = panel.scrollHeight + 'px'; btn.querySelector('span').textContent = '–'; }
  });
});
