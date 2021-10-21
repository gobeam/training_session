const logRequest = (req, res, next) => {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.originalUrl);
    console.log("Request Time: ", new Date().toLocaleString());
    console.log("Request IP: ", req.ip);
    console.log("Request Headers: ", req.headers);
    console.log("Request Body: ", req.body);
    console.log("Request Host:", req.hostname);
//   console.log(
//     `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
//   );
//   console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logRequest;
