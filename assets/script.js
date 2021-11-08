// Assignment code here
var password=document.getElementById("password")

var password = function () {
  var promptPasswordCriteria = window.prompt ('Please select from the following to have included in your password.');

  // Validate prompt answer
  if (promptPasswordCriteria === "" || promptPasswordCriteria === null) {
    window.alert("You need to provide a valid answer! Please try again.")
    // use return to call it again and stop the rest of this fucntion from running
    return password();
  }

  
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  // Prompt for password criteria
  // Ask user how long they would like the password to be? Minimum of 8 characters and a max of 128 characters
  // Ask the user to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);