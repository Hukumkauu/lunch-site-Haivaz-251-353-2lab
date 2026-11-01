// Лабораторная работа 5. Хайваз Никита, группа 251-353
// Фильтрация блюд по типу (kind)
function applyFilter(section, kind) {
    section.querySelectorAll('.dish').forEach((card) => {
        const dish = dishes.find((item) => item.keyword === card.dataset.dish);
        const visible = !kind || dish.kind === kind;
        card.style.display = visible ? '' : 'none';
    });
}

document.querySelectorAll('.filters').forEach((filters) => {
    const section = filters.closest('section');

    filters.addEventListener('click', (event) => {
        const button = event.target.closest('.filter');
        if (!button) {
            return;
        }

        // Повторный клик по выбранному фильтру снимает его
        if (button.classList.contains('active')) {
            button.classList.remove('active');
            applyFilter(section, null);
            return;
        }

        filters.querySelectorAll('.filter').forEach((item) => {
            item.classList.remove('active');
        });
        button.classList.add('active');
        applyFilter(section, button.dataset.kind);
    });
});
