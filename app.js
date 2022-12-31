var userInput;
var userName;
userInput = 5;
userInput = "Max";
//with unknown type you have to check first type
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
