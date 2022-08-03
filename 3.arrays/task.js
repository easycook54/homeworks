function compareArrays(arr1, arr2) {
  let result;
  result = arr1.length === arr2.length && arr1.every((item,i) => item === arr2[i]); 
  //если длины массивов одинаковые и для каждого элемента из массива arr1 на позиции i должно быть равенство с каждым элементом из массива arr2 на аналогичной позиции
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(number => number > 0).filter(number => number % 3 === 0).map(number => number * 10);
  // последовательно перебираем числа массива и возвращаем результат соответсвующий условию
  return resultArr; // array
}
