// let exampleArray = [1, 2, 3, 4, 5];
// console.log(exampleArray.length);
// console.log(exampleArray[exampleArray.length - 1]);

// exampleArray[2] = "test";
// exampleArray[0] = "hello world";
// console.log(exampleArray);

// // let objectExample = {
// //     name: "John",
// //     age: 30,
// // };
// // console.log(objectExample.age)
// let array1 = ["apple","mango"];
// let array2 = ["orange","banana"];
// console.log([...array1, ...array2]);

// let object1 = {
//     name: "John",
//     age: 30,
// };

// let object2 = {
//     address: "kathmandu",
//     college: "NITK",
// };
// let object3 = {...object1, ...object2};

// let {name, age, address, college} = object3;
// console.log("🚀 ~ file: array_method.js ~ line 26 ~ ", name, age, address, college);

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
console.log("🚀 ~ file: array_method.js ~ line 70 ~ newSlicedArray", newSlicedArray)
console.log("🚀 ~ file: array_method.js ~ line 70 ~ sliceExample", sliceExample)

console.log("************************");
console.log("************************");
// forEach Loop
const loopFunction = (fruit, fruitIndex) => {
    console.log("Key: ",fruitIndex)
    console.log("Value: ",fruit)
};

sliceExample.forEach(loopFunction);
