// Лабораторная работа 8. Хайваз Никита, группа 251-353
// Сохранение выбранных блюд в localStorage

const STORAGE_KEY = 'lunchOrder';

// Возвращает объект вида { soup: 3, drink: 20 } - id блюд по категориям
function getSavedOrder() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
        return {};
    }
}

// Сохраняет только id выбранных блюд
function saveOrder(selected) {
    const ids = {};
    for (const category in selected) {
        if (selected[category]) {
            ids[category] = selected[category].id;
        }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

function clearSavedOrder() {
    localStorage.removeItem(STORAGE_KEY);
}

// Превращает сохранённые id обратно в объекты блюд
function restoreSelected() {
    const saved = getSavedOrder();
    const selected = {};
    for (const category in saved) {
        const dish = dishes.find((item) => item.id === saved[category]);
        if (dish) {
            selected[category] = dish;
        }
    }
    return selected;
}
