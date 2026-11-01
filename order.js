// Лабораторная работа 4. Хайваз Никита, группа 251-353
// Выбор блюд и подсчёт стоимости заказа
const selectedDishes = {
    soup: null,
    main_course: null,
    drink: null
};

const emptyTexts = {
    soup: 'Блюдо не выбрано',
    main_course: 'Блюдо не выбрано',
    drink: 'Напиток не выбран'
};

function updateOrder() {
    const nothingSelected = document.getElementById('order-empty');
    const summary = document.getElementById('order-summary');
    let total = 0;
    let hasDishes = false;

    for (const category in selectedDishes) {
        const dish = selectedDishes[category];
        const text = document.getElementById(`${category}-selected`);
        const input = document.getElementById(`${category}-input`);

        if (dish) {
            text.textContent = `${dish.name} ${dish.price} ₽`;
            input.value = dish.keyword;
            total += dish.price;
            hasDishes = true;
        } else {
            text.textContent = emptyTexts[category];
            input.value = '';
        }
    }

    document.getElementById('order-total').textContent = total + ' ₽';
    nothingSelected.style.display = hasDishes ? 'none' : 'block';
    summary.style.display = hasDishes ? 'block' : 'none';
}

function selectDish(keyword) {
    const dish = dishes.find((item) => item.keyword === keyword);
    if (!dish) {
        return;
    }

    selectedDishes[dish.category] = dish;

    // Рамка только у выбранного блюда своей категории
    document.querySelectorAll(`.dishes[data-category="${dish.category}"] .dish`).forEach((card) => {
        card.classList.toggle('selected', card.dataset.dish === keyword);
    });

    updateOrder();
}

document.querySelector('main').addEventListener('click', (event) => {
    const card = event.target.closest('.dish');
    if (card) {
        selectDish(card.dataset.dish);
    }
});

document.querySelector('.order form').addEventListener('reset', () => {
    for (const category in selectedDishes) {
        selectedDishes[category] = null;
    }
    document.querySelectorAll('.dish.selected').forEach((card) => {
        card.classList.remove('selected');
    });
    updateOrder();
});

updateOrder();
