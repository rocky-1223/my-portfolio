const quotes = [
  "Every challenge is an opportunity waiting for creativity.",
  "Success is built on small victories over fear.",
  "Passion gives meaning to effort and transforms hard work into joy.",
  "Mistakes are proof you’re trying and can fuel growth.",
  "Dream big, act bold, learn deeply.",
  "Let your struggles become the bridge to your strengths.",
  "True achievement blossoms after failing and rising again.",
  "Happiness isn’t a destination—it's a way of traveling.",
  "Continuous improvement is better than delayed perfection.",
  "Be grateful for today’s lessons—they shape tomorrow’s wins.",
  "Confidence is silent, insecurities are loud.",
  "A curious mind will never stop growing.",
  "In every phase, believe progress over perfection.",
  "You never know how strong you are until being strong is your only choice.",
  "Celebrate your journey—every step matters.",
  "Hope is the heartbeat of success.",
  "Let resilience be your superpower.",
  "Life’s happiness is found in meaningful work and steady friendships.",
  "Your career is a marathon, not a sprint.",
  "Learning is the only skill that never becomes outdated."
];
(function showQuote() {
  let used = JSON.parse(localStorage.getItem('quote_used') || '[]');
  if (used.length >= quotes.length) used = [];
  let unusedQuotes = quotes.filter((q, i) => !used.includes(i));
  let idx = Math.floor(Math.random() * unusedQuotes.length);
  let quote = unusedQuotes[idx];
  let quoteIdx = quotes.indexOf(quote);
  used.push(quoteIdx);
  localStorage.setItem('quote_used', JSON.stringify(used));
  document.getElementById('quote-box').textContent = quote;
})();
// Section visibility navigation
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main > section');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(el => el.classList.remove('active'));
    link.classList.add('active');
    const sectionId = link.getAttribute('href').substring(1);
    sections.forEach(sec => {
      if (sec.id === sectionId) {
        sec.classList.remove('hidden-section');
        sec.classList.add('active-section');
        window.scrollTo({ top: sec.offsetTop - 20, behavior: "smooth" });
      } else {
        sec.classList.add('hidden-section');
        sec.classList.remove('active-section');
      }
    });
  });
});
// Skills bar animation on scroll
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.animation = 'fillBar 2.1s forwards';
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.31 });
if (skillsSection) observer.observe(skillsSection);
// Contact form simulation
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    if (contactForm.checkValidity()) {
      formStatus.textContent = "Message sent successfully! I'll get back to you shortly.";
      formStatus.style.color = "#ffcc00";
      contactForm.reset();
    } else {
      formStatus.textContent = "Please fill all required fields correctly.";
      formStatus.style.color = "#ff4444";
    }
    setTimeout(() => { formStatus.textContent = ""; }, 3400);
  });
}
// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => { navList.classList.toggle('show'); });
navLinks.forEach(link => {
  link.addEventListener('click', () => { navList.classList.remove('show'); });
});
