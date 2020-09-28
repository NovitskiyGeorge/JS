var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '2020-09-24');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for(let i=0; i < 2; i++) {
//     let item = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         howMuch = prompt('Во сколько обойдется?', '');
//     if((typeof(item)) === 'string' && (typeof(item)) != null && (typeof(howMuch)) != null && item != '' && howMuch != '' && item.length < 50) {
//         console.log('done');
//         appData.expenses[item] = howMuch;
//     } else {

//     }
// }

// let i = 0;
// while (i < 2) {
//     let item = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     howMuch = prompt('Во сколько обойдется?', '');
// if((typeof(item)) === 'string' && (typeof(item)) != null && (typeof(howMuch)) != null && item != '' && howMuch != '' && item.length < 50) {
//     console.log('done');
//     appData.expenses[item] = howMuch;
// } else {

// }
// i++;
// }

let i = 0;
do {
    let item = prompt('Введите обязательную статью расходов в этом месяце', ''),
    howMuch = prompt('Во сколько обойдется?', '');
if((typeof(item)) === 'string' && (typeof(item)) != null && (typeof(howMuch)) != null && item != '' && howMuch != '' && item.length < 50) {
    console.log('done');
    appData.expenses[item] = howMuch;
} else {

}
i++;
} while(i < 2);

appData.budgetDay = appData.budget / 30;
alert('Ежедневый бюджет' + appData.budgetDay);

if(appData.budgetDay < 100){
    console.log('Минимальный уровень достатка');
} else if (appData.budgetDay > 100 && appData.budgetDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.budgetDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}