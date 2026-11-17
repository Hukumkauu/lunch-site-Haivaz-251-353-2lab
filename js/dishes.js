// Лабораторная работа 7. Хайваз Никита, группа 251-353
// Загрузка блюд с сервера (API)

const API_URL = 'https://api.rozetkaimg.me/labs/api/dishes';

// Сюда попадут блюда, полученные с сервера
let dishes = [];

// Названия категорий на сервере и на странице отличаются
const CATEGORY_NAMES = {
    soup: 'soup',
    main_course: 'main_course',
    salads_starters: 'salad',
    beverage: 'drink',
    dessert: 'dessert'
};

// Приводим данные сервера к нужному виду
function prepareDish(dish) {
    const category = CATEGORY_NAMES[dish.category] || dish.category;

    // Если путь к картинке неполный, добавляем адрес сервера
    let image = dish.image;
    if (image.startsWith('/')) {
        image = new URL(API_URL).origin + image;
    }

    return {
        id: dish.id,
        keyword: dish.keyword,
        name: dish.name,
        price: dish.price,
        category: category,
        count: dish.count,
        image: image,
        kind: dish.kind
    };
}

function showLoadError() {
    const message = document.createElement('p');
    message.className = 'load-error';
    message.textContent = 'Не удалось загрузить меню. Попробуйте обновить страницу позже.';
    document.querySelector('main').prepend(message);
}

async function loadDishes() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Ошибка сервера: ' + response.status);
        }
        const data = await response.json();
        dishes = data.map(prepareDish);
        displayDishes();
    } catch (error) {
        console.error(error);
        showLoadError();
    }
}

// Загружаем блюда, когда страница и все скрипты готовы
document.addEventListener('DOMContentLoaded', loadDishes);
