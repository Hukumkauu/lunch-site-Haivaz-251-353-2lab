// Лабораторная работа 8. Хайваз Никита, группа 251-353
// Страница "Оформить заказ": состав заказа и отправка на сервер

const CATEGORIES = ['soup', 'main_course', 'salad', 'drink', 'dessert'];

let selectedDishes = {};

function renderOrderDishes() {
    const container = document.getElementById('order-dishes');
    const empty = document.getElementById('order-dishes-empty');
    container.replaceChildren();

    CATEGORIES.forEach((category) => {
        const dish = selectedDishes[category];
        if (dish) {
            container.append(createDishCard(dish, 'Удалить'));
        }
    });

    const hasDishes = Object.keys(selectedDishes).length > 0;
    empty.style.display = hasDishes ? 'none' : 'block';
}

function updateSummary() {
    let total = 0;
    CATEGORIES.forEach((category) => {
        const dish = selectedDishes[category];
        const text = document.getElementById(category + '-selected');
        if (dish) {
            text.textContent = dish.name + ' ' + dish.price + ' ₽';
            total += dish.price;
        } else {
            text.textContent = category === 'main_course' ? 'Не выбрано' : 'Не выбран';
        }
    });
    document.getElementById('order-total').textContent = total + ' ₽';
}

function removeDish(keyword) {
    const dish = dishes.find((item) => item.keyword === keyword);
    if (!dish) {
        return;
    }
    delete selectedDishes[dish.category];
    saveOrder(selectedDishes);
    renderOrderDishes();
    updateSummary();
}

// Нажатие на "Удалить" в карточке
document.getElementById('order-dishes').addEventListener('click', (event) => {
    if (event.target.closest('button')) {
        removeDish(event.target.closest('.dish').dataset.dish);
    }
});

// Время обязательно, только если выбрано "К указанному времени"
const form = document.getElementById('order-form');
const timeInput = document.getElementById('delivery-time');
form.addEventListener('change', () => {
    timeInput.required = document.getElementById('by-time').checked;
});

function buildFormData() {
    const data = new FormData();
    data.append('full_name', form.full_name.value);
    data.append('email', form.email.value);
    data.append('subscribe', form.subscribe.checked ? '1' : '0');
    data.append('phone', form.phone.value);
    data.append('delivery_address', form.delivery_address.value);
    data.append('delivery_type', form.delivery_type.value);
    if (form.delivery_type.value === 'by_time') {
        data.append('delivery_time', form.delivery_time.value);
    }
    data.append('comment', form.comment.value);

    // Отправляем id выбранных блюд
    CATEGORIES.forEach((category) => {
        if (selectedDishes[category]) {
            data.append(category + '_id', selectedDishes[category].id);
        }
    });
    return data;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Проверка состава заказа (из лабы 6)
    const message = getMissingMessage(selectedDishes);
    if (message) {
        showNotification(message);
        return;
    }

    try {
        const response = await fetch(API_BASE + '/labs/api/orders?api_key=' + API_KEY, {
            method: 'POST',
            body: buildFormData()
        });
        const result = await response.json();
        if (!response.ok || result.error) {
            throw new Error(result.error || 'Ошибка сервера: ' + response.status);
        }

        // Заказ оформлен: очищаем выбор
        clearSavedOrder();
        selectedDishes = {};
        form.reset();
        renderOrderDishes();
        updateSummary();
        showNotification('Заказ успешно оформлен!');
    } catch (error) {
        showNotification('Не удалось оформить заказ. ' + error.message);
    }
});

form.addEventListener('reset', () => {
    timeInput.required = false;
});

async function initOrderPage() {
    await loadDishes();
    selectedDishes = restoreSelected();
    renderOrderDishes();
    updateSummary();
}

document.addEventListener('DOMContentLoaded', initOrderPage);
