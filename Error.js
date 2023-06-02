class AppError {
    constructor(message, statusCode = 400, errors) {
      this.message = message;
      this.errors = errors
      this.statusCode = statusCode;
    }
}
  
module.exports =  AppError;
  