const btn  = document.getElementById('logoBtn');
const menu = document.getElementById('logoMenu');

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Toggle menu open/closed
function openMenu(x) {
  if (!menu || !x) return;
  const willOpen = menu.hidden;
  setOpen(willOpen);
}

// Change website theme
function changeTheme() {
  const root = document.documentElement;
  const isRose = root.getAttribute('data-theme') === 'rose';
  root.setAttribute('data-theme', isRose ? 'main' : 'rose');
  
  // Keep the button's fill in sync with the new accent
  const accent = getComputedStyle(root).getPropertyValue('--button').trim();
  document.getElementById('themeBtn').style.background = accent;
}

function setOpen(open){
    menu.hidden = !open;
    menu.classList.toggle('show', open);
    btn.classList.toggle('open', open);        // rotates the flower
    btn.setAttribute('aria-expanded', String(open));
  }

(function wireNav(){
  if (!btn || !menu) return;

  // Close when a link or button in the menu is clicked
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a,button')) setOpen(false);
  });

  // Outside click closes
  document.addEventListener('click', (e) => {
    if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) {
      setOpen(false);
    }
  });

  // Escape key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();
