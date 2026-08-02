// Typing effect for hero terminal
const typedEl = document.getElementById('typedName');
const nameText = 'Harshit Raghuwanshi';
let i = 0;
function typeChar() {
  if (i <= nameText.length) {
    typedEl.textContent = nameText.slice(0, i);
    i++;
    setTimeout(typeChar, 70);
  }
}
typeChar();

// Active tab highlight on scroll
const sections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.tab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.getAttribute('id');
      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
