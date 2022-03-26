const cartBtn = document.querySelector('.btn-cart');
const productContainer = document.querySelector('.products');
const cartElement = document.querySelector('.cart-products');
const quantityElement = document.querySelector('.quantity');

class GoodsItem {
    constructor(item) {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
    }

    render() {
        return `<div class="product-item">
                <div class="product-item-title">
                    <h3>${this.title}</h3>
                    <p>${this.price}$</p>
                </div>
                <img src="https://picsum.photos/seed/${randomInteger(1, 1000)}/200">
                <button data-price = "${this.price}" 
                    data-name = "${this.title}" 
                    data-id = "${this.id}" 
                    class="buy-btn">
                        Купить
                </button>
            </div>`
    }
}

class GoodsList {
    constructor(productContainer) {
        this.goods = [];
        this.container = productContainer;
        this._fetchProducts();
        this.render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]
    }

    render() {
        for (let item of this.goods) {
            const product = new GoodsItem(item);
            productContainer.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

let list = new GoodsList();
let cart = {};

const btnElements = document.querySelectorAll('.buy-btn');
btnElements.forEach(el => el.addEventListener('click', (event) => {
        let cartItem = new CartItem(el.dataset.id, el.dataset.name, +el.dataset.price);
        cartItem.addCartItem();
    })
)

cartBtn.addEventListener('click', () => {
    let cart = new Cart();
    cartElement.innerHTML = '';
    cartElement.classList.remove('hidden');
    cart.render();
})

class CartItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = 1;
        this.cart = cart;

    }

    addCartItem() {
        let check = this._checkCart();
        cartElement.classList.add('hidden');
        cartElement.innerHTML = '';
        if (check) {
            this.cart[this.id] = {
                id: this.id,
                name: this.name,
                price: this.price,
                count: this.count
            }
        } else {
            this.cart[this.id].count++
        }
        this.getCounter()
    }

    _checkCart() {
        if (!(this.id in this.cart)) {
            return true;

        } else {
            return false;
        }
    }

    getCounter() {
        const valuesArray = Object.values(this.cart);
        let sum = 0;

        for (let value of valuesArray) {
            sum += value.count;
        }

        quantityElement.innerHTML = '';
        quantityElement.innerHTML = sum;
    }

    render(id) {

        if ((document.querySelector(`.header_cart_item[data-id="${id}"]`))) {
            return;
        }

        return `
            <div class="header_cart_item" data-id="${id}">
              <div>${this.cart[id].name}</div>
              <div>
                <span class="productCount">${this.cart[id].count}</span> шт.
              </div>
              <div>${(this.cart[id].price).toFixed(2)}$</div>
              <div>
                <span class="productTotalRow">${(this.cart[id].price * this.cart[id].count).toFixed(2)}</span>$
              </div>
            </div>
            `;
    }
}

class Cart extends CartItem {

    constructor(id, name, price, count, cart) {
        super(id, name, price, count, cart);
    }

    getTotalPrice() {
        const valuesArray = Object.values(this.cart);
        let price = 0;

        for (let value of valuesArray) {
            price += value.count * value.price;
        }
        return `<div class="total-cost"> К оплате: ${price} $</div>`;

    }

    getTotalCounter() {
        const valuesArray = Object.values(this.cart);
        let sum = 0;

        for (let value of valuesArray) {
            sum += value.count;
        }

        return `<div class="total-quantity"> Количество товаров: ${sum} </div>`;
    }

    render() {
        const valuesArray = Object.values(this.cart);
        console.log(valuesArray.length)
        for (let item of valuesArray) {
            cartElement.insertAdjacentHTML('beforeend', super.render(item.id));
        }
        cartElement.insertAdjacentHTML('beforeend', this.getTotalCounter());
        cartElement.insertAdjacentHTML('beforeend', this.getTotalPrice());

    }
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}