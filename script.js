const revealObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('visible');
  });
},{threshold:.18});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

const links=[...document.querySelectorAll('.nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const navObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.remove('active'));
      const active=links.find(a=>a.getAttribute('href')==='#'+e.target.id);
      if(active)active.classList.add('active');
    }
  });
},{threshold:.45});
sections.forEach(s=>navObs.observe(s));
