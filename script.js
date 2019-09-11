'use strict';

let money, time;
let a1, a2, a3;

function start() {
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");    
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

start();

let appData =  {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {1 : "", 2 : "", 3 : ""},
    insome: [],
    savings: true
};


function chooseExpenses() {

    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько это обойдется?", "");
        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != "" && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
        } else {
            i = i - 1;
            }

    }


}

chooseExpenses();
 
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100)
    console.log("Минимальный уровень достатка");
else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)
    console.log("Средний уровень достатка");
else if (appData.moneyPerDay > 2000)
    console.log("Высокий уровень достатка");
else {
    console.log("Произошла ошибка");
}
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        appData.monthIncome = save/100*persent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    } 
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <4; i++) {
        appData.optionalExpenses[i] = +prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i+1];
    }
}

chooseOptExpenses();
console.log(appData.optionalExpenses);




