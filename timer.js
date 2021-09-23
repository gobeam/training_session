// setTimeout

const printHelloWorld = () => {
  console.log("Hello World, this is example of  setTimeout");
};

let counter = 0;
const printHelloWorldInterval = () => {
    counter++;
    console.log("counter: ", counter);
  };

setTimeout(printHelloWorld, 5000);

setInterval(printHelloWorldInterval, 2000); // 2s


