// mobile menu
/*const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// close menu on click
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => menu.classList.remove("open"));
});

// year
document.getElementById("year").textContent = new Date().getFullYear();

// copy email
const copyBtn = document.getElementById("copyEmail");
copyBtn.addEventListener("click", async () => {
  const email = document.getElementById("emailText").innerText.trim();
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied`;
    setTimeout(() => (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy Email`), 1500);
  } catch (e) {
    alert("Copy failed. Please copy manually: " + email);
  }
});

// contact -> opens mail
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();

  const subject = encodeURIComponent("Portfolio Contact Message");
  const body = encodeURIComponent(
    `Hello Darshan,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`
  );

  // change this to your email
  window.location.href = `mailto:darshan@example.com?subject=${subject}&body=${body}`;
  return false;
} */
// mobile menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => menu.classList.remove("open"));
});

// year
document.getElementById("year").textContent = new Date().getFullYear();

// copy email
const copyBtn = document.getElementById("copyEmail");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = document.getElementById("emailText").innerText.trim();
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied`;
      setTimeout(() => (copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy Email`), 1500);
    } catch (e) {
      alert("Copy failed. Please copy manually: " + email);
    }
  });
}

// contact -> opens mail
function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();

  const subject = encodeURIComponent("Portfolio Contact Message");
  const body = encodeURIComponent(
    `Hello Darshan,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`
  );

  window.location.href = `mailto:darshan5462@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

/* ✅ REAL 3D TILT EFFECT */
const tiltElements = document.querySelectorAll(".tilt");

tiltElements.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// 🔥 3D glow hover follow effect for profile photo
const profilePic = document.querySelector(".profile-pic.glow-3d");

if (profilePic) {
  profilePic.addEventListener("mousemove", (e) => {
    const rect = profilePic.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    profilePic.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  });

  profilePic.addEventListener("mouseleave", () => {
    profilePic.style.transform = "";
  });
}
/* ========================================
   🔥 Mouse Particle Effect (Canvas)
======================================== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w, h;
function resizeCanvas(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
let mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  // create particles
  for(let i=0;i<3;i++){
    particles.push({
      x: mouse.x,
      y: mouse.y,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 3,
      speedY: (Math.random() - 0.5) * 3,
      life: 80
    });
  }
});

function drawParticles(){
  ctx.clearRect(0,0,w,h);

  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fillStyle = `rgba(0,212,255,${p.life/120})`;
    ctx.fill();

    if(p.life <= 0) particles.splice(i,1);
  });

  requestAnimationFrame(drawParticles);
}
drawParticles();
