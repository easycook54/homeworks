// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0]; // задаем первое значение для сравнения для параметра мин
  max = arr[0]; // задаем первое значение для сравнения для параметра макс
  sum = 0; // задаем начальную сумму
  
  for (let i = 0; i < arr.length; i ++) {
    sum += arr[i]; // складываем все элементы
    avg = sum / arr.length; // делим сумму элементов на количество, что равно длине массива
    avg = +avg.toFixed(2); // округляем до двух знаков и приводим к числу
    if (arr[i] < min) {
        min = arr[i]; // перебираем массив в поиска мин, находим и присваеваем мин
    }
    if (arr[i] > max) {
      max = arr[i]; // перебираем массив в поисках макс, нахоим и присваеваем макс
    }
  }
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    sum += arr[i];
  }
  return sum; // создаем функцию для подсчета суммы элементов в подмассиве и возвращаем её
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i ++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max; // создаем функцию для расчета максимума среди сумм элементов подмассива с отсылкой на другую функцию
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  for (i = 0; i < arr.length; i ++) {
    if (arr[i] > max) {
      max = arr[i]; // считаем максимум внутри подмассива
    }
    if (arr[i] < min) {
      min = arr[i]; // считаем минимум внутри подмассива
    }
  }
  return Math.abs(max - min); // считаем разницу между минимумом и максимумом и возвращаем обратно
}
