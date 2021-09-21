const age = 30;
if (age <= 20) {
  console.log("You are in teen age");
} else if (age > 20 && age <= 29) {
  console.log("you are in your twenty's");
} else {
  console.log("you are old");
}

let day = "monday";

switch (day) {
  case "monday":
    console.log("it is monday");
    break;
  case "tuesday":
    console.log("it is tuesday");
    break;
  case "sunday":
    console.log("it is sunday");
    break;
  default:
    console.log("your week day is not available here");
}

let counter = 0;
while (counter > 1) {
  console.log("🚀 ~ file: conditional.js ~ line 28 ~ counter", counter);
  counter++;
}

do {
  let text = "";
  text += "The number is " + counter;
  console.log("🚀 ~ file: conditional.js ~ line 35 ~ text", text);
  counter++;
} while (counter > 1);

for (let i = 10; i >= 1; i--) {
  if (i === 6) {
    break;
  }
  if (i === 9) {
    continue;
  }
  console.log("Value of i is: ", i);
}

let todaysDate = new Date();
console.log("🚀 ~ file: conditional.js ~ line 50 ~ todaysDate", todaysDate);
