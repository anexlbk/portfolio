function enterMode(mode){
  const o=document.getElementById('modeSelectorOverlay');
  o.classList.add('hidden-out');
  switchMode(mode);
  setTimeout(()=>{o.style.display='none';},500);
}
function showModeSelector(){
  const o=document.getElementById('modeSelectorOverlay');
  o.style.display='flex';
  o.classList.remove('hidden-out');
}
function switchMode(mode){
  const body=document.body;
  const techTab=document.getElementById('navTabTech');
  const mktTab=document.getElementById('navTabMkt');
  const techNav=document.getElementById('tech-nav-links');
  const mktNav=document.getElementById('mkt-nav-links');
  const mobTech=document.getElementById('mobile-tech-links');
  const mobMkt=document.getElementById('mobile-mkt-links');
  if(mode==='mkt'){
    body.classList.add('mkt-mode');
    techTab.className='mode-tab inactive'; techTab.textContent='AI/Tech';
    mktTab.className='mode-tab active-mkt'; mktTab.textContent='Marketing';
    techNav.classList.add('hidden'); techNav.classList.remove('flex');
    mktNav.classList.remove('hidden'); mktNav.classList.add('flex');
    mobTech.classList.add('hidden');
    mobMkt.classList.remove('hidden');
  } else {
    body.classList.remove('mkt-mode');
    techTab.className='mode-tab active-tech'; techTab.textContent='AI/Tech';
    mktTab.className='mode-tab inactive'; mktTab.textContent='Marketing';
    techNav.classList.remove('hidden'); techNav.classList.add('flex');
    mktNav.classList.add('hidden'); mktNav.classList.remove('flex');
    mobTech.classList.remove('hidden');
    mobMkt.classList.add('hidden');
  }
  window.scrollTo({top:0,behavior:'smooth'});
  initReveal();
}
function openMobileMenu(){document.getElementById('mobile-menu').classList.remove('hidden');document.body.style.overflow='hidden';}
function closeMobileMenu(){document.getElementById('mobile-menu').classList.add('hidden');document.body.style.overflow='';}

function initReveal(){
  const els=document.querySelectorAll('.reveal');
  // Only enhance if user prefers motion
  if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches){
    els.forEach(el=>{
      el.classList.add('js-enhanced');
      el.classList.remove('revealed');
    });
    const obs=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');obs.unobserve(e.target);}});
    },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
    els.forEach(el=>obs.observe(el));
  } else {
    els.forEach(el=>el.classList.add('revealed'));
  }
}
initReveal();