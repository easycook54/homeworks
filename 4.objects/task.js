'use strict'

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
 }


  const student1 = new Student('Vasya', 'male', 20);
  const student2 = new Student('Masha', 'female', 19);
  const student3 = new Student('Rita', 'female', 22);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) { 
    this.marks = [mark];
  } 
  else {
    this.marks.push(mark);
  }
}


Student.prototype.addMarks = function (...otherMarks) {
  if(this.marks === undefined) { 
    this.marks = [...otherMarks];
  } 
  else {
    this.marks.push(...otherMarks);
  }
}


Student.prototype.getAverage = function () {
  let result = 0;
  for (let j = 0; j < this.marks.length; j ++) {
    result += this.marks[j];
  }
  return result / this.marks.length;
}


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}