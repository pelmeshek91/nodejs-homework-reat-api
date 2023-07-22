const allowUpdateValidate = function (next) {
  this.getOptions.runValidators = true;
  next();
};
export default allowUpdateValidate;
