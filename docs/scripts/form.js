/**
 * Обработчик отправки формы заказа бургера.
 * 
 * * @description Добавляет обработчик события на кнопку отправки формы. При нажатии на кнопку
 * предотвращает отправку формы, проверяет заполненность обязательных полей и выводит сообщение
 * об успешной отправке или подсвечивает незаполненные поля.
 */
export function handleFormSubmission() {
  // Получение ссылок на элементы формы
  const orderBurgerForm = document.querySelector("#orderBurgerForm");
  const orderName = document.querySelector("#orderName");
  const orderPhone = document.querySelector("#orderPhone");
  const submitButton = document.querySelector('#order-action');

  // Добавление обработчика события на кнопку отправки формы
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение отправки формы
    let hasError = false;

    // Проверка каждого обязательного поля формы
    [orderBurgerForm, orderName, orderPhone].forEach(item => {
      if (!item.value.trim()) {
        item.classList.add('error'); // Подсвечивание незаполненного поля
        hasError = true;
      } else {
        item.classList.remove('error'); // Удаление подсветки с заполненного поля
      }
    });

    
    // Если ошибок нет, очистка полей и вывод сообщения
    if (!hasError) {
      [orderBurgerForm, orderName, orderPhone].forEach(item => {
        item.value = '';  
      });
      alert('Спасибо за заказ! Мы скоро с вами свяжемся');
    }
  });
}
