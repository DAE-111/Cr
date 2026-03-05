/* ===== Cr – Non-Custodial AI Security Infrastructure ===== */

// --- Intersection Observer for scroll animations ---
const animatedEls = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
animatedEls.forEach((el) => observer.observe(el));

// --- Mobile nav toggle ---
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// --- How-it-works step highlight ---
const steps = document.querySelectorAll('.how__step');
steps.forEach((step) => {
  step.addEventListener('click', () => {
    steps.forEach((s) => s.classList.remove('active'));
    step.classList.add('active');
  });
});
// activate first step on load
if (steps.length) steps[0].classList.add('active');

// --- Animated counter for hero stats ---
function animateCount(el, target, decimals = 0, suffix = '') {
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = Math.min(now - start, duration);
    const progress = elapsed / duration;
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value = eased * target;
    el.textContent = (decimals ? value.toFixed(decimals) : Math.floor(value)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statEls = document.querySelectorAll('[data-count]');
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el      = entry.target;
        const target  = parseFloat(el.dataset.count);
        const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        const suffix   = el.dataset.suffix || '';
        animateCount(el, target, decimals, suffix);
        statsObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);
statEls.forEach((el) => statsObserver.observe(el));

// --- Waitlist form ---
const form = document.getElementById('waitlistForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn   = form.querySelector('button');
    if (!input || !input.value) return;
    btn.textContent = '✓ You\'re on the list!';
    btn.disabled = true;
    btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
    input.disabled = true;
  });
}

// --- Scroll-progress indicator on nav ---
const navEl = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navEl?.classList.add('scrolled');
  } else {
    navEl?.classList.remove('scrolled');
  }
}, { passive: true });

// --- Parallax glow on hero ---
const heroGlow = document.querySelector('.hero__glow');
document.addEventListener('mousemove', (e) => {
  if (!heroGlow) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  heroGlow.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
});
