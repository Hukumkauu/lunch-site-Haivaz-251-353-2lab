// Лабораторная работа 6. Хайваз Никита, группа 251-353
// Массив всех блюд
const dishes = [
    {
        keyword: 'norwegian_soup',
        name: 'Норвежский сливочный суп с лососем',
        price: 1800,
        category: 'soup',
        count: '350 г',
        image: 'menu/soups/norwegian_soup.jpg',
        kind: 'fish'
    },
    {
        keyword: 'tom_yum',
        name: 'Том ям с креветками',
        price: 1900,
        category: 'soup',
        count: '350 г',
        image: 'menu/soups/tom_yum.jpg',
        kind: 'fish'
    },
    {
        keyword: 'ramen',
        name: 'Рамен со свининой и яйцом',
        price: 1700,
        category: 'soup',
        count: '400 г',
        image: 'menu/soups/ramen.jpg',
        kind: 'meat'
    },
    {
        keyword: 'chicken_soup',
        name: 'Куриный суп с лапшой',
        price: 1500,
        category: 'soup',
        count: '350 г',
        image: 'menu/soups/chicken_soup.jpg',
        kind: 'meat'
    },
    {
        keyword: 'gazpacho',
        name: 'Гаспачо',
        price: 1400,
        category: 'soup',
        count: '350 г',
        image: 'menu/soups/gazpacho.jpg',
        kind: 'veg'
    },
    {
        keyword: 'mushroom_soup',
        name: 'Грибной суп-пюре',
        price: 1500,
        category: 'soup',
        count: '330 г',
        image: 'menu/soups/mushroom_soup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fish_cutlet_rice',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 2100,
        category: 'main_course',
        count: '350 г',
        image: 'menu/main_course/fish_cutlet_rice.jpg',
        kind: 'fish'
    },
    {
        keyword: 'shrimp_pasta',
        name: 'Паста с креветками',
        price: 2400,
        category: 'main_course',
        count: '320 г',
        image: 'menu/main_course/shrimp_pasta.jpg',
        kind: 'fish'
    },
    {
        keyword: 'chicken_cutlets',
        name: 'Куриные котлеты с картофельным пюре',
        price: 2200,
        category: 'main_course',
        count: '380 г',
        image: 'menu/main_course/chickencutletsandmashedpotatoes.jpg',
        kind: 'meat'
    },
    {
        keyword: 'pizza',
        name: 'Пицца пепперони',
        price: 2300,
        category: 'main_course',
        count: '450 г',
        image: 'menu/main_course/pizza.jpg',
        kind: 'meat'
    },
    {
        keyword: 'fried_potatoes',
        name: 'Жареная картошка с грибами',
        price: 1600,
        category: 'main_course',
        count: '350 г',
        image: 'menu/main_course/friedpotatoeswithmushrooms1.jpg',
        kind: 'veg'
    },
    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 2000,
        category: 'main_course',
        count: '400 г',
        image: 'menu/main_course/lasagna.jpg',
        kind: 'veg'
    },
    {
        keyword: 'tuna_salad',
        name: 'Салат с тунцом',
        price: 1300,
        category: 'salad',
        count: '250 г',
        image: 'menu/salads/tuna_salad.jpg',
        kind: 'fish'
    },
    {
        keyword: 'caesar',
        name: 'Цезарь с курицей',
        price: 1200,
        category: 'salad',
        count: '250 г',
        image: 'menu/salads/caesar.jpg',
        kind: 'meat'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе',
        price: 1100,
        category: 'salad',
        count: '230 г',
        image: 'menu/salads/caprese.jpg',
        kind: 'veg'
    },
    {
        keyword: 'egg_salad',
        name: 'Овощной салат с яйцом',
        price: 950,
        category: 'salad',
        count: '270 г',
        image: 'menu/salads/egg_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fries_sauce',
        name: 'Картофель фри с соусом цезарь',
        price: 700,
        category: 'salad',
        count: '235 г',
        image: 'menu/salads/fries_sauce.jpg',
        kind: 'veg'
    },
    {
        keyword: 'fries_ketchup',
        name: 'Картофель фри с кетчупом',
        price: 650,
        category: 'salad',
        count: '235 г',
        image: 'menu/salads/fries_ketchup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'orange_juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'menu/beverages/orangejuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'apple_juice',
        name: 'Яблочный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'menu/beverages/applejuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'carrot_juice',
        name: 'Морковный сок',
        price: 130,
        category: 'drink',
        count: '300 мл',
        image: 'menu/beverages/carrotjuice.jpg',
        kind: 'cold'
    },
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 200,
        category: 'drink',
        count: '300 мл',
        image: 'menu/beverages/cappuccino.jpg',
        kind: 'hot'
    },
    {
        keyword: 'green_tea',
        name: 'Зелёный чай',
        price: 150,
        category: 'drink',
        count: '300 мл',
        image: 'menu/beverages/green_tea.jpg',
        kind: 'hot'
    },
    {
        keyword: 'black_tea',
        name: 'Чёрный чай',
        price: 140,
        category: 'drink',
        count: '300 мл',
        image: 'menu/beverages/black_tea.jpg',
        kind: 'hot'
    },
    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 350,
        category: 'dessert',
        count: '150 г',
        image: 'menu/desserts/baklava.jpg',
        kind: 'small'
    },
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 400,
        category: 'dessert',
        count: '125 г',
        image: 'menu/desserts/cheesecake.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cheesecake',
        name: 'Шоколадный чизкейк',
        price: 450,
        category: 'dessert',
        count: '125 г',
        image: 'menu/desserts/chocolate_cheesecake.jpg',
        kind: 'small'
    },
    {
        keyword: 'chocolate_cake',
        name: 'Шоколадный торт',
        price: 550,
        category: 'dessert',
        count: '140 г',
        image: 'menu/desserts/chocolate_cake.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_3',
        name: 'Пончики (3 штуки)',
        price: 500,
        category: 'dessert',
        count: '350 г',
        image: 'menu/desserts/donuts_3.jpg',
        kind: 'medium'
    },
    {
        keyword: 'donuts_6',
        name: 'Пончики (6 штук)',
        price: 900,
        category: 'dessert',
        count: '700 г',
        image: 'menu/desserts/donuts_6.jpg',
        kind: 'large'
    }
];
