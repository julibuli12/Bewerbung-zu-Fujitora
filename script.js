const pages=[...document.querySelectorAll('.page')];
const links=[...document.querySelectorAll('.nav a')];

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      links.forEach(a=>a.classList.remove('active'));
      const link=links.find(a=>a.getAttribute('href')==='#'+e.target.id);
      if(link) link.classList.add('active');
    }
  });
},{threshold:.55});

pages.forEach(p=>obs.observe(p));
