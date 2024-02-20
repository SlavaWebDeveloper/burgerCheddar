/**
 * Прокручивает страницу до указанного элемента с использованием плавного скроллинга.
 * @param {string} selector - Селектор элемента, до которого нужно прокрутить страницу.
 */
export function scrollToElement(selector) {
  // Получаем элемент по селектору
  const element = document.querySelector(selector);
  
  // Проверяем, существует ли элемент
  if (element) {
    // Прокручиваем страницу до элемента с использованием плавного скроллинга
    element.scrollIntoView({ behavior: 'smooth' });
  }
}