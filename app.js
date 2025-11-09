
(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if(!btn || !nav) return;
  function close(){
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }
  function toggle(){
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    btn.setAttribute('aria-expanded', expanded ? 'true':'false');
  }
  btn.addEventListener('click', toggle);
  // Close on link click (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();
