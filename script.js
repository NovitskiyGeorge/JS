var money = prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '2020-09-24');
let item = prompt('Введите обязательную статью расходов в этом месяце', '');
let howMuch = prompt('Во сколько обойдется?', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        item:howMuch
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let i=0; i < 1; i++) {
    item = prompt('Введите обязательную статью расходов в этом месяце', '');
    howMuch = prompt('Во сколько обойдется?', '');
}

var budgetDay = money / 30;
alert(budgetDay);