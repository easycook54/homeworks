'use strict'; // вводим строгий режим

// Task #1
function solveEquation(a, b, c) {
  let arr; // задаем масив
  let d = b ** 2 - 4 * a * c; // задаем переменную d(дискриминант) и вычисляем её значение 
  if (d > 0) {
    arr = [(- b + Math.sqrt(d)) / (2 * a), (- b - Math.sqrt(d)) / (2 * a)];
  }
  else if (d === 0) {
    arr = [(- b / (2 * a))];
  }    
  else {
    arr = [];
  }
  // определяем корни уравления при каждом значении дискриминанта и добавляем в массив
  return arr;
  // возвращаем массив из функции
}

// Task #2
function calculateTotalMortgage(percent, contribution, amount, date) {
  
  if (Number.isNaN(+percent) === true) {
    return 'Параметр "Процентная ставка" содержит неправильное значение ' + '"' + percent + '"';
  } 
  else {
    percent = +percent;
  }

  if (Number.isNaN(+contribution) === true) {
    return 'Параметр "Начальный взнос" содержит неправильное значение ' + '"' + contribution + '"';
  } 
  else {
    contribution = +contribution;
  }

  if (Number.isNaN(+amount) === true) {
    return 'Параметр "Общая стоимость" содержит неправильное значение ' + '"' + amount + '"';
  } 
  else {
    amount = +amount;
  } // проверили входные параметры на тип "строка", если не получилось исправить, то вернули ошибку

  let today = +new Date(); //задаем текущую дату
  let finish = +date; //задаем окончание срока в числовом выражении в милисекундах
  let n = Math.trunc((finish - today) / (30 * 24 * 60 * 60 * 1000)); // считаем срок кредита в месяцах
  let P = (percent * 0.01) / 12; // определяем размер месячной процентной ставки
  let S = amount - contribution; // тело кредита
  let monthPayment = S * (P + (P / (((1 + P) ** n) - 1))); // размер ежемесячного платежа
  let fixedTotalAmount = monthPayment * n; //сумма оплаты банку неокргуленная
  let totalAmount = +fixedTotalAmount.toFixed(2); // сумма оплаты банку с 2-мя знаками и приведенная к типу "число"
  
  return totalAmount;
}
