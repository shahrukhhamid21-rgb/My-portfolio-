const root=document.documentElement;
const theme=document.getElementById('theme');
const saved=localStorage.getItem('sk-theme'); if(saved)root.dataset.theme=saved;
if(theme)theme.addEventListener('click',()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;localStorage.setItem('sk-theme',t);theme.textContent=t==='dark'?'☾':'☼'});
const accent=localStorage.getItem('sk-accent');if(accent)root.style.setProperty('--accent',accent);
document.querySelectorAll('[data-color]').forEach(b=>b.addEventListener('click',()=>{root.style.setProperty('--accent',b.dataset.color);localStorage.setItem('sk-accent',b.dataset.color)}));
const menu=document.getElementById('menu'),links=document.getElementById('links');if(menu&&links)menu.addEventListener('click',()=>links.classList.toggle('open'));
const up=document.getElementById('up');window.addEventListener('scroll',()=>{if(up)up.classList.toggle('show',scrollY>300)});if(up)up.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const typed=document.getElementById('typed');if(typed){const words=['Full-Stack Web Developer','Web Application Developer','Creative Problem Solver'];let w=0,n=0,del=false;function type(){const s=words[w];typed.textContent=s.slice(0,n);if(!del&&n<s.length){n++;setTimeout(type,85)}else if(!del){del=true;setTimeout(type,1100)}else if(n>0){n--;setTimeout(type,40)}else{del=false;w=(w+1)%words.length;setTimeout(type,250)}}type()}
