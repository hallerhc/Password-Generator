// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericChars = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!', '@', '#', '$', '%', '&', '*', '?']
var lowerChars = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperChars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
var passwordLength;

// Write password to the #password input
function writePassword() {
  var passwordArray = []
  passwordLength = prompt("How many characters would you like?")
  var isNumeric = confirm("Would you like numeric characters?")
  var isSpecial = confirm("Would you like special characters?")
  var isLower = confirm("Would you like lowercase letters?")
  var isUpper = confirm("Would you like uppercase letters?")

  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordArray.push()
  }

  if (isNumeric) {
    passwordArray.push(numericChars)
  }
 
  if (isSpecial) {
    passwordArray.push(specialChars)
  }
  
  if (isLower) {
    passwordArray.push(lowerChars)
  }

  if (isUpper) {
    passwordArray.push(upperChars)
  }

  var password = generatePassword(passwordArray);
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

function generatePassword(arr) {
  var password = '';
  for (var i=0; i < passwordLength; i++) {
     var workingArray = arr[Math.floor(Math.random() * arr.length)]
     password += workingArray[Math.floor(Math.random() * workingArray.length)]
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
