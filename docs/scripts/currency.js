/**
 * Обработчик изменения валюты.
 * Изменяет текущую валюту при клике на кнопку и обновляет цены продуктов в соответствии с новой валютой.
 */
export function handleCurrencyChange() {
  // Получаем кнопку для изменения валюты
  const changeCurrencyButton = document.querySelector('#change-currency');
  // Получаем цены продуктов
  const prices = document.querySelectorAll('.product-card__price');

  // Объект с информацией о валютах и их коэффициентах конвертации
  const currencies = {
    "$": { symbol: "₽", coefficient: 95 },
    "₽": { symbol: "BYN", coefficient: 3 },
    "BYN": { symbol: "€", coefficient: 0.9 },
    "€": { symbol: "¥", coefficient: 6.9 }
  };

  // Инициализация текущей валюты
  let currentCurrency = "$";

  // Добавляем обработчик события для кнопки изменения валюты
  changeCurrencyButton.addEventListener('click', (event) => {
    // Получаем новую валюту и коэффициент конвертации
    const newCurrency = currencies[currentCurrency]?.symbol || "$";
    const coefficient = currencies[currentCurrency]?.coefficient || 1;

    // Обновляем текущую валюту в тексте кнопки
    event.target.innerText = newCurrency;

    // Обновляем цены продуктов в соответствии с новой валютой
    prices.forEach(price => {
      const basePrice = parseFloat(price.getAttribute("data-base-price"));
      const convertedPrice = (basePrice * coefficient).toFixed(0);
      price.innerText = `${convertedPrice} ${newCurrency}`;
    });

    // Обновляем текущую валюту
    currentCurrency = newCurrency;
  });
}
