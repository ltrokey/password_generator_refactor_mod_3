
const generateBtn = document.getElementById('generate')

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const symbolCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
'=', '<', '>', '/']


generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var charactersLength = prompt('Please enter the number of characters you want. (Must be a min. of 8 characters & a maximum of 128.')
    var charactersNum =  Number(charactersLength)
    if (charactersLength < 8) {
        alert ('Invalid - Characters entered must be greater than 8.')
        return
    } else if (charactersLength > 128) {
        alert ('Invalid - Characters entered must be less than 128.')
        return 
    } else if (isNaN(charactersNum)) {
      alert ('Invalid - Characters entered must be a number.')
      return
    }

    var includeNumbers = confirm('Do you want numbers included?')

    var includeLowerCases = confirm('Do you want to include lowercase?')

    var includeUpperCases = confirm('Do you want to include uppercase?')

    var includeSymbolCharacters = confirm('Do you want to include symbols?')

    var optionsArray = [includeNumbers, includeLowerCases, includeUpperCases, includeSymbolCharacters]

    if (!optionsArray.includes(true)) {
        alert ('Invalid - Please select at least one option of Numbers, Lowercase, Uppercase, or Symbols.')
        return
    }

    let generatedPassword = ''
    
    for(let i = 0; i < charactersLength; i += 1) {
      if (includeNumbers) {
        generatedPassword += getRandom(numbers)
      } 
      if (includeSymbolCharacters) {
        generatedPassword += getRandom(symbolCharacters)
      }
      if (includeLowerCases) {
        generatedPassword += getRandom(lowerCases)
      }
      if (includeUpperCases) {
        generatedPassword += getRandom(upperCases)
      }
    }
    
    var result = generatedPassword.slice(0, charactersLength);
    
    return result;
}

function getRandom(arr) {

    return arr[Math.floor(Math.random()*arr.length)]
  }
