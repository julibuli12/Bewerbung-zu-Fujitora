const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

const links = [...document.querySelectorAll('.nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const navObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.remove('active'));
      const active = links.find(a => a.getAttribute('href') === '#' + entry.target.id);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.45 });

sections.forEach(section => navObs.observe(section));
