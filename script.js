///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  var myCharacters = () => {
  var characterARRAY = [];

  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  var lowerCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  
  var specialCharacters = "!@#$%^&*()<>?".split("");
  
  var numberCharacters = "0123456789".split("");



if (isupperCharacters) {
  characterARRAY.push(...upperCharacters);
}

if (islowerCharacters) {
  characterARRAY.push(...lowerCharacters);
}

if (isspecialCharacters) {
  characterARRAY.push(...specialCharacters);
}

if (isnumberCharacters) {
  characterARRAY.push(...numberCharacters);
}

return characterARRAY

  }



var passwordLength = window.prompt("How many characters would you like your password to contain?")

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length must be at least 8 characters")
  generatePassword()  
}

var isupperCharacters = window.confirm("Do you want any uppercase letters in your password?")

var islowerCharacters = window.confirm("Do you want any lowercase letters in your password")

var isspecialCharacters = window.confirm("Do you want any special characters in your password?")

var isnumberCharacters = window.confirm("Do you want any number characters in your password?")

if (!isupperCharacters && !islowerCharacters && !isspecialCharacters && !isnumberCharacters) {
  alert("Select at least one character!");
}

var myPassword = [];
var text = myCharacters()

for (let i = 0; i < passwordLength; i++) {
  var random = Math.floor(Math.random() * text.length);
  myPassword.push(text[random]);
}

return myPassword.join("")

}

//generateBtn.addEventListener("Click", writePassword);