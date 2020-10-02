// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);

// }

// showFirstMessage('Hellow World!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(3,4));
// console.log(calc(5,4));


// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let plus = (a,b) => a+b;
// console.log(plus(5, 2));

// let str = 'test';
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// let twelve = '12.2px';

// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));



// function lernJS(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }

// lernJS('JavaScript', function() {
//     console.log('Я прошел 3й урок!');
// });

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: 'black',
//     bg: 'red'
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ['first', 2, 3, 'four', 5];


// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }

let ans = prompt('', ''),
    arr = [];

arr = ans.split(',');
console.log(arr);