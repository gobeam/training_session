let exampleArray = [1, 2, 3, 4, 5];
console.log(exampleArray.length);
console.log(exampleArray[exampleArray.length - 1]);

exampleArray[2] = "test";
exampleArray[0] = "hello world";
console.log(exampleArray);

// let objectExample = {
//     name: "John",
//     age: 30,
// };
// console.log(objectExample.age)
let array1 = ["apple","mango"];
let array2 = ["orange","banana"];
console.log([...array1, ...array2]);

let object1 = {
    name: "John",
    age: 30,
};

let object2 = {
    address: "kathmandu",
    college: "NITK",
};
let object3 = {...object1, ...object2};

let {name, age, address, college} = object3;
console.log("🚀 ~ file: array_method.js ~ line 26 ~ ", name, age, address, college);

//push
let pushExample = ["apple", "banana"];
pushExample.push("orange");
console.log("🚀 ~ file: array_method.js ~ line 35 ~ pushExample", pushExample);

//pop
let popExample = ["apple", "banana", "avocado"];
popExample.pop();
console.log("🚀 ~ file: array_method.js ~ line 41 ~ popExample", popExample);

// unshift
let unshiftExample = ["apple", "banana", "avocado"];
unshiftExample.unshift("orange");
console.log(
  "🚀 ~ file: array_method.js ~ line 50 ~ unshiftExample",
  unshiftExample
);

// shift
let shiftExample = ["apple", "banana", "avocado"];
shiftExample.shift();
console.log(
  "🚀 ~ file: array_method.js ~ line 45 ~ shiftExample",
  shiftExample
);

// splice
let spliceExample = ["apple", "banana", "avocado"];
// spliceExample.splice(1, 0);
spliceExample.splice(1, 0, "orange", "mango");
console.log(
  "🚀 ~ file: array_method.js ~ line 55 ~ spliceExample",
  spliceExample
);

// slice
let sliceExample = ["apple", "banana", "avocado", "orange", "kiwi"];
// delete sliceExample[0];
// sliceExample.splice(0,1)
// console.log("🚀 ~ file: array_method.js ~ line 70 ~ sliceExample", sliceExample)

let newSlicedArray = sliceExample.slice(1);
console.log(
  "🚀 ~ file: array_method.js ~ line 70 ~ newSlicedArray",
  newSlicedArray
);
console.log(
  "🚀 ~ file: array_method.js ~ line 70 ~ sliceExample",
  sliceExample
);

console.log("************************");
console.log("************************");

// forEach Loop
const loopFunction = (fruit, fruitIndex) => {
  console.log("Key: ", fruitIndex);
  console.log("Value: ", fruit);
};

sliceExample.forEach(loopFunction);

// map example
let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map((value, index) => {
  return value * 2;
});
console.log("🚀 ~ file: array_method.js ~ line 96 ~ numbers", numbers);

console.log(
  "🚀 ~ file: array_method.js ~ line 100 ~ newNumbers ~ newNumbers",
  newNumbers
);

// filter example
let agesArray = [15, 20, 30];

let aboveTwenty = agesArray.filter((age) => {
  return age <= 20;
});

console.log("🚀 ~ file: array_method.js ~ line 109 ~ agesArray", agesArray);

console.log(
  "🚀 ~ file: array_method.js ~ line 113 ~ aboveTwenty ~ aboveTwenty",
  aboveTwenty
);

// let person = {
//   name: "John",
//   age: 30,
//   address: "kathmandu"
// };

// delete person.address;
// console.log("🚀 ~ file: array_method.js ~ line 128 ~ person", person)

// iterators
let countryArray = ["Nepal", "India", "China", "Japan"];

for (let country of countryArray) {
  console.log("🚀 ~ file: array_method.js ~ line 133 ~ country", country);
}

let objectExample = {
  name: "John",
  age: 30,
  address: "kathmandu",
}

for (let obj in objectExample) {
  console.log("🚀 ~ file: array_method.js ~ line 133 ~ obj", objectExample[obj]);
}

console.log(Object.keys(objectExample));
console.log(Object.values(objectExample));



