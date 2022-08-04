'use strict'

// Задача 1
function parseCount(number) {
  if (isNaN(Number.parseInt(number, 10))) {
    throw new Error('Невалидное значение');
  }
  return Number.parseInt(number, 10);
}


function validateCount(number) {
  try {
    return parseCount(number);
    
  }
  catch (Error) {
    return Error;
  }
}

// Задача 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }


  getPerimeter() {
    return this.a + this.b + this.c;
  }


  getArea() {
    let p = 0.5 * (this.a + this.b + this.c);
    let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +S.toFixed(3);
  }
}

function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    }
    catch (Error) {
      return {
        getArea() {
          return "Ошибка! Треугольник не существует";
        },

        getPerimeter() {
            return "Ошибка! Треугольник не существует";
        }
       }
    }
}


