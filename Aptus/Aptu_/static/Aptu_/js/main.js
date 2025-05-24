window.onload = function() {
  // Après 3 secondes (durée de l’animation), ajouter la classe « loaded »
  setTimeout(function() {
    document.body.classList.add('loaded') ;
  }, 3000) ;
} ;

function toggleMenues() {
  document.getElementById("sidebar").classList.toggle("open");
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');

  if (window.innerWidth < 768) {
    document.getElementById("sidebar").classList.remove("open");
  }
}
// Hambourger
function toggleMenu() {
const menu = document.getElementById('menu');
if (menu.style.display === 'flex') {
    menu.style.display = 'none';
} else {
    menu.style.display = 'flex';
}
}

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
if(darkmode.classList.contains('bx-moon')){
    darkmode.classList.replace('bx-moon','bx-sun');
    document.body.classList.add('active');
}else{
    darkmode.classList.replace('bx-sun','bx-moon');
    document.body.classList.remove('active');
}
}
const navItems = document.querySelectorAll("a");
navItems.forEach(item => {
item.addEventListener("click", () => {
navItems.forEach(el => el.classList.remove("active"));
item.classList.add("active");
});
});

