const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:0.16});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.sidebar a').forEach(link=>{
  link.addEventListener('click',()=> {
    document.querySelectorAll('.sidebar a').forEach(a=>a.classList.remove('active'));
    link.classList.add('active');
  });
});
