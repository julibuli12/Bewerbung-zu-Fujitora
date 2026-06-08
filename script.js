const pages = [...document.querySelectorAll('.page')];
const links = [...document.querySelectorAll('.nav a')];

const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      links.forEach(link => link.classList.remove('active'));
      const active = links.find(link => link.getAttribute('href') === '#' + entry.target.id);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.55 });

pages.forEach(page => obs.observe(page));
