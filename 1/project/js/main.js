const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <div class="product-item-title">
                    <h3>${item.title}</h3>
                    <p>${item.price}$</p>
                </div>
                <img src="https://picsum.photos/seed/${randomInteger(1, 1000)}/200">
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML
        = list.map((item) => renderProduct(item)).join('');
};

renderPage(products);

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}