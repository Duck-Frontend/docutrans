const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  if (i >= slide.length) {
    index = 0;
  } else if (i < 0) {
    index = slide.length - 1;
  } else {
    index = i;
  }
  
  // Показ слайда
  slides.style.transform = `translateX(-${index * 100}%)`;
  
  // Обновление индикаторов
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// Добавление событий для кнопок
prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

// Добавление событий для индикаторов
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => showSlide(idx));
});


document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      question.classList.toggle('active');
  });
});
