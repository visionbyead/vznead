/* ═══════════════════════════════════════════════
   VZN.EAD — main.js
═══════════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

/* ── CURSOR ── */
const cursor = document.getElementById('cursor');

if (window.matchMedia('(pointer: fine)').matches) {
  cursor.style.display = 'block';
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '1';
  });
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .work-item, .p-item, .client-item, .gallery-item')) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .work-item, .p-item, .client-item, .gallery-item')) {
      document.body.classList.remove('cursor-hover');
    }
  });
} else {
  cursor.style.display = 'none';
  document.body.style.cursor = 'auto';
}

/* ── NAV SCROLL ── */
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── ACTIVE NAV LINK ── */
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

document.addEventListener('DOMContentLoaded', () => {

  /* ── HAMBURGER MENU ── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  /* ── VIDEO MODAL ── */
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── SCROLL REVEALS ── */
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true }
      }
    );
  });

  /* ── STAGGER REVEALS ── */
  gsap.utils.toArray('.reveal-stagger').forEach(container => {
    const children = container.querySelectorAll(':scope > *');
    gsap.fromTo(children,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 85%', once: true }
      }
    );
  });

  /* ── SCROLL TO TOP ── */
  const scrollTop = document.getElementById('scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      scrollTop.classList.toggle('visible', window.scrollY > 100);
    });
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});

/* ── VIDEO MODAL FUNCTIONS ── */
function openModal(src) {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('modal-iframe');
  if (!modal || !iframe) return;
  iframe.src = src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('modal-iframe');
  if (!modal || !iframe) return;
  modal.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}
window.openModal = openModal;
window.closeModal = closeModal;

/* ── FORM SUBMIT ── */
window.submitForm = function(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const orig = btn.textContent;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = 'var(--white)';
  setTimeout(() => { e.target.reset(); btn.textContent = orig; btn.style.background = ''; }, 3500);
};