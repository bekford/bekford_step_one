'use strict';


var money,
    time,
    costs,
    things,
    oneDay,
    message;

var insome = {};
var savings = false;
    
money = prompt("How is your month budget?");
//time = prompt("Введите дату в формате YYYY-MM-DD");
costs = prompt("Введите обязательную статью расходов в этом месяце");
things = prompt("Во сколько это обойдется?");

var appData =  {"Бюджет": money,
                "Данные времени": time,
                "Обязательные расходы": expenses,
                "Необязательные расходы": optionalExpenses,
                "Доп. доход": insome,
                "Свойство": savings};
var expenses = {"Статья расходов": costs, "Обойдется в": things};

oneDay = money/30;
//message = "Бюджет на один день:" + oneDay;
alert("Бюджет на один день: " + oneDay);
console.log(expenses);
