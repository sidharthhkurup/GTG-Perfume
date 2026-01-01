/* ================= HAMBURGER ================= */
document.getElementById("hamburger").onclick = () => {
  document.getElementById("navMenu").classList.toggle("active");
};

/* ================= GALLERY ================= */
const images = [
  "assets/perfume-2142824_1280.jpg",
  "assets/13699903a.webp",
  "assets/OIP.webp",
  "assets/perfume-2142824_1280.jpg"
];

let index = 0;

function setSlide(i) {
  index = i;
  document.getElementById("mainImage").src = images[index];
}

function changeSlide(dir) {
  index = (index + dir + images.length) % images.length;
  setSlide(index);
}

/* ================= SUBSCRIPTION PLANS ================= */
const planRadios = document.querySelectorAll('input[name="plan"]');
const singlePlan = document.getElementById('single-plan');
const doublePlan = document.getElementById('double-plan');

planRadios.forEach((radio, idx) => {
  radio.addEventListener('change', () => {
    if (idx === 0) {
      singlePlan.style.display = 'block';
      doublePlan.style.display = 'none';
    } else {
      singlePlan.style.display = 'none';
      doublePlan.style.display = 'block';
    }
  });
});

/* ================= ACCORDION ================= */
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    const open = parent.classList.contains('active');

    document.querySelectorAll('.accordion').forEach(acc => {
      acc.classList.remove('active');
      acc.querySelector('.icon').textContent = '+';
    });

    if (!open) {
      parent.classList.add('active');
      header.querySelector('.icon').textContent = '−';
    }
  });
});
