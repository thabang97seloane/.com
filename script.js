// ===== Data =====
const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Digital Skills Training',
    description: 'Computer literacy, Microsoft Office, AI, web development, and Python programming courses designed for all skill levels.',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Career Development',
    description: 'Professional CV revamping, cover letters, LinkedIn profile optimisation, and interview preparation to land your dream job.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Website Design & Development',
    description: 'Business websites, e-commerce solutions, domain registration, hosting, and WhatsApp integration for your online presence.',
  },
  {
    icon: 'fas fa-palette',
    title: 'Graphic Design & Branding',
    description: 'Logo design, business cards, flyers, and company profiles that make your brand stand out from the competition.',
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Digital Marketing',
    description: 'Social media management, content creation, Google Business Profile setup, and online advertising to grow your reach.',
  },
  {
    icon: 'fas fa-robot',
    title: 'AI Solutions',
    description: 'AI training, productivity tools, content creation, and business automation to keep you ahead in the digital age.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Business Support',
    description: 'Business plans, company profiles, funding applications, and digital transformation strategies for growth.',
  },
];

const whyChooseUs = [
  { icon: 'fas fa-hand-holding-usd', title: 'Affordable', desc: 'Quality tech solutions accessible to everyone' },
  { icon: 'fas fa-users', title: 'Community-Focused', desc: 'Built for young people, job seekers & entrepreneurs' },
  { icon: 'fas fa-award', title: 'Practical Training', desc: 'Hands-on learning with real-world applications' },
  { icon: 'fas fa-headset', title: 'Ongoing Support', desc: "We don't just train — we support your journey" },
];

// ===== Render Services =====
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map(service => `
    <div class="service-card">
      <div class="service-card__icon"><i class="${service.icon}"></i></div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
}

// ===== Render Why Choose Us =====
function renderWhyChooseUs() {
  const grid = document.getElementById('whyGrid');
  grid.innerHTML = whyChooseUs.map(item => `
    <div class="why-item">
      <div class="why-item__icon"><i class="${item.icon}"></i></div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

// ===== Mobile Menu Toggle =====
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  const icon = toggle.querySelector('i');

  function closeMenu() {
    menu.classList.remove('is-open');
    icon.className = 'fas fa-bars';
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ===== Contact Form =====
function initContactForm() {
  const form = document.getElementById('quoteForm');
  const successMsg = document.getElementById('formSuccess');
  let hideTimer = null;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    successMsg.classList.add('is-visible');
    form.reset();

    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      successMsg.classList.remove('is-visible');
    }, 4000);
  });
}

// ===== Footer Year =====
function setFooterYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderWhyChooseUs();
  initMobileMenu();
  initContactForm();
  setFooterYear();
});
