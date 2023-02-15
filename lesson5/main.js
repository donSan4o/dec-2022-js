// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectArea = (a, b) => console.log('Area of rectangle is ' + a * b);

rectArea(5, 3);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleArea = (r) => console.log('Area of circle is ' + 3.14 * r * r);

circleArea(6);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cilArea = (h, r) => console.log('Area of cylinder is ' + 2 * 3.14 * r * (h + r));

cilArea(3, 4);

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrEl = (arr) => {
    for (const i of arr) {
        console.log('element ' + i);
    }
};
arrEl([1, 2, 3, 'sdasd', 'sdfsffff', true, false]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let showParagraph = (text) => document.write(`<p>${text}</p>`);

showParagraph('Some random text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let showList = (text) => {
    let i = 0;
    document.write('<ul>');
    while (i < 3) {
        document.write(`<li>${text}</li>`);
        i++;
    }
    document.write('</ul>');
}
showList('Random Text');

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let randomList = (text, i) => {
    let counter = 1;
    document.write('<ul>');
    while (counter <= i) {
        document.write(`<li>${counter} - ${text}</li>`);
        counter++;
    }
    document.write('</ul>');
}
randomList('random text', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrListCreate = (arr) => {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
arrListCreate([1, 2, 3, 'sdasd', false, 'NaN', 'sdfsffff', true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.

let objListCreate = (arr) => {
    for (const user of arr) {
        document.write(
            `<div>ID - ${user.id} Name - ${user.name} Age - ${user.age}</div>`
        );
    }
}
objListCreate([
    { id: 111, name: 'Vasya', age: 35 },
    { id: 222, name: 'Kolya', age: 22 },
    { id: 333, name: 'Olya', age: 19 },
]);

// - створити функцію яка повертає найменьше число з масиву

let calcMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log('Minimum number is ' + min);
}
calcMin([23, 18, 32, 23, 54, 4, 19]);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sumArr = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    console.log(sum);
}
sumArr([2, 10, 15]);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swapArr = (arr, prevIndex, currIndex) => {
    let temp1 = arr[prevIndex];
    let temp2 = arr[currIndex];
    arr[prevIndex] = temp2;
    arr[currIndex] = temp1;
    console.log(arr);
}
swapArr([1, 43, 25, 17, 93, 13], 2, 4);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const i of currencyValues) {
        if (exchangeCurrency === i.currency) {
            console.log(sumUAH / i.value);
        }
    }
}
exchange(
    10000,
    [
        { currency: 'USD', value: 40 },
        { currency: 'EUR', value: 42 },
    ],
    'USD'
);
