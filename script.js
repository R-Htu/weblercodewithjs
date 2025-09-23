
// ( -_•)︻デ═一 Header menu toggle
const hamburger = document.getElementById('hamburger');
const rightSide = document.getElementById('rightSide');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  rightSide.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const isClickInsideMenu = rightSide.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    hamburger.classList.remove('active');
    rightSide.classList.remove('open');
  }
});


// (ง ͠° ͟ل͜ ͡°)︻デ═一 Particles in banner
const particlesRoot = document.getElementById('particles');
for (let i = 0; i < 80; i++) {
  const d = document.createElement('div');
  d.className = 'particle';
  d.style.left = Math.random() * 100 + '%';
  d.style.animationDuration = (5 + Math.random() * 10) + 's';
  particlesRoot.appendChild(d);
}

// ( ͡° ͜ʖ ͡°)︻デ═一 Toggle forms safely
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

const showRegisterBtn = document.getElementById('showRegister');
const showLoginBtn = document.getElementById('showLogin');
const toggleToLoginBtn = document.getElementById('toggleToLogin');
const toggleToRegisterBtn = document.getElementById('toggleToRegister');

if (showRegisterBtn) {
  showRegisterBtn.onclick = () => {
    registerForm.style.display = '';
    loginForm.style.display = 'none';
  };
}

if (showLoginBtn) {
  showLoginBtn.onclick = () => {
    registerForm.style.display = 'none';
    loginForm.style.display = '';
  };
}

if (toggleToLoginBtn) {
  toggleToLoginBtn.onclick = () => {
    registerForm.style.display = 'none';
    loginForm.style.display = '';
  };
}

if (toggleToRegisterBtn) {
  toggleToRegisterBtn.onclick = () => {
    registerForm.style.display = '';
    loginForm.style.display = 'none';
  };
}

//(•_•)︻デ═一 → → → → BOOM! Footer canvas animation

/*
const canvas = document.getElementById('footerCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const { clientWidth, clientHeight } = canvas;
  canvas.width = clientWidth * dpr;
  canvas.height = clientHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener('resize', resize);

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.clientWidth,
    y: Math.random() * canvas.clientHeight,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6,
    color:` hsla(${Math.random() * 360}, 70%, 70%, 0.1)`
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  for (const p of particles) {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.clientWidth) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.clientHeight) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = p.color;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();

*/
const darkModeToggle = document.getElementById('darkModeToggle');


if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark');
  darkModeToggle.textContent = '☀';
}


darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');


  if (document.body.classList.contains('dark')) {
    darkModeToggle.textContent = '☀';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    darkModeToggle.textContent = '☾';
    localStorage.setItem('darkMode', 'disabled');
  }
});

