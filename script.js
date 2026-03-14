// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;

  cursor.style.left = mx - 6 + 'px';
  cursor.style.top  = my - 6 + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;

  ring.style.left = rx - 18 + 'px';
  ring.style.top  = ry - 18 + 'px';

  requestAnimationFrame(animRing);
})();


// Reveal on scroll — content visible by default
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), e.target.dataset.delay || 0);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });


document.querySelectorAll('.reveal').forEach((el, i) => {
  el.dataset.delay = (i % 4) * 80;
  el.classList.add('will-animate');
  observer.observe(el);
});


document.querySelectorAll('.edu-item').forEach(el => {
  el.classList.add('will-animate');
  observer.observe(el);
});