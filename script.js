const obs=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const modal=document.getElementById('modal');const modalImg=modal.querySelector('img');
document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>{modalImg.src=el.dataset.open;modal.classList.add('open')}));
modal.querySelector('span').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
