// Assignment code here
// Password input options
var request;
var confirmCharacters;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;

// Special characters 
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// the space value is to allow for uppercase characters
space = [];

var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

var get = document.querySelector("#generate");

// allows for uppercase conversion on alphabet variable
alphabet1 = alphabet.map(toUpper);

get.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

function generatePassword() {
    // Asks for users confirmation of character length
    request = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128 characters."));
  
    if (!request) {
        alert("This needs a value");
    } else if (request < 8 || request > 128) {
        // Confirms inputted request


        // Start user input prompts
        request = parseInt(prompt("You must choose between 8 and 128 characters."));

    } else {
        // Continues once user input is validated
        confirmCharacters = confirm("Would you like to include special characters?");
        confirmUppercase = confirm("Would you like to include Uppercase letters?");
        confirmLowercase = confirm("Would you like to include Lowercase letters?");
        confirmNumbers = confirm("Would you like to include numbers?");
    };

    // Else if for 4 negative options
    if (!confirmCharacters && !confirmNumbers && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };
  };

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