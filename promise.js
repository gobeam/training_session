const request = require("request");
// const getHelloWorldPromise = (throwError) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!throwError) {
//         resolve("Hello World");
//       } else {
//         reject("Error");
//       }
//     }, 1000);
//     // reject("There was some error!");
//   });
//   // return Promise.resolve(["direct","resolve"])
//   // return Promise.reject("This function failed")
// };

// getHelloWorldPromise(true)
//   .then((helloworld) => {
//     console.log("Success: ", helloworld);
//     return true;
//   })
//   .then((result) => {
//     console.log("Next promise: ", result);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   })
//   .finally(() => {
//     console.log("this request is completed");
//   });

// Promise.all

// const promise1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 1");
//     }, 4000);
//   });

// const promise2 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });

// Promise.all([promise2(), promise1()])
//   .then((result) => {
//     console.log("Promise all: ", result);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// const yahooWeatherAPI = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         kathmandu: 20,
//       });
//       // reject("Error in yahoo api");
//     }, 1000);
//   });

// const googleWeatherAPI = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         kathmandu: 19,
//       });
//     }, 2000);
//   });

// Promise.race([yahooWeatherAPI(), googleWeatherAPI()])
//   .then((result) => {
//     console.log("Weather result: ", result);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

const getDogApiV1 = () => {
  return new Promise((resolve, reject) => {
    request(
      "https://dog.ceo/api/breeds/image/random",
      (error, response, body) => {
        if (error) {
          reject(error);
        }
        resolve({
          version: "v1",
          data: body,
        });
      }
    );
  });
};

const getDogApiV2 = () => {
  return new Promise((resolve, reject) => {
    request(
      "https://dog.ceo/api/breeds/image/random",
      (error, response, body) => {
        if (error) {
          reject(error);
        }
        resolve({
          version: "v2",
          data: body,
        });
      }
    );
  });
};

Promise.all([getDogApiV1(), getDogApiV2()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
