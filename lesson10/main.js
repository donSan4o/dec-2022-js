// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

let form = document.createElement('form');

let inputName = document.createElement('input');
inputName.classList.add('input');
inputName.setAttribute('placeholder', 'Enter Name');

let inputSurname = document.createElement('input');
inputSurname.classList.add('input');
inputSurname.setAttribute('placeholder', 'Enter Surname');

let inputAge = document.createElement('input');
inputAge.classList.add('input');
inputAge.setAttribute('placeholder', 'Enter Age');

let button = document.createElement('button');
button.classList.add('submit');
button.innerText = 'Submit';

form.appendChild(inputName);
form.appendChild(inputSurname);
form.appendChild(inputAge);
form.appendChild(button);

document.body.appendChild(form);

let submitBlock = document.createElement('ul');

button.onclick = (e) => {
    e.preventDefault();
    let inputs = document.getElementsByClassName('input');
    for (const input of inputs) {
        let li = document.createElement('li');
        li.append(input.value);
        submitBlock.append(li);
    }
    document.body.appendChild(submitBlock);
};

// є сторінка, на якій є блок, в якому знаходиться цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
let counterText = document.getElementById('counter-block');
let counter = localStorage.getItem('counter') || 0;
counter++;
counterText.textContent = counter;
localStorage.setItem('counter', counter);

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push({ id: i + 1 });
}
let pageStart = 0;
let pageSize = 10;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let pages = document.getElementById('pages');

function showArr() {
    let p = '';
    for (let i = pageStart; i < pageSize && i < arr.length; i++) {
        p += `<p>${arr[i].id}</p>`;
    }
    pages.innerHTML = p;

    prev.disabled = pageStart === 0;
    next.disabled = pageSize >= arr.length;
}
showArr();

let clickNext = () => {
    pageSize += 10;
    pageStart += 10;
    showArr();
};
let clickPrev = () => {
    pageSize -= 10;
    pageStart -= 10;
    showArr();
};

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

let createButton = document.getElementById('createTable');
let table = document.createElement('table');

function addRow() {
    let content = document.getElementById('content');
    let rowCount = document.getElementById('rows');
    let rowValue = +rowCount.value;
    let cellCount = document.getElementById('cells');
    let cellValue = +cellCount.value;
    for (let i = 1; i <= rowValue; i++) {
        let row = document.createElement('tr');
        for (let j = 1; j <= cellValue; j++) {
            let cell = document.createElement('td');
            cell.innerText = content.value;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

createButton.onclick = (e) => {
    e.preventDefault();
    addRow();
    document.body.appendChild(table);
};
