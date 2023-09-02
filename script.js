// Assignment Code
const generateBtn = document.getElementById('generateBtn')


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    var charactersLength = prompt('Please enter the number of characters you want. (Must be a min. of 8 characters & a maximum of 128.')

    var includeNumbers = confirm('Do you want numbers included?')

    var includeLowerCases = confirm('Do you want to include lowercase?')

    var includeUpperCases = confirm('Do you want to include uppercase?')

    var includeSymbolCharacters = confirm('Do you want to include symbols?')

    let generatedPassword = ''
    
    for(let i = 0; i < charactersLength; i += 1) {
      if (includeNumbers) {
        generatedPassword += getRandomNumber()
      } 
      if (includeSymbolCharacters) {
        generatedPassword += getRandomSymbol()
      }
      if (includeLowerCases) {
        generatedPassword += getRandomLower()
      }
      if (includeUpperCases) {
        generatedPassword += getRandomUpper()
      }
    }
    
    var finalPassword = generatedPassword.slice(0, charactersLength);
    
    return finalPassword;

}


function getRandomNumber() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return numbers[Math.floor(Math.random()*numbers.length)]
  }

function getRandomLower() {
    var lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return lowerCases[Math.floor(Math.random()*lowerCases.length)]
  }
  
  function getRandomUpper() {
    var upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return upperCases[Math.floor(Math.random()*upperCases.length)]
  }
  
  function getRandomSymbol() {
    var symbolCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '=', '<', '>', '/']
    return symbolCharacters[Math.floor(Math.random()*symbolCharacters.length)]  
  }
