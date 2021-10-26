const { check, validationResult } = require("express-validator");

// catchValidator is a function that takes a function and check validation result and if error is there it returns error with status code 422 and error payload and in case of no error it returns passed function
const catchValidationError = (fn) => {
  return function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return fn(req, res, next).catch(next);
    }
    let errorData = errors.mapped();
    return res.status(422).json(errorData);
  };
};

module.exports = catchValidationError;
