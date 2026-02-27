/* ═══════════════════════════════════════════════
   VZN.EAD — loader.js
   Only included on index.html
═══════════════════════════════════════════════ */

(function() {
  const bar   = document.getElementById('loader-fill');
  const count = document.getElementById('loader-num');
  const loader = document.getElementById('loader');
  let prog = 0;

  const tick = setInterval(() => {
    prog += Math.random() * 5 + 1.5;
    if(prog >= 100) {
      prog = 100;
      clearInterval(tick);
      bar.style.width = '100%';
      count.textContent = '100';
      setTimeout(finish, 420);
    } else {
      bar.style.width = prog + '%';
      count.textContent = String(Math.floor(prog)).padStart(3, '0');
    }
  }, 38);

  function finish() {
    gsap.to(loader, {
      yPercent: -100,
      duration: 1.1,
      ease: 'power3.inOut',
      onComplete: () => {
        loader.style.display = 'none';
        animateHero();
      }
    });
  }

  function animateHero() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo('#hero-eyebrow', { opacity:0, y:20 }, { opacity:1, y:0, duration:0.9 }, 0)
      .fromTo('.hero-logo-type', { opacity:0, y:60 }, { opacity:1, y:0, duration:1.1 }, 0.1)
      .fromTo('.hero-logo-img-tag', { opacity:0, scale:0.95 }, { opacity:1, scale:1, duration:1 }, 0.1)
      .fromTo('.hero-bottom', { opacity:0, y:30 }, { opacity:1, y:0, duration:0.9 }, 0.5)
      .fromTo('.showreel-btn', { opacity:0, scale:0.75 }, { opacity:1, scale:1, duration:0.9, ease:'back.out(1.5)' }, 0.65);
  }
})();
