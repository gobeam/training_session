const getHelloWorldPromise = (throwError) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!throwError) {
        resolve("Hello World");
      } else {
        reject("Error");
      }
    }, 1000);
    // reject("There was some error!");
  });
  // return Promise.resolve(["direct","resolve"])
  // return Promise.reject("This function failed")
};

getHelloWorldPromise(true)
  .then((helloworld) => {
    console.log("Success: ", helloworld);
    return true;
  })
  .then((result) => {
    console.log("Next promise: ", result);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("this request is completed");
  });
