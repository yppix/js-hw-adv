const bigTxt = `One:'Hi Mary.' Two:'Oh, hi.'
One:'How are you doing?'
Two:'I'm doing alright. How about you?'
One:'Not too bad. The weather is great isn't it?'
Two:'Yes. It's absolutely beautiful today.'
One:'I wish it was like this more frequently.'
Two:'Me too.'
One:'So where are you going now?'
Two:'I'm going to meet a friend of mine at the department store.'
One:'Going to do a little shopping?'
Two:'Yeah, I have to buy some presents for my parents.'
One:'What's the occasion?'
Two:'It's their anniversary.'
One:'That's great. Well, you better get going. You don't want to be late.'
Two:'I'll see you next time.'
One:'Sure. Bye.'`
const formEl = document.querySelector('.callback');
const fullnameInput = document.getElementById('fullname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');


console.log(bigTxt.replace(/'/g,'"'));
console.log(bigTxt.replace(/\B'/g,'"'));

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    let fullname = fullnameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let searchFullName = fullname.match(/^[а-яА-ЯЁё]+$/g);
    let searchEmail = email.match(/^[\w\\.-]+@[\w]+\.[a-z{2,4}]+$/g);
    let searchPhone = phone.match(/^[+\d*][\d\-\\(\\)\s]{9,}$/g);

    if (searchFullName === null){
        fullnameInput.classList.add('error');
    } else {
        fullnameInput.classList.remove('error');
    }

    if (searchEmail === null){
        emailInput.classList.add('error');
    } else {
        emailInput.classList.remove('error');
    }

    if (searchPhone === null){
        phoneInput.classList.add('error');
    } else {
        phoneInput.classList.remove('error');
    }

})