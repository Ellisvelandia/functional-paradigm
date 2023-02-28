let fn = function () {
  console.log("hi iam a funcion");
};

let fn2 = function (f) {
  console.log("do it some");
  f();
  console.log("at the end");
};

fn2(fn);

let fn3 = (f) => console.log("dont have keys");
fn3();

let fn4 = (f) => {
  console.log("do it something");
  f();
  console.log("at the end");
};

fn4(fn);

let numbers = [3, 4, 1, 11, 7, 60];

let numbersFilter = numbers.filter(function (e) {
  return e < 10;
});

console.log(numbersFilter);

let numbersMap = numbers.map((e) => e * 2);
console.log(numbersMap);

let numbersReduce = numbers.reduce((ac, e) => ac + e, 0);

console.log(numbersReduce);

Array.prototype.filterEvil = function (f) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (f(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
let numbers2Filter = numbers.filterEvil((e) => e > 10);
console.log(numbers2Filter);
// numbers.a();

Array.prototype.mapEvil = function (f) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    let element = f(this[i]);
    newArray.push(element);
  }
  return newArray;
};
let numbers2Map = numbers.mapEvil((e) => e * 2);
console.log(numbers2Map);

Array.prototype.reduceEvil = function (f, init) {
  let result = init ? init : 0;

  for (let i = 0; i < this.length; i++) {
    result = f(result, this[i]);
  }
  return result;
};

let numbers2Reduce = numbers.reduceEvil((ac, e) => ac + e, 0);

console.log(numbers2Reduce);

console.log("original");
console.log(numbers);
