// Hero shrinks as you scroll, then stays pinned
const hero = document.getElementById('hero');
function updateHero() {
  const vh = window.innerHeight;
  const minH = vh * 0.22;
  const h = Math.max(minH, vh - window.scrollY);
  hero.style.height = h + 'px';
}
window.addEventListener('scroll', updateHero, { passive: true });
window.addEventListener('resize', updateHero);
updateHero();

// Cards pan/tilt toward the cursor
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;   // -0.5 .. 0.5
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform =
      `translate(${x * 12}px, ${y * 12}px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});
