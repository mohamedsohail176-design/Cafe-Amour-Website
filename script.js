// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  if(toggle && navList){
    toggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  // Break text into animated letter spans
  document.querySelectorAll('.letters').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    text.split('').forEach((ch, i) => {
      const span = document.createElement('span');
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      span.style.animationDelay = (i * 0.045) + 's';
      el.appendChild(span);
    });
  });

  // Word rotator (cycles through data-words on an element)
  document.querySelectorAll('.word-rotator').forEach(el => {
    const words = (el.dataset.words || '').split('|').filter(Boolean);
    if(words.length < 2) return;
    let idx = 0;
    words.forEach((w, i) => {
      const span = document.createElement('span');
      span.textContent = w;
      if(i === 0) span.classList.add('active');
      el.appendChild(span);
    });
    // size the box to the widest word so layout doesn't jump
    el.style.minWidth = Math.max(...words.map(w => w.length)) + 'ch';
    setInterval(() => {
      const spans = el.querySelectorAll('span');
      const current = spans[idx];
      const next = spans[(idx + 1) % spans.length];
      current.classList.remove('active');
      current.classList.add('leaving');
      next.classList.add('active');
      setTimeout(() => current.classList.remove('leaving'), 500);
      idx = (idx + 1) % spans.length;
    }, 2200);
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
    }, {threshold:0.12});
    revealEls.forEach(el=>io.observe(el));
  } else {
    revealEls.forEach(el=>el.classList.add('in-view'));
  }

  // Menu search (only present on menu.html)
  const searchInput = document.getElementById('menuSearch');
  if(searchInput){
    const items = document.querySelectorAll('.menu-item');
    const cards = document.querySelectorAll('.menu-card');
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      cards.forEach(card => {
        let anyVisible = false;
        card.querySelectorAll('.menu-item').forEach(item => {
          const name = item.dataset.name || '';
          const match = q === '' || name.includes(q);
          item.style.display = match ? '' : 'none';
          if(match) anyVisible = true;
        });
        card.style.display = anyVisible ? '' : 'none';
      });
    });
  }
});
