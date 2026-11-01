// Вывод блюд на страницу
function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'dish';
    card.dataset.dish = dish.keyword;

    const img = document.createElement('img');
    img.src = dish.image;
    img.alt = dish.name;

    const price = document.createElement('p');
    price.className = 'dish-price';
    price.textContent = dish.price + ' ₽';

    const name = document.createElement('p');
    name.className = 'dish-name';
    name.textContent = dish.name;

    const weight = document.createElement('p');
    weight.className = 'dish-weight';
    weight.textContent = dish.count;

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Добавить';

    card.append(img, price, name, weight, button);
    return card;
}

function displayDishes() {
    // Сортировка по названию в алфавитном порядке
    const sortedDishes = [...dishes].sort((a, b) => a.name.localeCompare(b.name, 'ru'));

    sortedDishes.forEach((dish) => {
        const container = document.querySelector(`.dishes[data-category="${dish.category}"]`);
        if (container) {
            container.append(createDishCard(dish));
        }
    });
}

displayDishes();
