// Assignment code here
var password=document.getElementById("password")

var password = function () {
  var promptPasswordCriteria = window.prompt ('What characters would you like to have in your password? Press 1 for lowercase, 2 for uppercase, 3 for numeric, 4 for special characters.');

  promptPasswordCriteria = parseInt(promptPasswordCriteria);

  // use switch case to carry out action
  switch (promptPasswordCriteria) {
      case 1:
          password.lowerCase();
          break;
          case 2:
              password.upperCase();
              break;
              case 3:
                  password.numeric();
                  break;
                  case 4:
                      password.specialcharacters();
                      break;
                      default:
                          window.alert("You did not pick a valid option. Try again.")
                          password();
                          break;
  }

  var passwordFormat = {
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