import { scrollToElement } from './scroll.js';
import { handleFormSubmission } from './form.js';
import { handleCurrencyChange } from './currency.js';

// Обработчик события для кнопки в героическом блоке
document.querySelector('.hero__button').addEventListener('click', () => {
  scrollToElement('#products');
});

// Обработчик события для ссылок в шапке
document.querySelectorAll('.header__menu-link').forEach(link => {
  link.addEventListener('click', () => {
    const dataLink = link.getAttribute('data-link');
    scrollToElement(`#${dataLink}`);
  });
});

// Обработчик события для кнопок товаров
document.querySelectorAll('.product-card__button').forEach(button => {
  button.addEventListener('click', () => {
    scrollToElement('#order');
  });
});

handleFormSubmission();
handleCurrencyChange();