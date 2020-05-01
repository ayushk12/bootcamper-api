// @desc Logs request to console
const logger = (req, res, next) => {
  req.hello = "Hellow world";
  console.log("middlware");
  next();
};

module.exports = logger;
