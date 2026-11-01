// Лабораторная работа 6. Хайваз Никита, группа 251-353
// Проверка состава ланча и уведомления

function getMissingMessage() {
    const soup = selectedDishes.soup;
    const main = selectedDishes.main_course;
    const salad = selectedDishes.salad;
    const drink = selectedDishes.drink;
    const dessert = selectedDishes.dessert;

    if (!soup && !main && !salad && !drink && !dessert) {
        return 'Ничего не выбрано. Выберите блюда для заказа';
    }
    if (soup && !main && !salad) {
        return 'Выберите главное блюдо/салат/стартер';
    }
    if (salad && !soup && !main) {
        return 'Выберите суп или главное блюдо';
    }
    if (!soup && !main && !salad) {
        return 'Выберите главное блюдо';
    }
    if (!drink) {
        return 'Выберите напиток';
    }
    return null;
}

function showNotification(text) {
    const old = document.querySelector('.notification');
    if (old) {
        old.remove();
    }

    const overlay = document.createElement('div');
    overlay.className = 'notification';

    const box = document.createElement('div');
    box.className = 'notification-box';

    const message = document.createElement('p');
    message.textContent = text;

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Окей \u{1F44C}';
    button.addEventListener('click', () => {
        overlay.remove();
    });

    box.append(message, button);
    overlay.append(box);
    document.body.append(overlay);
}

document.querySelector('.order form').addEventListener('submit', (event) => {
    const message = getMissingMessage();
    if (message) {
        event.preventDefault();
        showNotification(message);
    }
});
