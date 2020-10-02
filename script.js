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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.budgetDay = (appData.budget / 30).toFixed();
        alert('Ежедневый бюджет ' + appData.budgetDay);
    },
    detectLevel: function() {
        if(appData.budgetDay < 100){
            console.log('Минимальный уровень достатка');
        } else if (appData.budgetDay > 100 && appData.budgetDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.budgetDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накаоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 2; i <= 3; i++) {
            let answer = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = answer;
        }
    },
    chooseIncome: function() {
        let i = 0;
        while( i < 1) {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if((typeof(items)) === 'string' && items != '' && items != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
            i++;
        }else {
            alert('Не верный формат данных! Введите повторно!');
        }
        }
        appData.income.forEach(function(item, i, arr) {
            i++;
            alert('Способы доп. заработка: ' + arr[i]);
        });        
    }
};



