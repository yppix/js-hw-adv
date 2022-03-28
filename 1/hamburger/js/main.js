const formTypeHmb = document.getElementById('typeHmb');
const formToppingHmb = document.getElementById('toppingHmb');
const formAddningHmb = document.getElementById('addToHmb');
const allToppings = formToppingHmb.querySelectorAll('input');
const btnDeleteToppings = document.querySelector('.deleteChoose');
const btnAddAllToppings = document.querySelector('.allChoose');
const count = document.querySelector('.count');
const totalPrice = document.querySelector('.total-price');
const totalCalories = document.querySelector('.total-calories');
const error = document.querySelector('.error');
const hmbTypes = [
    {
        id:"little",
        price:50,
        calories:20
    },
    {
        id:"big",
        price:100,
        calories:40
    }
];

const hmbToppings = [
    {
        id:"cheese",
        price:10,
        calories:20
    },
    {
        id:"salad",
        price:20,
        calories:5
    },
    {
        id:"potato",
        price:15,
        calories:10
    }
];

const hmbAddings = [
    {
        id:"species",
        price:15,
        calories:0
    },
    {
        id:"mayo",
        price:20,
        calories:5
    }
];


class Hamburger {
    constructor(type, toppings, addings) {
        this.type = type;
        this.toppings = toppings;
        this.addings = addings;
    }

    // Узнать цену
    calculatePrice() {
        let price = Number(this.type.price);

        this.toppings.forEach(p => {
            price += Number(p.price);
        });

        this.addings.forEach(p => {
            price += Number(p.price);
        })

        return price;
    }

    // Узнать калорийность
    calculateCalories() {
        let calories = Number(this.type.calories);

        this.toppings.forEach(p => {
            calories += Number(p.calories);
        });

        this.addings.forEach(p => {
            calories += Number(p.calories);
        })

        return calories;
    }

    render(){
        totalPrice.textContent = this.calculatePrice() + " рублей.";
        totalCalories.textContent = this.calculateCalories() + " калорий.";

    }

    //А как это реально сделать без получения данных со страницы?
    //Как это реализовать в таком ключе?

    //UPD посмотрела лекцию, поняла
    //Тоже думала через дата сет, а потом подумала
    //что наверно данные могут быть варианты и надо
    //предусмотреть, куда бы они попадали в самом
    //скрипте, тк как отрендерить датасеты?
    //Это реально? Или все же ближе к реальности без
    //датасетов?

    // // Добавить добавку
    // addTopping(topping) {
    //
    // }
    //
    // // Убрать добавку
    // removeTopping(topping) {
    //
    // }
    //
    // // Получить список добавок
    // getToppings(topping) {
    //
    // }
    //
    // // Узнать размер гамбургера
    // getSize() {
    //
    // }
    //
    // // Узнать начинку гамбургера
    // getStuffing() {
    //
    // }
}

count.addEventListener('click', ()=>{
    let typeBurger = new FormData(formTypeHmb);
    let type;
    for (let input of typeBurger) {
        type = input;
    }

    if(type === undefined){
        error.textContent = "";
        error.textContent = "Заполните поле!";
        return;
    }

    let toppingBurger = new FormData(formToppingHmb);
    let toppings = [];

    for (let input of toppingBurger) {
        toppings.push(input);
    }

    let addingBurger = new FormData(formAddningHmb);
    let addings = [];
    for (let input of addingBurger) {
        addings.push(input);
    }

    let chosenTypeHmb;
    hmbTypes.forEach(p => {
        if (p.id === type[1]){
            chosenTypeHmb = p;
            return chosenTypeHmb;
        }
    });

    let chosenToppingHmb = [];
    hmbToppings.forEach(p => {
            for (let i = 0; i < toppings.length; i++) {
                for (let j = 0; j < toppings[i].length; j++) {
                    if (p.id === toppings[i][j]) {
                        chosenToppingHmb.push(p)
                    }
                }
            }
        }
    );

    let chosenAddingHmb = [];
    hmbAddings.forEach(p => {
            for (let i = 0; i < addings.length; i++) {
                for (let j = 0; j < addings[i].length; j++) {
                    if (p.id === addings[i][j]) {
                        chosenAddingHmb.push(p)
                    }
                }
            }
        }
    );

    let superHamburger = new Hamburger(chosenTypeHmb, chosenToppingHmb, chosenAddingHmb);
    superHamburger.render();

})

btnDeleteToppings.addEventListener('click', (event) =>{
    event.preventDefault();
    allToppings.forEach(p => {
        p.checked = false;
    })
})

btnAddAllToppings.addEventListener('click', (event) =>{
    event.preventDefault();
    allToppings.forEach(p => {
        p.checked = true;
    })
})

formTypeHmb.addEventListener('click', (event) => {
    if (event.target.tagName !== 'INPUT'){
        return;
    }

    error.textContent = "";

})