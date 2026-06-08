const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:.16});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const links=[...document.querySelectorAll('.side-nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const navObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.remove('active'));
      const active=links.find(a=>a.getAttribute('href')==='#'+entry.target.id);
      if(active) active.classList.add('active');
    }
  });
},{threshold:.42});
sections.forEach(s=>navObserver.observe(s));

const modal=document.getElementById('modal');
const modalImg=modal.querySelector('img');
document.querySelectorAll('[data-open]').forEach(el=>{
  el.addEventListener('click',()=>{
    modalImg.src=el.dataset.open;
    modal.classList.add('open');
  });
});
modal.querySelector('button').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{ if(e.target===modal) modal.classList.remove('open'); });

document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>{card.style.transform='';});
});
