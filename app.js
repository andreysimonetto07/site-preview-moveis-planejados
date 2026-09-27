
const nav=document.querySelector('.site-nav');
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>20),{passive:true});
menuBtn?.addEventListener('click',()=>navLinks?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks?.classList.remove('open')));
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href'); if(id.length<2)return;
  const el=document.querySelector(id); if(!el)return;
  e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'});
}));
