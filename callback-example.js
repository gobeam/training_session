const makeStringUpperCase = (string) => {
  return string.toUpperCase();
};

const makeStringLowerCase = (string) => {
  return string.toLowerCase();
};

const padString = (string) => {
    return string.padStart(20, "0");
}

const passUserInput = (input, callback) => {
    let result = "Hello " + input;
    return callback(result);
}

console.log(makeStringLowerCase);

console.log(passUserInput("IIMS", makeStringLowerCase));
console.log(passUserInput("iims", makeStringUpperCase));
console.log(passUserInput("iims", padString));







