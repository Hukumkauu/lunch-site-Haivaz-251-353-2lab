// Лабораторная работа 8. Хайваз Никита, группа 251-353
// Страница "Собрать ланч": выбор блюд и панель перехода к оформлению

let selectedDishes = {};

function highlightSelected() {
    document.querySelectorAll('.dish').forEach((card) => {
        const dish = dishes.find((item) => item.keyword === card.dataset.dish);
        const isSelected = selectedDishes[dish.category] === dish;
        card.classList.toggle('selected', isSelected);
    });
}

function updatePanel() {
    const panel = document.getElementById('checkout-panel');
    const link = document.getElementById('checkout-link');
    const hint = document.getElementById('checkout-hint');

    let total = 0;
    for (const category in selectedDishes) {
        total += selectedDishes[category].price;
    }

    // Панель скрыта, если ничего не выбрано
    const hasDishes = Object.keys(selectedDishes).length > 0;
    panel.style.display = hasDishes ? 'flex' : 'none';
    document.getElementById('checkout-total').textContent = total + ' ₽';

    // Ссылка доступна, только если заказ подходит под одно из комбо
    const message = getMissingMessage(selectedDishes);
    link.classList.toggle('disabled', Boolean(message));
    link.setAttribute('aria-disabled', message ? 'true' : 'false');
    hint.textContent = message || '';
}

function selectDish(keyword) {
    const dish = dishes.find((item) => item.keyword === keyword);
    if (!dish) {
        return;
    }
    selectedDishes[dish.category] = dish;
    saveOrder(selectedDishes);
    highlightSelected();
    updatePanel();
}

document.querySelector('main').addEventListener('click', (event) => {
    const card = event.target.closest('.dish');
    if (card) {
        selectDish(card.dataset.dish);
    }
});

// Не даём перейти по ссылке, пока она недоступна
document.getElementById('checkout-link').addEventListener('click', (event) => {
    if (event.currentTarget.classList.contains('disabled')) {
        event.preventDefault();
    }
});

async function initLunchPage() {
    await loadDishes();
    displayDishes();
    selectedDishes = restoreSelected();
    highlightSelected();
    updatePanel();
}

document.addEventListener('DOMContentLoaded', initLunchPage);
