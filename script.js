let money, time;

function start() {
        money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '2020-09-24');

        while(isNaN(money) || money == '' || money == null) {
            money = +prompt('Ваш бюджет на месяц?', '');
        }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};



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

// let i = 0;
// do {
//     let item = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     howMuch = prompt('Во сколько обойдется?', '');
// if((typeof(item)) === 'string' && (typeof(item)) != null && (typeof(howMuch)) != null && item != '' && howMuch != '' && item.length < 50) {
//     console.log('done');
//     appData.expenses[item] = howMuch;
// } else {
//     i--;
// }
// i++;
// } while(i < 2);

function chooseExpenses() {
    for(let i=0; i < 2; i++) {
        let item = prompt('Введите обязательную статью расходов в этом месяце', ''),
            howMuch = prompt('Во сколько обойдется?', '');
        if((typeof(item)) === 'string' && (typeof(item)) != null && (typeof(howMuch)) != null && item != '' && howMuch != '' && item.length < 50) {
            console.log('done');
            appData.expenses[item] = howMuch;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.budgetDay = (appData.budget / 30).toFixed();
    alert('Ежедневый бюджет ' + appData.budgetDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.budgetDay < 100){
        console.log('Минимальный уровень достатка');
    } else if (appData.budgetDay > 100 && appData.budgetDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.budgetDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накаоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for(let i = 1; i < 4; i++) {
        let answer = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = answer;
    }
}

chooseOptExpenses();