// Скрипт для кнопки прокрутки вверх
const scrollToTopButton = document.createElement("button");
scrollToTopButton.classList.add("scroll-to-top");
scrollToTopButton.textContent = "↑";
document.body.appendChild(scrollToTopButton);

// Стили для кнопки
const style = document.createElement('style');
style.innerHTML = `
  .scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    opacity: 0; /* Скрыта по умолчанию */
    transform: translateY(20px); /* Сдвинута вниз */
    transition: opacity 0.3s ease, transform 0.3s ease; /* Плавное появление */
  }

  .scroll-to-top.visible {
    opacity: 1;
    transform: translateY(0); /* Восстановление позиции */
  }

  .scroll-to-top:hover {
    background-color: #333;
  }

  .scroll-to-top:focus {
    outline: none;
  }
`;
document.head.appendChild(style);

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add("visible"); // Добавляем класс для появления
    } else {
        scrollToTopButton.classList.remove("visible"); // Убираем класс, когда наверху
    }
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Скрипт для плавного появления меню при прокрутке
window.addEventListener("scroll", function () {
    const menu = document.querySelector(".menu");
    if (window.scrollY > 100) {
        menu.classList.add("visible"); // Добавляем класс для показа
    } else {
        menu.classList.remove("visible"); // Убираем класс, когда наверху
    }
});

// Плавная прокрутка при клике на меню
const menuLinks = document.querySelectorAll('.menu a');  // Селектор для ссылок меню

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Получаем ID якоря
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

const fadeElements = document.querySelectorAll('.fade-in:not(.no-fade-in)');

function handleScroll() {
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;

        if (isVisible) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Следим за скроллом
window.addEventListener('scroll', handleScroll);

// Первоначальная проверка для загрузки
handleScroll();
