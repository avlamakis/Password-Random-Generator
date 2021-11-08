// Assignment code here
var password = document.getElementById("password");

var generatePassword = function () {
    // Prompt for password criteria
    var passwordCriteria = window.prompt("Which would you like to include in your password? 1 for LOWERCASE, 2 for UPPERCASE, 3 for NUMERIC, 4 for SPECIAL CHARACTERS, 5 for ALL");

      // validate prompt answer
  if (passwordCriteria === "" || passwordCriteria === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return fightOrSkip();
  }

    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = '8,128'
    var password = "";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}

// Ask user how long they would like the password to be? Minimum of 8 characters and a max of 128 characters
// Ask the user to confirm whether or not to include lowercase, uppercase, numeric, and/or special character


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