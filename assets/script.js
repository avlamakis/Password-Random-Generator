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
var toUpper = function (convert) {
    return convert.toUpperCase();
};

// allows for uppercase conversion on alphabet variable
alphabet1 = alphabet.map(toUpper);


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

    // Return if statement if no options are selected.
    if (!confirmCharacters && !confirmNumbers && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a character to include!");

    }
   

    // confirmation of all 4 input options
    else if (confirmCharacters && confirmNumbers && confirmUppercase && confirmLowercase) {

        choices = characters.concat(numbers, alphabet, alphabet1);
    }
    // confirmation scenarios for if only 3 input options are selected
    else if (confirmCharacters && confirmNumbers && confirmUppercase) {
        choices = characters.concat(numbers, alphabet1);
    }
    else if (confirmCharacters && confirmNumbers && confirmLowercase) {
        choices = characters.concat(numbers, alphabet);
    }
    else if (confirmCharacters && confirmLowercase && confirmUppercase) {
        choices = characters.concat(alphabet, alphabet1);
    }
    else if (confirmNumbers && confirmLowercase && confirmUppercase) {
        choices = numbers.concat(alphabet, alphabet1);
    }
    // confirmation scenarios for if only 2 input options are selected
    else if (confirmCharacters && confirmNumbers) {
        choices = characters.concat(numbers);

    } else if (confirmCharacters && confirmLowercase) {
        choices = characters.concat(alphabet);

    } else if (confirmCharacters && confirmUppercase) {
        choices = character.concat(alphabet1);
    }
    else if (confirmLowercase && confirmNumbers) {
        choices = alphabet.concat(numbers);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphabet.concat(alphabet1);

    } else if (confirmNumbers && confirmUppercase) {
        choices = numbers.concat(alphabet1);
    }
    // Confirmation of input of only 1 selection
    else if (confirmCharacters) {
        choices = characters;
    }
    else if (confirmNumbers) {
        choices = numbers;
    }
    else if (confirmLowercase) {
        choices = alphabet;
    }
    // Conversion for uppercase letters reference space
    else if (confirmUppercase) {
        choices = space.concat(alphabet1);
    };

      // this helps generate the length of the password as refernced above at the start
      var password = [];

 
      //randomizes the selections for each input selected
      for (var i = 0; i < request; i++) {
          var pickChoices = choices[Math.floor(Math.random() * choices.length)];
          password.push(pickChoices);
      }

      // utilized w3 and github resources to utilize the join method combining the array and strings
    var password = password.join("");
    UserInput(password);
    return password;
}
// This puts the password value within the textbox specified

function UserInput(password) {
    document.getElementById("password").textContent = password;

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